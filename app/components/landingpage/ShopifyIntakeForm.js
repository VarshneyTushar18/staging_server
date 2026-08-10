"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countries";
import Select from "react-select";
import styles from "./ShopifyIntakeForm.module.css";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const TURNSTILE_SITE_KEY = "0x4AAAAAACu4Eb4Q25bWJD9B";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  country: "",
  business_name: "",
  website: "",
  business_description: "",
  brand_mission: "",
  problem_solved: "",
  personality: "",
  categories: "",
  best_sellers: "",
  avg_price: "",
  physical: false,
  digital: false,
  subscription: false,
  audience_interests: "",
  pain_points: "",
  customer_goals: "",
  competitor1: "",
  competitor2: "",
  competitor3: "",
  amazon_store: "",
  top_asins: "",
  amazon_revenue: "",
  notes: "",
};

export default function ShopifyIntakeForm({ embedded = false, inModal = false, hideTitle = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initTurnstile = () => {
      if (
        !isMounted ||
        !window.turnstile ||
        !turnstileRef.current ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
          size: "flexible",
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
          "error-callback": () => {
            setCaptchaToken("");
            console.error("Turnstile failed");
          },
        });
      } catch (error) {
        console.error("Turnstile render failed:", error);
      }
    };

    if (window.turnstile?.render) {
      initTurnstile();
    } else {
      const existingScript = document.querySelector('script[src*="turnstile"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = initTurnstile;
        document.body.appendChild(script);
      } else {
        existingScript.addEventListener("load", initTurnstile);
        if (window.turnstile) initTurnstile();
      }
    }

    return () => {
      isMounted = false;
      try {
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      } catch (error) {
        console.error("Turnstile cleanup failed:", error);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let nextValue = type === "checkbox" ? checked : value;

    if (name === "name") {
      nextValue = value.replace(/[^A-Za-z\s]/g, "");
    }
    if (name === "phone") {
      nextValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setLoading(true);

    if (!captchaToken) {
      setFormError("Please complete the CAPTCHA verification.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API}/api/leads/shopify-intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_page:
            typeof window !== "undefined"
              ? window.location.href
              : "/shopify-development-company",
          captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(INITIAL_FORM);
        setCaptchaToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
        router.push("/thank-you");
      } else {
        setFormError(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Shopify intake form submit error:", error);
      setFormError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={inModal ? undefined : "shopify-intake-form"}
      className={`${styles.wrapper} ${embedded ? styles.embedded : ""} ${inModal ? styles.modal : ""}`}
    >
      {!hideTitle ? (
        <h2 id="shopify-intake-title" className={styles.title}>
          Shopify AI Store Builder Questionnaire
        </h2>
      ) : null}

      <form onSubmit={handleSubmit}>
        {formError ? (
          <div className={`alert alert-danger ${styles.error}`}>{formError}</div>
        ) : null}

        <div className={styles.section}>
          <h3>Contact Details</h3>
          <div className="row">
            <div className="col-md-4">
              <label className={styles.label} htmlFor="shopify-name">
                Your Name *
              </label>
              <input
                id="shopify-name"
                type="text"
                className="form-control mb-3"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className={styles.label} htmlFor="shopify-email">
                Email *
              </label>
              <input
                id="shopify-email"
                type="email"
                className="form-control mb-3"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className={styles.label} htmlFor="shopify-phone">
                Phone *
              </label>
              <input
                id="shopify-phone"
                type="tel"
                className="form-control mb-3"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                minLength={6}
                maxLength={15}
                required
              />
            </div>
          </div>
          <label className={styles.label}>Country *</label>
          <Select
            options={countries}
            placeholder="Select Country"
            isSearchable
            className="mb-3"
            value={countries.find((c) => c.value === formData.country) || null}
            onChange={(selectedOption) => {
              setFormData((prev) => ({
                ...prev,
                country: selectedOption?.value || "",
              }));
            }}
            required
          />
        </div>

        <div className={styles.section}>
          <h3>1. Business Information</h3>
          <label className={styles.label}>Business Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
          />
          <label className={styles.label}>Website</label>
          <input
            type="url"
            className="form-control mb-3"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <label className={styles.label}>Business Description</label>
          <textarea
            className="form-control mb-3"
            name="business_description"
            rows={4}
            value={formData.business_description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.section}>
          <h3>2. Brand Identity</h3>
          <label className={styles.label}>Brand Mission</label>
          <textarea
            className="form-control mb-3"
            name="brand_mission"
            rows={4}
            value={formData.brand_mission}
            onChange={handleChange}
          />
          <label className={styles.label}>Problem Solved</label>
          <textarea
            className="form-control mb-3"
            name="problem_solved"
            rows={4}
            value={formData.problem_solved}
            onChange={handleChange}
          />
          <div className={styles.optionGroup}>
            {["Luxury", "Premium", "Professional", "Innovative"].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="personality"
                  value={value}
                  checked={formData.personality === value}
                  onChange={handleChange}
                />
                {value}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>3. Products</h3>
          <label className={styles.label}>Product Categories</label>
          <textarea
            className="form-control mb-3"
            name="categories"
            rows={4}
            value={formData.categories}
            onChange={handleChange}
          />
          <label className={styles.label}>Best Selling Products</label>
          <textarea
            className="form-control mb-3"
            name="best_sellers"
            rows={4}
            value={formData.best_sellers}
            onChange={handleChange}
          />
          <label className={styles.label}>Average Product Price</label>
          <input
            type="text"
            className="form-control mb-3"
            name="avg_price"
            value={formData.avg_price}
            onChange={handleChange}
          />
          <div className={styles.optionGroup}>
            <label>
              <input
                type="checkbox"
                name="physical"
                checked={formData.physical}
                onChange={handleChange}
              />
              Physical Product
            </label>
            <label>
              <input
                type="checkbox"
                name="digital"
                checked={formData.digital}
                onChange={handleChange}
              />
              Digital Product
            </label>
            <label>
              <input
                type="checkbox"
                name="subscription"
                checked={formData.subscription}
                onChange={handleChange}
              />
              Subscription
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h3>4. Audience</h3>
          <label className={styles.label}>Audience Interests</label>
          <textarea
            className="form-control mb-3"
            name="audience_interests"
            rows={4}
            value={formData.audience_interests}
            onChange={handleChange}
          />
          <label className={styles.label}>Pain Points</label>
          <textarea
            className="form-control mb-3"
            name="pain_points"
            rows={4}
            value={formData.pain_points}
            onChange={handleChange}
          />
          <label className={styles.label}>Customer Goals</label>
          <textarea
            className="form-control mb-3"
            name="customer_goals"
            rows={4}
            value={formData.customer_goals}
            onChange={handleChange}
          />
        </div>

        <div className={styles.section}>
          <h3>5. Competitors</h3>
          <label className={styles.label}>Competitor 1</label>
          <input
            type="url"
            className="form-control mb-3"
            name="competitor1"
            value={formData.competitor1}
            onChange={handleChange}
          />
          <label className={styles.label}>Competitor 2</label>
          <input
            type="url"
            className="form-control mb-3"
            name="competitor2"
            value={formData.competitor2}
            onChange={handleChange}
          />
          <label className={styles.label}>Competitor 3</label>
          <input
            type="url"
            className="form-control mb-3"
            name="competitor3"
            value={formData.competitor3}
            onChange={handleChange}
          />
        </div>

        <div className={styles.section}>
          <h3>6. Amazon Information</h3>
          <label className={styles.label}>Amazon Store URL</label>
          <input
            type="url"
            className="form-control mb-3"
            name="amazon_store"
            value={formData.amazon_store}
            onChange={handleChange}
          />
          <label className={styles.label}>Top ASINs</label>
          <textarea
            className="form-control mb-3"
            name="top_asins"
            rows={4}
            value={formData.top_asins}
            onChange={handleChange}
          />
          <label className={styles.label}>Monthly Revenue</label>
          <input
            type="text"
            className="form-control mb-3"
            name="amazon_revenue"
            value={formData.amazon_revenue}
            onChange={handleChange}
          />
        </div>

        <div className={styles.section}>
          <h3>7. Additional Notes</h3>
          <label className={styles.label}>Anything else?</label>
          <textarea
            className="form-control mb-3"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <div ref={turnstileRef} className="mb-3" style={{ minHeight: "70px" }} />

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Submitting..." : "Submit Questionnaire"}
        </button>
      </form>
    </div>
  );
}

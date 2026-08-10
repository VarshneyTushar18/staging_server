"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AmazonOnboardingForm.module.css";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const TURNSTILE_SITE_KEY = "0x4AAAAAACu4Eb4Q25bWJD9B";

const MARKETPLACES = ["India", "UAE", "USA", "UK", "KSA"];
const FULFILMENT = ["FBA", "FBM", "Easy Ship", "Hybrid"];

const SERVICE_FIELDS = [
  { name: "svc_account_management", label: "Complete Account Management" },
  { name: "svc_ppc_management", label: "PPC Management" },
  { name: "svc_listing_creation", label: "Listing Creation" },
  { name: "svc_listing_optimization", label: "Listing Optimization" },
  { name: "svc_a_plus_content", label: "A+ Content" },
  { name: "svc_brand_store", label: "Brand Store" },
  { name: "svc_inventory_management", label: "Inventory Management" },
  { name: "svc_reimbursements", label: "Reimbursements" },
];

const INITIAL_FORM = {
  company_name: "",
  brand_name: "",
  contact_person: "",
  email: "",
  phone: "",
  website: "",
  seller_central_url: "",
  brand_store_url: "",
  seller_id: "",
  merchant_token: "",
  marketplace: "India",
  fulfilment: "FBA",
  top_product_urls: "",
  top_competitor_urls: "",
  total_skus: "",
  monthly_revenue: "",
  svc_account_management: false,
  svc_ppc_management: false,
  svc_listing_creation: false,
  svc_listing_optimization: false,
  svc_a_plus_content: false,
  svc_brand_store: false,
  svc_inventory_management: false,
  svc_reimbursements: false,
  current_ad_spend: "",
  target_ad_budget: "",
  current_acos: "",
  target_acos: "",
  advertising_challenges: "",
  business_goals: "",
};

export default function AmazonOnboardingForm({ inModal = false, hideTitle = false }) {
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
          "error-callback": () => setCaptchaToken(""),
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

    if (name === "contact_person") {
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
      const response = await fetch(`${API}/api/leads/amazon-onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          total_skus: formData.total_skus ? Number(formData.total_skus) : null,
          source_page:
            typeof window !== "undefined"
              ? window.location.href
              : "/amazon-marketing-services",
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
      console.error("Amazon onboarding submit error:", error);
      setFormError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${inModal ? styles.modal : ""}`}
    >
      {!hideTitle ? (
        <h2 id="amazon-onboarding-title" className={styles.title}>
          Amazon Seller Onboarding Questionnaire
        </h2>
      ) : null}

      <form onSubmit={handleSubmit}>
        {formError ? (
          <div className={`alert alert-danger ${styles.error}`}>{formError}</div>
        ) : null}

        <div className={styles.section}>
          <h3>Business Information</h3>
          <div className="row">
            <div className="col-md-6">
              <label className={styles.label} htmlFor="company_name">Company Name *</label>
              <input id="company_name" className="form-control mb-3" name="company_name" value={formData.company_name} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="brand_name">Brand Name</label>
              <input id="brand_name" className="form-control mb-3" name="brand_name" value={formData.brand_name} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="contact_person">Contact Person *</label>
              <input id="contact_person" className="form-control mb-3" name="contact_person" value={formData.contact_person} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="email">Email *</label>
              <input id="email" type="email" className="form-control mb-3" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="phone">Phone *</label>
              <input id="phone" type="tel" className="form-control mb-3" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="website">Website</label>
              <input id="website" type="url" className="form-control mb-3" name="website" value={formData.website} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Amazon Store</h3>
          <div className="row">
            <div className="col-md-6">
              <label className={styles.label} htmlFor="seller_central_url">Seller Central Store URL</label>
              <input id="seller_central_url" type="url" className="form-control mb-3" name="seller_central_url" placeholder="https://sellercentral.amazon..." value={formData.seller_central_url} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="brand_store_url">Amazon Brand Store URL</label>
              <input id="brand_store_url" type="url" className="form-control mb-3" name="brand_store_url" value={formData.brand_store_url} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="seller_id">Seller ID</label>
              <input id="seller_id" className="form-control mb-3" name="seller_id" value={formData.seller_id} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="merchant_token">Merchant Token</label>
              <input id="merchant_token" className="form-control mb-3" name="merchant_token" value={formData.merchant_token} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="marketplace">Marketplace</label>
              <select id="marketplace" className="form-control mb-3" name="marketplace" value={formData.marketplace} onChange={handleChange}>
                {MARKETPLACES.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="fulfilment">Fulfilment</label>
              <select id="fulfilment" className="form-control mb-3" name="fulfilment" value={formData.fulfilment} onChange={handleChange}>
                {FULFILMENT.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Products</h3>
          <label className={styles.label} htmlFor="top_product_urls">Top Product URLs</label>
          <textarea id="top_product_urls" className="form-control mb-3" name="top_product_urls" rows={4} placeholder="One URL per line" value={formData.top_product_urls} onChange={handleChange} />
          <label className={styles.label} htmlFor="top_competitor_urls">Top Competitor URLs</label>
          <textarea id="top_competitor_urls" className="form-control mb-3" name="top_competitor_urls" rows={4} value={formData.top_competitor_urls} onChange={handleChange} />
          <div className="row">
            <div className="col-md-6">
              <label className={styles.label} htmlFor="total_skus">Total SKUs</label>
              <input id="total_skus" type="number" min="0" className="form-control mb-3" name="total_skus" value={formData.total_skus} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="monthly_revenue">Monthly Revenue</label>
              <input id="monthly_revenue" className="form-control mb-3" name="monthly_revenue" value={formData.monthly_revenue} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Services Required</h3>
          <div className={styles.optionGroup}>
            {SERVICE_FIELDS.map(({ name, label }) => (
              <label key={name}>
                <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Advertising</h3>
          <div className="row">
            <div className="col-md-6">
              <label className={styles.label} htmlFor="current_ad_spend">Current Monthly Ad Spend</label>
              <input id="current_ad_spend" className="form-control mb-3" name="current_ad_spend" value={formData.current_ad_spend} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="target_ad_budget">Target Monthly Budget</label>
              <input id="target_ad_budget" className="form-control mb-3" name="target_ad_budget" value={formData.target_ad_budget} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="current_acos">Current ACOS</label>
              <input id="current_acos" className="form-control mb-3" name="current_acos" value={formData.current_acos} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className={styles.label} htmlFor="target_acos">Target ACOS</label>
              <input id="target_acos" className="form-control mb-3" name="target_acos" value={formData.target_acos} onChange={handleChange} />
            </div>
          </div>
          <label className={styles.label} htmlFor="advertising_challenges">Current Advertising Challenges</label>
          <textarea id="advertising_challenges" className="form-control mb-3" name="advertising_challenges" rows={4} value={formData.advertising_challenges} onChange={handleChange} />
        </div>

        <div className={styles.section}>
          <h3>Goals</h3>
          <label className={styles.label} htmlFor="business_goals">Business Goals</label>
          <textarea id="business_goals" className="form-control mb-3" name="business_goals" rows={4} value={formData.business_goals} onChange={handleChange} />
        </div>

        <div ref={turnstileRef} className="mb-3" style={{ minHeight: "70px" }} />

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Submitting..." : "Submit Questionnaire"}
        </button>
      </form>
    </div>
  );
}

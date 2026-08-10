"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const TURNSTILE_SITE_KEY = "0x4AAAAAACu4Eb4Q25bWJD9B";

const MARKETPLACE_OPTIONS = [
  "Amazon",
  "Flipkart",
  "Nykaa",
  "Quick commerce",
  "Other",
];

const SPEND_BANDS = [
  { value: "", label: "Monthly ad spend / revenue" },
  { value: "<₹1L", label: "< ₹1L" },
  { value: "₹1–5L", label: "₹1–5L" },
  { value: "₹5–20L", label: "₹5–20L" },
  { value: "₹20L+", label: "₹20L+" },
];

const ROLE_OPTIONS = [
  { value: "", label: "Your role" },
  { value: "Founder", label: "Founder" },
  { value: "Marketing Head", label: "Marketing Head" },
  { value: "Other", label: "Other" },
];

const initialFormData = {
  name: "",
  mailid: "",
  countrycode: "India (+91)",
  phone: "",
  company: "",
  website: "",
  marketplaces: [],
  spendBand: "",
  role: "",
  comment: "",
};

export default function AmazonForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
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
    let { name, value } = e.target;
    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarketplaceChange = (marketplace) => {
    setFormData((prev) => {
      const exists = prev.marketplaces.includes(marketplace);
      return {
        ...prev,
        marketplaces: exists
          ? prev.marketplaces.filter((item) => item !== marketplace)
          : [...prev.marketplaces, marketplace],
      };
    });
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

    if (formData.marketplaces.length === 0) {
      setFormError("Please select at least one marketplace.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.mailid,
          country: formData.countrycode,
          phone: formData.phone,
          message: formData.comment?.trim() || "",
          company: formData.company,
          website: formData.website,
          marketplaces: formData.marketplaces,
          spend_band: formData.spendBand,
          role: formData.role,
          form_type: "amazon_ads",
          source_page:
            typeof window !== "undefined" ? window.location.href : "/amazon-ads",
          captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData(initialFormData);
        setCaptchaToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
        router.push("/thank-you");
      } else {
        setFormError(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Amazon form submit error:", error);
      setFormError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      {formError ? (
        <div id="formErrors" className="alert alert-danger">
          {formError}
        </div>
      ) : (
        <div id="formErrors" />
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="company"
          placeholder="Company / Brand Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="mailid"
          placeholder="Your Email Address"
          value={formData.mailid}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <select
          className="form-control"
          name="countrycode"
          value={formData.countrycode}
          onChange={handleChange}
          required
        >
          <option value="India (+91)">India (+91)</option>
        </select>
      </div>

      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          name="phone"
          placeholder="Your Phone No."
          value={formData.phone}
          onChange={handleChange}
          minLength={10}
          maxLength={13}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="website"
          placeholder="Website or Amazon Storefront URL"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <p className="mb-2 small text-muted">Marketplaces sold on</p>
        <div className="d-flex flex-wrap gap-2">
          {MARKETPLACE_OPTIONS.map((marketplace) => (
            <label
              key={marketplace}
              className="amazon-form-chip"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "6px 10px",
                fontSize: "13px",
                cursor: "pointer",
                background: formData.marketplaces.includes(marketplace)
                  ? "rgba(176, 208, 54, 0.18)"
                  : "#fff",
              }}
            >
              <input
                type="checkbox"
                checked={formData.marketplaces.includes(marketplace)}
                onChange={() => handleMarketplaceChange(marketplace)}
              />
              {marketplace}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <select
          className="form-control"
          name="spendBand"
          value={formData.spendBand}
          onChange={handleChange}
          required
        >
          {SPEND_BANDS.map((band) => (
            <option key={band.value || "empty"} value={band.value} disabled={!band.value}>
              {band.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <select
          className="form-control"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          {ROLE_OPTIONS.map((role) => (
            <option key={role.value || "empty"} value={role.value} disabled={!role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          name="comment"
          placeholder="Anything else we should know? (optional)"
          value={formData.comment}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div ref={turnstileRef} className="mb-3" style={{ minHeight: "70px" }} />

      <button
        type="submit"
        className="btn btn-danger mt-3"
        id="contactFormSubmitBtn"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Book a Growth Strategy Call"}
      </button>

      <p className="np-line">
        <i className="fas fa-lock"></i> No spam. No obligation. Custom growth plan
        presented on a call with a strategist.
      </p>
    </form>
  );
}

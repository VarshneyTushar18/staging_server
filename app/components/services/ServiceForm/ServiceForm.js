"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countries";
import Select from "react-select";
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ServiceForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
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
          sitekey: "0x4AAAAAACu4Eb4Q25bWJD9B",
          theme: "light",
          size: "flexible",
          callback: (token) => {
            setCaptchaToken(token);
          },
          "expired-callback": () => {
            setCaptchaToken("");
          },
          "error-callback": () => {
            setCaptchaToken("");
            console.error("Turnstile failed");
          },
        });
      } catch (error) {
        console.error("Turnstile render failed:", error);
      }
    };

    if (window.turnstile && window.turnstile.render) {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaToken) {
      alert("Please complete captcha");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country: formData.country,   // maps countrycode → country
          phone: formData.phone,
          message: formData.comment,        // maps comment → message
          form_type: "service_form",
          source_page: typeof window !== "undefined" ? window.location.pathname : "",
          captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          comment: "",
        });
        setCaptchaToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
        router.push("/thank-you");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contact-us1" onSubmit={handleSubmit} className="pt-3 px-3">
      <div className="row">
        {/* Name */}
        <div className="col-md-6 input-fields px-0">
          <div className="form-group me-1">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-md-6 input-fields px-0">
          <div className="form-group ms-1">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="row">
        {/* Country */}
        <div className="col-12 input-fields px-0">
          <div className="form-group newform">
            <Select
              options={countries}
              placeholder="Select Country"
              isSearchable
              className="mb-3"
              value={countries.find(
                (c) => c.value === formData.country
              )}
              onChange={(selectedOption) => {
                setFormData((prev) => ({
                  ...prev,
                  country: selectedOption?.value || "",
                }));
              }}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="col-12 input-fields px-0">
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Contact*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength="10"
              maxLength="11"
              required
            />
          </div>
        </div>
      </div>

      {/* Comment */}
      <div className="row pb-2">
        <div className="col-12 input-fields px-0">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Query*"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
        </div>
      </div>

      {/* Cloudflare Turnstile */}
      <div className="row">
        <div className="col-12 px-0">
          <div ref={turnstileRef} style={{ minHeight: "70px" }} />
        </div>
      </div>

      {/* Submit */}
      <div className="row">
        <div className="col-12 px-0">
          <input
            type="submit"
            value={loading ? "Sending…" : "Submit"}
            name="submit"
            disabled={loading}
            className="btn bg-dark text-white w-auto"
          />
        </div>
      </div>
    </form>
  );
}
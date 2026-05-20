"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Style from "./ContactForm.module.css";
import Select from "react-select";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const countryOptions = [
  { value: "+1", label: "United States (+1)" },
  { value: "+1", label: "Canada (+1)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+20", label: "Egypt (+20)" },
  { value: "+27", label: "South Africa (+27)" },
  { value: "+30", label: "Greece (+30)" },
  { value: "+31", label: "Netherlands (+31)" },
  { value: "+32", label: "Belgium (+32)" },
  { value: "+33", label: "France (+33)" },
  { value: "+34", label: "Spain (+34)" },
  { value: "+36", label: "Hungary (+36)" },
  { value: "+39", label: "Italy (+39)" },
  { value: "+40", label: "Romania (+40)" },
  { value: "+41", label: "Switzerland (+41)" },
  { value: "+43", label: "Austria (+43)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+45", label: "Denmark (+45)" },
  { value: "+46", label: "Sweden (+46)" },
  { value: "+47", label: "Norway (+47)" },
  { value: "+48", label: "Poland (+48)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+52", label: "Mexico (+52)" },
  { value: "+53", label: "Cuba (+53)" },
  { value: "+54", label: "Argentina (+54)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+56", label: "Chile (+56)" },
  { value: "+57", label: "Colombia (+57)" },
  { value: "+58", label: "Venezuela (+58)" },
  { value: "+60", label: "Malaysia (+60)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+62", label: "Indonesia (+62)" },
  { value: "+63", label: "Philippines (+63)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+66", label: "Thailand (+66)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+82", label: "South Korea (+82)" },
  { value: "+84", label: "Vietnam (+84)" },
  { value: "+86", label: "China (+86)" },
  { value: "+90", label: "Turkey (+90)" },
  { value: "+91", label: "India (+91)" },
  { value: "+92", label: "Pakistan (+92)" },
  { value: "+93", label: "Afghanistan (+93)" },
  { value: "+94", label: "Sri Lanka (+94)" },
  { value: "+95", label: "Myanmar (+95)" },
  { value: "+98", label: "Iran (+98)" },
  { value: "+211", label: "South Sudan (+211)" },
  { value: "+212", label: "Morocco (+212)" },
  { value: "+213", label: "Algeria (+213)" },
  { value: "+216", label: "Tunisia (+216)" },
  { value: "+218", label: "Libya (+218)" },
  { value: "+220", label: "Gambia (+220)" },
  { value: "+221", label: "Senegal (+221)" },
  { value: "+222", label: "Mauritania (+222)" },
  { value: "+223", label: "Mali (+223)" },
  { value: "+224", label: "Guinea (+224)" },
  { value: "+225", label: "Ivory Coast (+225)" },
  { value: "+226", label: "Burkina Faso (+226)" },
  { value: "+227", label: "Niger (+227)" },
  { value: "+228", label: "Togo (+228)" },
  { value: "+229", label: "Benin (+229)" },
  { value: "+230", label: "Mauritius (+230)" },
  { value: "+231", label: "Liberia (+231)" },
  { value: "+232", label: "Sierra Leone (+232)" },
  { value: "+233", label: "Ghana (+233)" },
  { value: "+234", label: "Nigeria (+234)" },
  { value: "+235", label: "Chad (+235)" },
  { value: "+236", label: "Central African Republic (+236)" },
  { value: "+237", label: "Cameroon (+237)" },
  { value: "+238", label: "Cape Verde (+238)" },
  { value: "+239", label: "Sao Tome and Principe (+239)" },
  { value: "+240", label: "Equatorial Guinea (+240)" },
  { value: "+241", label: "Gabon (+241)" },
  { value: "+242", label: "Congo (+242)" },
  { value: "+243", label: "DR Congo (+243)" },
  { value: "+244", label: "Angola (+244)" },
  { value: "+245", label: "Guinea-Bissau (+245)" },
  { value: "+248", label: "Seychelles (+248)" },
  { value: "+249", label: "Sudan (+249)" },
  { value: "+250", label: "Rwanda (+250)" },
  { value: "+251", label: "Ethiopia (+251)" },
  { value: "+252", label: "Somalia (+252)" },
  { value: "+253", label: "Djibouti (+253)" },
  { value: "+254", label: "Kenya (+254)" },
  { value: "+255", label: "Tanzania (+255)" },
  { value: "+256", label: "Uganda (+256)" },
  { value: "+257", label: "Burundi (+257)" },
  { value: "+258", label: "Mozambique (+258)" },
  { value: "+260", label: "Zambia (+260)" },
  { value: "+261", label: "Madagascar (+261)" },
  { value: "+262", label: "Reunion (+262)" },
  { value: "+263", label: "Zimbabwe (+263)" },
  { value: "+264", label: "Namibia (+264)" },
  { value: "+265", label: "Malawi (+265)" },
  { value: "+266", label: "Lesotho (+266)" },
  { value: "+267", label: "Botswana (+267)" },
  { value: "+268", label: "Eswatini (+268)" },
  { value: "+269", label: "Comoros (+269)" },
  { value: "+971", label: "United Arab Emirates (+971)" },
  { value: "+972", label: "Israel (+972)" },
  { value: "+973", label: "Bahrain (+973)" },
  { value: "+974", label: "Qatar (+974)" },
  { value: "+975", label: "Bhutan (+975)" },
  { value: "+976", label: "Mongolia (+976)" },
  { value: "+977", label: "Nepal (+977)" },
  { value: "+880", label: "Bangladesh (+880)" },
];

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mailid: "",
    countrycode: "",
    phone: "",
    comment: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const renderTurnstile = () => {
      if (
        !isMounted ||
        !window.turnstile ||
        !turnstileRef.current ||
        widgetIdRef.current
      ) {
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACu4Eb4Q25bWJD9B",
          theme: "light",

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
        console.error("Turnstile render error:", error);
      }
    };

    if (!window.turnstile) {
      const existingScript = document.querySelector('script[src*="turnstile"]');

      if (!existingScript) {
        const script = document.createElement("script");

        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

        script.async = true;
        script.defer = true;

        script.onload = renderTurnstile;

        document.body.appendChild(script);
      } else {
        existingScript.addEventListener("load", renderTurnstile);
      }
    } else {
      renderTurnstile();
    }

    return () => {
      isMounted = false;

      try {
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      } catch (error) {
        console.error("Turnstile cleanup error:", error);
      }
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{7,15}$/;

    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mailid.trim()) {
      newErrors.mailid = "Email is required";
    } else if (!validateEmail(formData.mailid)) {
      newErrors.mailid = "Please enter a valid email address";
    }

    if (!formData.countrycode) {
      newErrors.countrycode = "Please select a country";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setFormData({
      ...formData,
      phone: value,
    });

    if (errors.phone) {
      setErrors({
        ...errors,
        phone: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!captchaToken) {
      alert("Please complete captcha");
      return;
    }

    try {
      const response = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.mailid,
          country: formData.countrycode,
          phone: formData.phone,
          message: formData.comment,
          form_type: "contact_page",
          source_page: window.location.href,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          mailid: "",
          countrycode: "",
          phone: "",
          comment: "",
          website: "",
        });

        setCaptchaToken("");

        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }

        router.push("/thank-you");
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className={Style.ContactFormSection}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="feature-banner2-caption text-white">
              <Link
                href="/scam-alert"
                target="_blank"
                className="text-light pb-2"
              >
                <u>Scam Alert</u>
              </Link>

              <h1>Contact Us</h1>

              <ol>
                <li>
                  <p>
                    Drop us your requirements.
                    <br />
                    Our team will get back to you within 1 business day.
                  </p>
                </li>

                <li>
                  <strong>Ask your query:</strong>
                  <br />

                  <a href="mailto:info@tech2globe.com">
                    <u>Info@tech2globe.com</u>
                  </a>
                </li>

                <li>
                  <strong>Career with us:</strong>

                  <br />

                  <p>
                    Helping build dream{" "}
                    <Link
                      href="/career"
                      className="text-white text-decoration-underline d-inline-block"
                    >
                      careers
                    </Link>
                  </p>
                </li>

                <li className="pt-0">
                  <strong>Contact HR Department:</strong>

                  <br />

                  <a href="tel:+91-9871102889">
                    <u>+91-9871102889 (HR)</u>
                  </a>

                  <br />

                  <a href="mailto:career@tech2globe.com">
                    <u>career@tech2globe.com</u>
                  </a>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className={Style.Formbox}
            >
              <h2 className="fw-normal">Get in touch</h2>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {errors.name && (
                  <div className="text-danger mt-1">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email ID"
                  name="mailid"
                  value={formData.mailid}
                  onChange={handleChange}
                  required
                />

                {errors.mailid && (
                  <div className="text-danger mt-1">{errors.mailid}</div>
                )}
              </div>

              <div className="mb-3">
                <Select
                  options={countryOptions}
                  placeholder="Select Country"
                  value={countryOptions.find(
                    (opt) => opt.label === formData.countrycode,
                  )}
                  onChange={(selectedOption) => {
                    setFormData({
                      ...formData,
                      countrycode: selectedOption?.label || "",
                    });

                    if (errors.countrycode) {
                      setErrors({
                        ...errors,
                        countrycode: "",
                      });
                    }
                  }}
                  isSearchable
                />

                {errors.countrycode && (
                  <div className="text-danger mt-1">{errors.countrycode}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputMode="numeric"
                  minLength={7}
                  maxLength={15}
                  required
                />

                {errors.phone && (
                  <div className="text-danger mt-1">{errors.phone}</div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Enter Your Text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>

                {errors.comment && (
                  <div className="text-danger mt-1">{errors.comment}</div>
                )}
              </div>

              {/* Honeypot */}
              <input type="text" name="website" className="d-none" />

              {/* Cloudflare Turnstile */}
              <div ref={turnstileRef} className="mb-3"></div>

              <button
                type="submit"
                className="btn btn-danger mt-3"
                id="contactFormSubmitBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

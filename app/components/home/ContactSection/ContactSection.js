"use client";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./ContactSection.module.css"; // optional if you want CSS module
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

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

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  const turnstileRef = useRef(null);

  const widgetIdRef = useRef(null);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    else if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Name can only contain letters and spaces.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.country) newErrors.country = "Please select a country.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number.";

    if (!formData.message.trim()) newErrors.message = "Message is required.";

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
        [e.target.name]: null,
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initTurnstile = () => {
      if (!isMounted || !window.turnstile || !turnstileRef.current) {
        return;
      }

      // Prevent duplicate render
      if (widgetIdRef.current !== null) {
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACu4Eb4Q25bWJD9B",

          theme: "light",

          size: "flexible",

          callback: (token) => {
            console.log("CAPTCHA TOKEN:", token);

            setCaptchaToken(token);
          },

          "expired-callback": () => {
            setCaptchaToken("");
          },

          "error-callback": (err) => {
            console.error("Turnstile error:", err);

            setCaptchaToken("");
          },
        });
      } catch (err) {
        console.error("Turnstile render failed:", err);
      }
    };

    if (window.turnstile && window.turnstile.render) {
      initTurnstile();
    } else {
      const existingScript = document.querySelector(
        'script[src*="turnstile"]',
      );

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
      } catch (err) {
        console.error("Turnstile cleanup failed:", err);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!validate()) {
      return;
    }

    // Captcha validation
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

          email: formData.email,

          country: formData.country,

          phone: formData.phone,

          message: formData.message,

          form_type: "contact_page",

          source_page: "contact-us",

          // IMPORTANT
          captchaToken,
        }),
      });

      // API failed
      if (!response.ok) {
        const errorText = await response.text();

        console.error("API Error:", errorText);

        alert("Submission failed");

        return;
      }

      const data = await response.json();

      // Success
      if (data.success) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          message: "",
        });

        // Clear validation errors
        setErrors({});

        // Clear captcha token
        setCaptchaToken("");

        // Reset Turnstile widget
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }

        router.push("/thank-you");
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error("Network error:", error);

      alert("Server error");
    }
  };

  return (
    <section
      className={Style.ContactSection || "ContactSection"}
      id="contact-us"
    >
      <div className={Style.Overlay}>
        <div className="container">
          <div className="row justify-content-between">
            {/* ===== Contact Info ===== */}
            <div className="col-12 col-lg-5 text-white">
              <p className="sub-title text-uppercase">NEED ANY HELP</p>
              <h2 className="title">Get in touch with us</h2>
              <p className="text-white">
                Looking for IT solutions that can make a transformative
                difference?
              </p>

              <div className="contact-info mt-4">
                {/* Email */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <a
                      href="mailto:Info@tech2globe.com"
                      className="text-white hover-underline"
                      aria-label="Email Tech2Globe at Info@tech2globe.com"
                    >
                      Info@tech2globe.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </div>
                  <div>
                    <a
                      href="tel:+919899675039"
                      className="text-white hover-underline"
                      aria-label="Call Tech2Globe at +91-9899675039"
                    >
                      +91-9899675039 (Sales)
                    </a>
                    ,{" "}
                    <a
                      href="tel:+17783829628"
                      className="text-white hover-underline"
                      aria-label="Call Tech2Globe at +1-778-382-9628"
                    >
                      +1-778-382-9628 (Sales)
                    </a>
                  </div>
                </div>

                {/* Microsoft Teams */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={25}
                      height={25}
                      x={0}
                      y={0}
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fill="#ffffff"
                          d="M84.025 35.881c5.797 0 10.513-4.729 10.513-10.54-.577-13.983-20.45-13.979-21.026 0 0 5.811 4.717 10.54 10.513 10.54z"
                          opacity={1}
                          data-original="#464eb8"
                        />
                        <path
                          fill="#ffffff"
                          d="M90.958 38.71H51.61v-3.68c.784.139 1.605.232 2.467.268.093.001.186-.006.279-.007a15.5 15.5 0 0 0 1.063-.053c.12-.011.239-.021.357-.035.403-.045.801-.104 1.193-.181.024-.005.05-.008.074-.012a14.377 14.377 0 0 0 5.167-2.17 14.504 14.504 0 0 0 3.693-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.584.466-.884.064-.13.13-.26.19-.392.154-.345.296-.696.421-1.053l.032-.088c1.427-4.208.774-9.156-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159 12.49 12.49 0 0 0-1.347-.493c-.264-.081-.538-.141-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.405-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.368-.018a14.095 14.095 0 0 0-1.088-.007c-2.08.121-3.926.558-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.766-5.722 4.772-6.867 8.293a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.039.11.08.219.121.329H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h20.122c.026.118.059.232.087.349 2.77 10.899 12.463 18.607 23.917 18.885 9.503-.231 17.666-5.721 21.753-13.592.061.022.124.038.185.059 10.182 3.851 21.752-4.229 21.546-15.131V44.122c.001-2.984-2.434-5.412-5.426-5.412z"
                          opacity={1}
                          data-original="#464eb8"
                        />
                        <path
                          fill="#ebebeb"
                          d="M77.444 44.232c.069-2.971-2.287-5.448-5.251-5.521H50.761a1.43 1.43 0 0 0-1.429 1.433v29.095a2.433 2.433 0 0 1-2.428 2.433H30.199a1.429 1.429 0 0 0-1.399 1.721c2.367 11.561 12.248 19.837 24.1 20.126 13.856-.34 24.866-11.914 24.544-25.767zM54.077 35.298c.093.001.186-.006.279-.007.358-.005.713-.023 1.064-.053.12-.011.239-.021.357-.035.402-.045.801-.104 1.193-.181l.074-.013a14.377 14.377 0 0 0 5.167-2.17 14.508 14.508 0 0 0 3.694-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.585.466-.884.064-.13.13-.259.19-.392.154-.345.297-.696.421-1.053l.032-.088c1.427-4.208.774-9.157-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159A12.49 12.49 0 0 0 58.41 7.1c-.264-.081-.538-.14-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.404-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.367-.018a15.179 15.179 0 0 0-1.088-.005c-2.08.121-3.926.557-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.767-5.723 4.773-6.867 8.294a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.06.171.123.34.187.51h-.027c1.775 4.977 6.268 9.029 13.481 9.334z"
                          opacity={1}
                          data-original="#7b83eb"
                        />
                        <path
                          fill="#ffffff"
                          d="M46.448 25.783H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h37.674a5.167 5.167 0 0 0 5.161-5.162V30.945a5.166 5.166 0 0 0-5.161-5.162z"
                          opacity={1}
                          data-original="#464eb8"
                        />
                        <path
                          fill="#234268"
                          d="M37.109 36.271h-19.28c-.771 0-1.395.625-1.395 1.396v3.514c0 .771.624 1.396 1.395 1.396h6.22v19.575c0 .771.624 1.396 1.395 1.396h4.134c.771 0 1.395-.625 1.395-1.396V42.577h6.136c.771 0 1.395-.625 1.395-1.396v-3.514c0-.771-.624-1.396-1.395-1.396z"
                          opacity={1}
                          data-original="#ffffff"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <a
                      href="msteams:/l/chat/0/0?users=info@tech2globe.com"
                      className="text-white hover-underline"
                      aria-label="Connect Tech2Globe on Microsoft Teams"
                    >
                      info@tech2globe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Contact Form ===== */}
            <div className="col-12 col-lg-5 mt-4 mt-lg-0">
              <div className={Style.ContactForm}>
                <h5 className="text-white text-center mb-4 font">
                  Fill out the form, and our team will get back to you in 1
                  business day.
                </h5>
                <form onSubmit={handleSubmit} id="contactForm">
                  <div id="formErrors"></div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      {errors.name && (
                        <div className="invalid-feedback text-start">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Your Email"
                        required
                      />
                      {errors.email && (
                        <div className="invalid-feedback text-start">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <Select
                        classNamePrefix="custom-select"
                        menuPortalTarget={
                          typeof window !== "undefined" ? document.body : null
                        }
                        menuPosition="fixed"
                        options={countryOptions}
                        placeholder="Select Country"
                        isSearchable
                        value={countryOptions.find(
                          (opt) => opt.value === formData.country,
                        )}
                        onChange={(selectedOption) => {
                          setFormData({
                            ...formData,
                            country: selectedOption?.value || "",
                          });

                          if (errors.country) {
                            setErrors({
                              ...errors,
                              country: null,
                            });
                          }
                        }}
                      />
                      {errors.country && (
                        <div className="invalid-feedback text-start">
                          {errors.country}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        name="phone"
                        id="phoneNumber"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone No."
                        required
                      />
                      {errors.phone && (
                        <div className="invalid-feedback text-start">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      placeholder="Enter Your Query"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback text-start">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Turnstile
                  <div style={{ display: "block", flexFlow: "row" }}>
                    <div
                      className="cf-turnstile"
                      data-sitekey="0x4AAAAAACu4Eb4Q25bWJD9B"
                      data-size="flexible"
                      data-theme="light"
                    ></div>
                  </div> */}

                  <div
                    style={{
                      minHeight: "70px",
                      marginBottom: "16px",
                    }}
                  >
                    <div ref={turnstileRef}></div>
                  </div>

                  <button
                    type="submit"
                    id="contactFormSubmitBtn"
                    aria-label="Submit Enquiry"
                    className="btn btn-primary w-100"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

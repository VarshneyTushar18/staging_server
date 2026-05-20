"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo, Suspense } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

 function MultiStepSignupInner() {
  const [formData, setFormData] = useState({
    jobId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolioLink: "",
    currentCTC: "",
    expectedCTC: "",
    joinDate: "",
    lastCompany: "",
    noticePeriod: "",
    comments: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [jobs, setJobs] = useState([]);
  const [step, setStep] = useState(1);

  const [loadingJobs, setLoadingJobs] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const params = useSearchParams();
  const [jobId, setJobId] = useState(null);

  // Handle query param safely
  useEffect(() => {
    const id = params.get("jid");
    if (id) setJobId(id);
  }, [params]);

  // Fetch jobs
  useEffect(() => {
    async function loadJobs() {
      setLoadingJobs(true);
      try {
        const res = await fetch(`${API_BASE}/api/career/jobs`);
        const data = await res.json();
        setJobs(data?.data || []);
      } catch (err) {
        console.error(err);
        setApiError("Unable to load job listings.");
      } finally {
        setLoadingJobs(false);
      }
    }

    loadJobs();
  }, []);

  // Apply jobId from URL
  useEffect(() => {
    if (jobId) {
      setFormData((prev) => ({ ...prev, jobId }));
    }
  }, [jobId]);

  // Validators
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^\+?[\d\s\-()]{10,}$/.test(phone);

  const validateURL = (url) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!validateEmail(formData.email))
        newErrors.email = "Invalid email format";
      if (!validateURL(formData.portfolioLink))
        newErrors.portfolioLink = "Invalid URL format";
    }

    if (currentStep === 2) {
      if (!formData.jobId) newErrors.jobId = "Please select a position";
      if (!formData.currentCTC)
        newErrors.currentCTC = "Current CTC is required";
      if (!formData.expectedCTC)
        newErrors.expectedCTC = "Expected CTC is required";
      if (!formData.joinDate) newErrors.joinDate = "Join date is required";
    }

    if (currentStep === 3) {
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!validatePhone(formData.phone))
        newErrors.phone = "Invalid phone format";

      if (!formData.resume) newErrors.resume = "Resume is required";
      else if (formData.resume.size > 3 * 1024 * 1024)
        newErrors.resume = "File size must be less than 3MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (submitting) return;

    let valid = true;
    for (let i = 1; i <= 4; i++) {
      if (!validateStep(i)) {
        valid = false;
        setStep(i);
        break;
      }
    }

    if (!valid) return;

    setSubmitting(true);
    setApiError("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await fetch(`${API_BASE}/api/career/apply`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setStep(5);
      } else {
        setApiError(result?.error || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setApiError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <p>Fill all the required form fields to go to the next step</p>

            <form id="msform" onSubmit={(e) => e.preventDefault()}>
              <ul id="progressbar" className="p-0">
                <li className={step >= 1 ? "active" : ""} id="account">
                  <strong>Personal Information</strong>
                </li>
                <li className={step >= 2 ? "active" : ""} id="profile">
                  <strong>Application Details</strong>
                </li>
                <li className={step >= 3 ? "active" : ""} id="education">
                  <strong>Professional Details</strong>
                </li>
                <li className={step >= 4 ? "active" : ""} id="experience">
                  <strong>Additional Information</strong>
                </li>
              </ul>

              <br />

              {/* STEP 1 */}
              {step === 1 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title text-black">
                          Personal Information:
                        </h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 1 - 4</h2>
                      </div>
                    </div>

                    <label className="fieldlabels">First name *</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    {errors.firstName && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.firstName}
                      </span>
                    )}
                    <label className="fieldlabels">Last name *</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    {errors.lastName && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.lastName}
                      </span>
                    )}
                    <label className="fieldlabels">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.email}
                      </span>
                    )}

                    <label className="fieldlabels">Portfolio Link</label>
                    <input
                      type="url"
                      name="portfolioLink"
                      placeholder="https://portfolio.com"
                      value={formData.portfolioLink}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          portfolioLink: e.target.value,
                        })
                      }
                    />
                    {errors.portfolioLink && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.portfolioLink}
                      </span>
                    )}
                  </div>

                  <input
                    type="button"
                    className="next action-button"
                    value="Next"
                    onClick={nextStep}
                  />
                </fieldset>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title text-black">
                          Application Details:
                        </h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 2 - 4</h2>
                      </div>
                    </div>

                    <label className="fieldlabels">
                      Vacancy you are applying for *
                    </label>
                    <select
                      name="jobId"
                      value={formData.jobId}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, jobId: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Position
                      </option>

                      {jobs.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                    {errors.jobId && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.jobId}
                      </span>
                    )}

                    <label className="fieldlabels">Current CTC (PA.) *</label>
                    {errors.currentCTC && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.currentCTC}
                      </span>
                    )}

                    <div className="row">
                      <div className="col-md-6">
                        <select
                          className="form-control"
                          defaultValue=""
                          onChange={(e) => {
                            const lakhs = parseInt(e.target.value || 0);

                            setFormData((prev) => ({
                              ...prev,
                              currentLakhs: lakhs,
                              currentCTC:
                                lakhs * 100000 +
                                parseInt(prev.currentThousands || 0) * 1000,
                            }));
                          }}
                        >
                          <option disabled value="">
                            In Lakhs
                          </option>

                          {[...Array(21)].map((_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <select
                          className="form-control"
                          defaultValue=""
                          onChange={(e) => {
                            const thousands = parseInt(e.target.value || 0);

                            setFormData((prev) => ({
                              ...prev,
                              currentThousands: thousands,
                              currentCTC:
                                parseInt(prev.currentLakhs || 0) * 100000 +
                                thousands * 1000,
                            }));
                          }}
                        >
                          <option disabled value="">
                            In Thousands
                          </option>

                          {[...Array(100)].map((_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <label className="fieldlabels">Expected CTC (PA.) *</label>
                    {errors.expectedCTC && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.expectedCTC}
                      </span>
                    )}
                    <div className="row">
                      <div className="col-md-6">
                        <select
                          className="form-control"
                          defaultValue=""
                          onChange={(e) => {
                            const lakhs = parseInt(e.target.value || 0);

                            setFormData((prev) => ({
                              ...prev,
                              expectedLakhs: lakhs,
                              expectedCTC:
                                lakhs * 100000 +
                                parseInt(prev.expectedThousands || 0) * 1000,
                            }));
                          }}
                        >
                          <option disabled value="">
                            In Lakhs
                          </option>

                          {[...Array(21)].map((_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <select
                          className="form-control"
                          defaultValue=""
                          onChange={(e) => {
                            const thousands = parseInt(e.target.value || 0);

                            setFormData((prev) => ({
                              ...prev,
                              expectedThousands: thousands,
                              expectedCTC:
                                parseInt(prev.expectedLakhs || 0) * 100000 +
                                thousands * 1000,
                            }));
                          }}
                        >
                          <option disabled value="">
                            In Thousands
                          </option>

                          {[...Array(100)].map((_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <label className="fieldlabels">When can you join? *</label>
                    <input
                      type="date"
                      name="joinDate"
                      value={formData.joinDate}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, joinDate: e.target.value })
                      }
                    />
                    {errors.joinDate && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.joinDate}
                      </span>
                    )}
                  </div>

                  <input
                    type="button"
                    className="next action-button"
                    value="Next"
                    onClick={nextStep}
                  />

                  <input
                    type="button"
                    className="previous action-button-previous"
                    value="Previous"
                    onClick={prevStep}
                  />
                </fieldset>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title text-black">
                          Professional Details:
                        </h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 3 - 4</h2>
                      </div>
                    </div>

                    <label className="fieldlabels">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Number"
                      value={formData.phone}
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.phone}
                      </span>
                    )}

                    <label className="fieldlabels">Upload Your Resume *</label>
                    <input
                      type="file"
                      name="resume"
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, resume: e.target.files[0] })
                      }
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    {errors.resume && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.resume}
                      </span>
                    )}

                    <span className="text-muted">
                      Allowed file types: PDF, JPG, PNG, Word, DOC (Max size:
                      less than 3MB)
                    </span>

                    <div className="row pt-3">
                      <div className="col-md-6">
                        <label className="fieldlabels">
                          Last company you worked with
                        </label>
                        <input
                          type="text"
                          name="lastCompany"
                          placeholder="Last Company"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastCompany: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="fieldlabels">Notice Period</label>

                        <select
                          className="form-control"
                          name="noticePeriod"
                          defaultValue=""
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              noticePeriod: e.target.value,
                            })
                          }
                        >
                          <option disabled value="">
                            In Days
                          </option>

                          {[...Array(85)].map((_, i) => (
                            <option key={i} value={i + 6}>
                              {i + 6} days
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <input
                    type="button"
                    className="next action-button"
                    value="Next"
                    onClick={nextStep}
                  />

                  <input
                    type="button"
                    className="previous action-button-previous"
                    value="Previous"
                    onClick={prevStep}
                  />
                </fieldset>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title text-black">
                          Additional Information:
                        </h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 4 - 4</h2>
                      </div>
                    </div>

                    <label className="fieldlabels">
                      Reference / Comments / Questions
                    </label>

                    <textarea
                      name="comments"
                      maxLength="200"
                      onChange={(e) =>
                        setFormData({ ...formData, comments: e.target.value })
                      }
                    />
                  </div>

                  <input
                    type="button"
                    className="next action-button"
                    value="Submit"
                    onClick={handleSubmit}
                  />
                </fieldset>
              )}

              {/* SUCCESS */}
              {step === 5 && (
                <fieldset>
                  <div className="form-card text-center">
                    <h2 className="text-black fw-bold mb-5">SUCCESS !</h2>

                    <div className="mb-4">
                      <FaCheckCircle size={60} className="text-success" />
                    </div>

                    <h5 className="text-danger">
                      Your job request has been received
                    </h5>

                    <Link href="/" className="btn btn-danger mt-4">
                      Back To Home
                    </Link>
                  </div>
                </fieldset>
              )}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}


export default function MultiStepSignup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MultiStepSignupInner />
    </Suspense>
  );
}
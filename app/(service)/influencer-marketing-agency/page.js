import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

import { FaAngleRight, FaChartBar, FaCheckSquare, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaGlobe, FaHandPointRight, FaIndustry, FaLightbulb, FaMedal, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";
import "./custom.css";

export const metadata = {
  title: "#1 Influencer Marketing Agency | Influencer Marketing Services",

  description:
    "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",

  keywords: [
    "Influencer Marketing Agency in India",
    "Influencer marketing company",
    "Influencer Marketing Companies In India",
    "Influencer agency in India",
  ],

  alternates: {
    canonical:
      "https://www.tech2globe.com/influencer-marketing-agency",
  },

  openGraph: {
    title:
      "#1 Influencer Marketing Agency | Influencer Marketing Services",

    description:
      "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",

    url:
      "https://www.tech2globe.com/influencer-marketing-agency",

    siteName: "Tech2Globe Web Solutions LLP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "#1 Influencer Marketing Agency | Influencer Marketing Services",

    description:
      "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",
  },
};


const usefullinks = [
  { id: 1, name: "AI Data Support For KPO Services", path: "/data-support-kpo-ai-services" },
  { id: 2, name: "AI Data Support Services", path: "/data-support-ai-services" },
  { id: 3, name: "Chat Support Services For AI Products", path: "/chat-support-services" },
  { id: 4, name: "Customer Data Migration Services", path: "/data-migration-services" },
  { id: 5, name: "Customer Onboarding Services", path: "/customer-onboarding-services" },
  { id: 6, name: "Project Implementation Services", path: "/project-implementation-services" },
  { id: 7, name: "Reporting And Analytics", path: "/reporting-and-analytics" },
  { id: 8, name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { id: 9, name: "Voice Support For AI Products", path: "/voice-support-for-ai-products" },
];


export default function InfluencerMarketingAgency() {


  return (
    <>

      <div className="container-fluid py-5" style={{ background: "#ff9b04" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="/images/services/service-inner/ima-banner-image.png" className="img-fluid" />
            </div>
            <div className="col-md-6 banner-btns">
              <h1 className="mt-5 pt-2 text-left text-light">We are a Top Influencer Marketing Agency</h1>

              <p className="my-3 text-white weare-para">At Tech2Globe, we create and execute advertising
                campaigns for influencers on a global basis. We create the best approach that is effective for you based on
                your brand objectives. It involves connecting you with top social media influencers, vloggers, and content
                creators to improve your target audience's engagement.</p>

              <a href="/influencer-marketing-package" className="btn btn-danger btn-large rounded-pill p-3 text-uppercase mb-1" target="_blank">See Our Packages <span className="badge badge-light"><svg className="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></span></a>
              <a href="/pdf/Influencer-ppt.pdf" target="_blank" className="btn btn-danger btn-large rounded-pill p-3 mb-1 text-uppercase">See Portfolio <span className="badge badge-light"><svg className="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></span></a>
              <a href="/case-studies/case-study-revised.pdf" target="_blank" className="btn btn-danger btn-large rounded-pill mb-1 p-3 text-uppercase">See Case Study <span className="badge badge-light"><svg className="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></span></a>


            </div>
          </div>

        </div>

      </div>

      <Breadcrumb pageName="Influencer Marketing Agency" />

      <section className="container cartFeature portfolio inner-page-content portfolio-influencer" id="portfolio-influencer">
        <div className="row">
          <div className="col-md-12 influencer-portfolio mb-3">
            <h2 className="main-heading influencer-portfolio-heading text-center">Our Portfolio</h2>
          </div>
        </div>




        <div className="row first-row port-row">
          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/blue.jpg" />
              </div>
              <h3 className="in-port-title">Blue Angel Farm</h3>
            </div>
          </div>

          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100 shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Aspire.png" />
              </div>
              <h3 className="in-port-title">Aspire</h3>
            </div>
          </div>


          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Athena.jpg" />
              </div>
              <h3 className="in-port-title">Athena Lifestyle</h3>
            </div>
          </div>

          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Medicover.jpg" />
              </div>
              <h3 className="in-port-title">Medicover</h3>
            </div>
          </div>


          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/ms-glamour.jpg" />
              </div>
              <h3 className="in-port-title">MS Glamour</h3>
            </div>
          </div>

          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Fleur.jpg" />
              </div>
              <h3 className="in-port-title">Fleur</h3>
            </div>
          </div>

          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Flipclip.jpg" />
              </div>
              <h3 className="in-port-title">Flipclip</h3>
            </div>
          </div>

          <div className="col-md-3 col-6 influ-port-box mb-4">
            <div className="card h-100  shadow-sm p-3 text-center border">
              <div className="card-img">
                <img className="influencer-portfolio-logo w-100" src="images/services/service-inner/Sutra.jpg" />
              </div>
              <h3 className="in-port-title">Your Life Sutra</h3>
            </div>
          </div>


        </div>

      </section>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="row">
              <div className="col-md-12 mb-5">
                <h2 className="main-heading influencer-portfolio-heading text-center">Influencers We Served</h2>
              </div>
            </div>


            <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-btobAgency" type="button" role="tab" aria-controls="pills-home" aria-selected="true" fdprocessedid="1e06qb"><img src="images/services/service-inner/b2b-icon-1-w.png" className="img-fluid" /><br />B2B</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-ecommerceAgency" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/ecommerce-w.png" className="img-fluid" /><br />e-commerce</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-educationAgency" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/education-w.png" className="img-fluid" /><br />Education</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-HealthcareAgency" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/healthcare-1-w.png" className="img-fluid" /><br />Healthcare</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-TravelAgency" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/travel-w.png" className="img-fluid" /><br />Travel</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-AutomotiveAgency" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/automotive-w.png" className="img-fluid" /><br />Automotive</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link my-influance-tab text-uppercase" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-FashionAgenciesAgency" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabIndex="-1"><img src="images/services/service-inner/fashion-1-w.png" className="img-fluid" /><br />Fashion
                  Agencies</button>
              </li>


            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade active show" id="pills-btobAgency" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4  text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/neil-patelneil-patel(b2b).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Neil Patel</h5>
                          <p className="card-text text-center">B2B</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/avinash-kaushik(b2b).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Avinash Kaushik</h5>
                          <p className="card-text text-center">B2B</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/hiten-shah(b2b).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Hiten Shah</h5>
                          <p className="card-text text-center">B2B</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/harsh-agrawal(b2b).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Harsh Agrawal</h5>
                          <p className="card-text text-center">B2B</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-ecommerceAgency" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/aakriti-rana.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Aakriti Rana</h5>
                          <p className="card-text text-center">E-commerce</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/aashna-shroff.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Aashna Shroff</h5>
                          <p className="card-text text-center">E-commerce</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/mayur-saroj-rajput.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Mayur Saroj Rajput</h5>
                          <p className="card-text text-center">E-commerce</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/santoshi-shetty.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Santoshi Shetty</h5>
                          <p className="card-text text-center">E-commerce</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-educationAgency" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/awal-ts-madaan(education).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Awal Ts Madaan</h5>
                          <p className="card-text text-center">Education</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/mahendra-dogney(educations).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Mahendra Dogney</h5>
                          <p className="card-text text-center">Education</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/raoul-bhatnagar(education).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Rahul Bhatnagar</h5>
                          <p className="card-text text-center">Education</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/himesh-madaan(education).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Himesh Madaan</h5>
                          <p className="card-text text-center">Education</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-HealthcareAgency" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4  text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/nidhi-mohan-kamal(health).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Nidhi Mohan Kamal</h5>
                          <p className="card-text text-center">Health</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/ranveer-allahbadia(health).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Ranveer Allahbadia</h5>
                          <p className="card-text text-center">Health</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/namrata-purohit(health).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Namrata Purohit</h5>
                          <p className="card-text text-center">Health</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 ">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/sahil-khan(health).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Sahil Khan</h5>
                          <p className="card-text text-center">Health</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-TravelAgency" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/aakriti-rana.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Aakriti Rana</h5>
                          <p className="card-text text-center">Travel</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/shivya-nath(travel).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Shivya Nath</h5>
                          <p className="card-text text-center">Travel</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/siddartha-joshi(travel).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Siddartha Joshi</h5>
                          <p className="card-text text-center">Travel</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/savi-and-vid(travel).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Savi and Vid</h5>
                          <p className="card-text text-center">Travel</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-AutomotiveAgency" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/abin-saran(automotive).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Abin Saran</h5>
                          <p className="card-text text-center">Automotive</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/neharika-yadav(automotive).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Neharika Yadav</h5>
                          <p className="card-text text-center">Automotive</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/priyanka-kochhar(automotive).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Priyanka Kochar</h5>
                          <p className="card-text text-center">Automotive</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/candida-louis(automotive).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Candida Louis</h5>
                          <p className="card-text text-center">Automotive</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-FashionAgenciesAgency" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4 text-center">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/jannat-zubair(fashion).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Jannat Zubair</h5>
                          <p className="card-text text-center">Fashion</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/kritika-khurana(faishion).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Krithika Khurana</h5>
                          <p className="card-text text-center">Fashion</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/avneet-kaur(fashion).jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Avneet Kaur</h5>
                          <p className="card-text text-center">Fashion</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
                      <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="images/services/service-inner/aashna-shroff.jpg" alt="User-img" />
                        <div className="card-body">
                          <h5 className="card-title h3">Aashna Shroff</h5>
                          <p className="card-text text-center">Fashion</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-md-12 mb-5">
            <h2 className="main-heading influencer-portfolio-heading text-center">Our Top Notch Influencer Marketing Services
            </h2>
          </div>
          <div className="col-md-6 pt-2 pb-2">

            <div className="media">
              <div className="media-left">
                <img src="images/services/service-inner/strategy-y.png" className="align-self-start mr-3 img-fluid " alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="media-heading h3 our-to-media-subheading">Influencer marketing strategy</h3>
                <p>We create creative marketing campaigns for influencers with long-term potential and influencers at their
                  center.</p>
              </div>
            </div>

          </div>
          <div className="col-md-6 pt-2 pb-2">
            <div className="media">
              <div className="media-left">
                <img src="images/services/service-inner/mismatch-y.png" className="align-self-start mr-3 img-fluid" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="media-heading h3 our-to-media-subheading">Influencer Mismatching</h3>
                <p>There's a significant influencer for every brand, and we always know how to reach them. We connect you to
                  influencers who make people talk and act.</p>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="col-md-6 pt-2 pb-2">
            <div className="media">
              <div className="media-left">
                <img src="images/services/service-inner/content-y.png" className="align-self-start mr-3 img-fluid" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="media-heading h3 our-to-media-subheading">Content Strategies</h3>
                <p>On the networks in which they have the most influence, our content strategies give influencers the
                  freedom to be genuine. It's not publicity - it's creativity.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-2 pb-2">
            <div className="media">
              <div className="media-left">
                <img src="images/services/service-inner/campaign-management-y.png" className="align-self-start mr-3 img-fluid" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="media-heading h3 our-to-media-subheading">Campaign Management</h3>
                <p>During the implementation of your campaign, our committed team of campaign and impact planners provides
                  hands-on guidance.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 pt-2 pb-2">
            <div className="media">

              <div className="media-left">
                <a href="#">
                  <img src="images/services/service-inner/advertising-y.png" className="align-self-start mr-3 img-fluid" alt="icon" />
                </a>
              </div>
              <div className="media-body">
                <h3 className="media-heading h3 our-to-media-subheading">Social Media Advertising</h3>
                <p>Our Influencer Marketing management uses paid media to promote your marketing strategy for influencers,
                  ensuring your brand's best results.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid how-our-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <h2 className="main-heading influencer-portfolio-heading text-center">How Our Experts Do Influencer Marketing?
              </h2>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-primary">
                  <img src="images/services/service-inner/business-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Learn Your Business</h3>
                <p>To provide them with exactly what their brand needs, we aim to have a detailed understanding of our
                  client's business. Being custom-made for your plan gives our marketing strategies for influencers to
                  deliver the best results consistently.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-warning">
                  <img src="images/services/service-inner/research-icon-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Research Your Target Audience</h3>
                <p>We understand your clients, their ways of accessing the data, what and who inspires them, and encourage
                  them to join. We are also in an excellent position to give you precisely what your industry wants.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-danger">
                  <img src="images/services/service-inner/develop-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Develop Influencer Strategies</h3>
                <p>Our campaign managers are the force to deal with, from choosing the appropriate Influencer Marketing
                  Techniques for your brand to successfully implementing those strategies!</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-success">
                  <img src="images/services/service-inner/identify-1-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Identify the influencers in your market!</h3>
                <p>How much effect you would have on your target audience is decided by having the right influencers! Give
                  it for others to look at the influencers appropriate to your business and, appropriately, give you the
                  highest quality options.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-danger">
                  <img src="images/services/service-inner/launch-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Launch Your influencers content</h3>
                <p>The influencer content will be released as the meetings and agreements with the influencers are
                  concluded. On Facebook, Instagram, YouTube, Twitter, which is possible by social media influencer
                  marketing, you could see the posts starting to go, but it builds customer brand visibility.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-dark">
                  <img src="images/services/service-inner/collaborate-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Collaborate with Influencer!</h3>
                <p>We will manage all the teamwork, as well. From tracking the posts to ensuring that the posts about your
                  campaign are regular, leave it to us to handle all this for you.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon">
                  <img src="images/services/service-inner/performance-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3">Monitoring Your Performance</h3>
                <p>It is not necessary to launch an influencer campaign. It is about how well the campaign works and the
                  outcomes it produces. We will monitor your influencer campaign constantly and adequately to ensure sure it
                  achieves the desired performance.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-md-6 col-12 text-center mb-4">
              <div className="our-expert-content h-100 shadow-sm p-4 rounded">
                <div className="our-exper-icon bg-warning">
                  <img src="images/services/service-inner/Report-y.png" className="img-fluid" />
                </div>
                <h3 className="mt-3"> Report your Result!</h3>
                <p>Our commitments to your product do not stop with controlling the success of a campaign. You will get from
                  us a complete analysis of how well your campaign is performing in the digital world.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="why-infulancer">
              <img src="images/services/service-inner/why-influancer.jpg" className="img-fluid" />

            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">

            <h2 className="main-heading influencer-portfolio-heading ">Why Should You Invest in Influencer Marketing?
            </h2>
            <p>Influencer marketing agency serves to obtain higher things to communicate to your web traffic in your
              business. It works to build relationships that help happy supporters gain brands. Because of the need for a
              platform and content, influencer marketing also integrates with social media and content marketing.</p>


            <div className="media mr-5 why-should-content-bg">
              <div className="media-left media-icon-bg">

                <svg className="svg-inline--fa fa-network-wired fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Becoming connected in the Instagram Influencer Marketing to a strong network of
                  influencers.</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-list fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">The ability to link the list of top Instagram influencers to the correct influencers.
                </p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-magnifying-glass fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Choosing the best social media networks for your company</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-handshake fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="far" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Expertise in the arrangement of agreements and costs</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-headphones-simple fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headphones-simple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Support by organizing every part of the project to save a significant amount of time
                </p>
              </div>
            </div>



          </div>

        </div>
      </div>

      <div className="container-fluid award-sec pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="main-heading influencer-portfolio-heading mt-5">Our Award Winning Marketing Services</h2>
              <p className="award-text">We are an influencer marketing agency that uses a combination of offline planners and a
                unique influencer marketing platform to ensure a high performing influencer campaign for your brand. We also
                work with other influencer marketing platforms to ensure that you get the best influencers for every
                campaign. The combination of online and influencer marketing platforms allows you to harness the power of
                offline creativity and reach using the online platform.</p>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/youtube.png" />
                </div>
                <h4 className="mt-3">Youtube influencer marketing</h4>
                <p className="influencer-text">YouTube has the second largest search volume after Google, so it is indispensable
                  for influencer marketing campaigns. <strong>Youtube Influencer Marketing</strong> is suitable for
                  campaigns that require high reach influencers. An interesting aspect of managing.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/instagram.png" />
                </div>
                <h4 className="mt-3">Instagram influencer marketing</h4>
                <p className="influencer-text">With a robust, image-oriented content approach, Instagram is perfect for
                  influencer marketing for lifestyle brands. We can help you with sponsored posts that are one of the most
                  popular content formats for <strong>Instagram influencer marketing</strong>.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/memes.png" />
                </div>
                <h4 className="mt-3">Meme influencer marketing</h4>
                <p className="influencer-text">We offer a range of opportunities for influencers to establish and define their
                  presence in the marketing world and the brand’s face to make money on all endeavours. We can create
                  interesting memes, have a unique sense of humour.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/celebrity.png" />
                </div>
                <h4 className="mt-3">Celebrity marketing</h4>
                <p className="influencer-text">Are you looking for an agency that carries out advertising campaigns <strong>with
                  celebrity endorsement in india</strong>? The main objective of these advertising campaigns is to improve
                  the visibility of your product and increase conversions, that is, sales. </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="youtubers-sec">
        <div className="container">
          <div className="col-md-12">


            <div className="portfolioContainer port-tabs">
              <div className="tabbable" id="mygallery">
                <ul className="nav nav-tabs influencer-tabs">
                  <li className="active"><a href="#tab1" data-bs-toggle="tab">Youtubers</a></li>
                  <li><a href="#tab2" data-bs-toggle="tab">Instagrammers</a></li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="tab1">


                  <div className="row">

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/icon-22.png" />
                      </div>

                      <p className="influencer-text">Game Youtube Influencers</p>
                    </div>


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-2-1.png" />
                      </div>

                      <p className="influencer-text">Technology Youtube Influencers</p>
                    </div>


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-3-1.png" />
                      </div>

                      <p className="influencer-text">Fitness Youtube Influencer</p>
                    </div>

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-7-1.png" />
                      </div>

                      <p className="influencer-text">Fashion &amp; Lifestyle Influencer</p>
                    </div>
                  </div>


                  <div className="row">


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-4-1.png" />
                      </div>

                      <p className="influencer-text">Travel Youtube Influencers</p>
                    </div>


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-5-1.png" />
                      </div>

                      <p className="influencer-text">Comedy Youtube Influencers</p>
                    </div>


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-6-1.png" />
                      </div>

                      <p className="influencer-text">Motivation – Youtube Influencers</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-8-1.png" />
                      </div>

                      <p className="influencer-text">Beauty Youtubers</p>
                    </div>
                  </div>


                  <div className="row">

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-9-1.png" />
                      </div>

                      <p className="influencer-text">Food Youtube Influencers</p>
                    </div>

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-10-1.png" />
                      </div>

                      <p className="influencer-text">Entertainment Youtube Influencers</p>
                    </div>

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-11-1.png" />
                      </div>

                      <p className="influencer-text">Education Youtube Influencers</p>
                    </div>

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconn-12-1.png" />
                      </div>

                      <p className="influencer-text">Vlogs – Youtube Influencers</p>
                    </div>
                  </div>

                </div>




                <div className="tab-pane" id="tab2">


                  <div className="row">

                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-1-1.png" />
                      </div>

                      <p className="influencer-text">Game Instagram Influencers</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-2-1.png" />
                      </div>

                      <p className="influencer-text">Beauty Instagram Influencers</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-3-1.png" />
                      </div>

                      <p className="influencer-text">Mom Instagram Influencer</p>
                    </div>


                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-4-1.png" />
                      </div>

                      <p className="influencer-text">Motivation Instagram Influencers</p>
                    </div>
                  </div>



                  <div className="row">



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-5.png" />
                      </div>

                      <p className="influencer-text">Fashion Instagram Influencers</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-6-1.png" />
                      </div>

                      <p className="influencer-text">Food Instagram Influencers</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-7-1.png" />
                      </div>

                      <p className="influencer-text">Entertainment Instagram Influencer</p>
                    </div>



                    <div className="col-md-3 text-center mt-3">

                      <div className="our-exper-icon">
                        <img className="youtubers-img" src="https://influencersmarketingindia.com/wp-content/uploads/2021/12/iconnn-8-1.png" />
                      </div>

                      <p className="influencer-text">Travel Instagram Influencers</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-5">
        <div className="col-md-12">
          <h2 className="main-heading influencer-portfolio-heading text-center">Why Choose Tech2Globe for Influencer Marketing Agency?</h2>
          <p className="text-center mb-3">Tech2Globe is Social Media Influencer Marketing Company among the best Influencer
            Marketing Agency India because we try to establish effective local and international influencer marketing
            strategies.</p>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box">
              <div className="why-chose-box-icon bg-primary">
                <img src="images/services/service-inner/target-1.png" className="img-fluid" />
              </div>
              <h3 className="mt-3">Target Influencers</h3>
              <p className="card-text text-center">We also connected with the influencers of the leading niche that have the
                highest market value. Our business relationship in the influencer industry with the top names would
                undoubtedly benefit you.</p>
            </div>

          </div>
          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box-icon bg-danger">
              <img src="images/services/service-inner/aproch-1-1.png" className="img-fluid" />
            </div>
            <h3 className="mt-3">Approach to Data-Driven</h3>
            <p className="card-text text-center">Data never lies, and we firmly believe that. We have a validated data-driven
              approach that, whether it is about implementing the strategy or identifying the influencers, never stops
              working.</p>
          </div>

          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box-icon bg-success">
              <img src="images/services/service-inner/clarity.png" className="img-fluid" />
            </div>
            <h3 className="mt-3">100 Percent Clarity</h3>
            <p className="card-text text-center">As one of the biggest marketing companies for influencers, we can uphold
              total integrity in all our transactions. We ensure that every step we take about your campaign is held in
              sync with you.</p>
          </div>
        </div>
        <div className="col-md-12">
          <h4 className="h3 text-center mt-5 pb-2 text-muted">Connect with us and gain immense popularity</h4>
          <p className="text-center mb-4">Tech2Globe's team encourages brands to be strongly tied to target users and give the
            best products.</p>
        </div>

        <div className="col-md-12 text-center">
          <a href="/influencer-marketing-package" className="btn btn-danger rounded-pill p-3 mt-4 text-uppercase see-our-btn">See Our Packages <span className="badge badge-light"><svg className="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></span></a>
        </div>

      </div>



    </>
  )
};
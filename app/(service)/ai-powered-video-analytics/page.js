import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import "./custom.css";
import ContactSection from "@/app/components/home/ContactSection/ContactSection";
import BenefitsSection from "@/app/components/newpages/BenefitsSection/BenefitsSection";
import IndustryTabs from "@/app/components/newpages/IndustryTabs/IndustryTabs";
import AiTestimonial from "@/app/components/newpages/AiTestimonial/AiTestimonial";

// export const metadata = {
//   title:
//     "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//   description:
//     "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
//   keywords: [
//     "Outsource indexing services",
//     "data indexing services",
//     "document indexing services",
//     "Book indexing services",
//     "professional indexing services"
//   ],
//   openGraph: {
//     title:
//       "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//     description:
//       "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
//     url: "https://stagenew.tech2globe.tech/indexing-services",
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//     description:
//       "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today."
//   },
//   alternates: {
//     canonical: "https://stagenew.tech2globe.tech/indexing-services"
//   }
// };

// export const metadata = {
//   title:
//     "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//   description:
//     "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
//   keywords: [
//     "Outsource indexing services",
//     "data indexing services",
//     "document indexing services",
//     "Book indexing services",
//     "professional indexing services"
//   ],
//   openGraph: {
//     title:
//       "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//     description:
//       "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
//     url: "https://stagenew.tech2globe.tech/indexing-services",
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
//     description:
//       "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today."
//   },
//   alternates: {
//     canonical: "https://stagenew.tech2globe.tech/indexing-services"
//   }
// };



export default function AiPoweredVideoAnalytics() {


  return (
    <>

      <div id="aiPoweredVideoAnalyticsSlider" className="carousel slide mb-4">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#aiPoweredVideoAnalyticsSlider" data-bs-slide-to="0" className="active" aria-label="Slide 1" fdprocessedid="tgs067" aria-current="true"></button>
          <button type="button" data-bs-target="#aiPoweredVideoAnalyticsSlider" data-bs-slide-to="1" aria-label="Slide 2" fdprocessedid="ds7y8i" className=""></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item position-relative active">
            <img src="images/aivideo/banner-1.png" className="d-block w-100" alt="..." />
            <div className="slide-overlay-1"></div>
            <div className="carousel-caption centered-content">
              <h2>Your Digital Partner for AI Powered Video Analytics System</h2>
              <p>Unlock real-time insights and proactive alerts from your surveillance systems with intelligent
                AI-powered video analytics system features.</p>
              <a href="/contact-us" className="button-red mt-2 mx-0" aria-label="Request a quote for our services">Request for Demo</a>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img src="images/aivideo/banner-2.png" className="d-block w-100" alt="..." />
            <div className="slide-overlay-2"></div>
            <div className="carousel-caption centered-content">
              <h2>From Footage to Intelligence — Instantly</h2>
              <p>Turn raw video into actionable data with AI-driven monitoring, threat detection, and operational
                efficiency.</p>
              <a href="/contact-us" className="button-red mt-2 mx-0" aria-label="Request a quote for our services">Request for Demo</a>
            </div>
          </div>
        </div>
      </div>

      <BrandSection />



      <div className="container py-3 py-lg-4">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <div className="feature-card">
              <div className="d-flex content-wrapper">
                <img src="images/aivideo/ai-icon.svg" alt="" className="img-fluid" />
                <h3 className="h3">We Deliver Smart Monitoring Systems</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card">
              <div className="d-flex content-wrapper">
                <img src="images/aivideo/analytics-icon.svg" alt="" className="img-fluid" />
                <h3 className="h3">Predictive Analytics That Boost Safer Operations</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-card">
              <div className="d-flex content-wrapper">
                <img src="images/aivideo/dashboard-icon.svg" alt="" className="img-fluid" />
                <h3 className="h3">Supporting Businesses in Implementing Advanced Security Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container py-3 py-lg-4">
        <div className="section-header aos-init aos-animate" data-aos="fade-up">
          <h2 className="text-center"><span>Challenges</span> Faced by Businesses Without AI Powered Surveillance</h2>
          <p className="text-center">Several companies still rely on basic camera systems that just record events. They fail to provide
            alerts, enabling quicker team response or detecting problems early. Without AI-powered video analytics
            system, businesses from shops to factories or parking to construction can face serious challenges.</p>
        </div>

        <div className="row problems-row">

          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="0">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>1</span></div>
              <h3>Delayed Problem Detection</h3>
              <p>Traditional security camera only record but don’t provide instant alerts or warnings, so thefts,
                accidents or trespassing often go undetected until it is too late.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>2</span></div>
              <h3>Monitoring Multiple Sites is Tough</h3>
              <p>Overseeing multiple location or a large site makes it very difficult to monitor since blind
                spots and distant areas get overlooked which can result in increased security risks without an
                AI video analytics system in place.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="110">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>3</span></div>
              <h3>Safety Rules Violations</h3>
              <p>Safety equipment are critical for industries like manufacturing, mining, and construction but
                without smart detection, identifying rule violations or hazardous activities is very difficult.
              </p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="120">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>4</span></div>
              <h3>Inefficient Resource Use</h3>
              <p>The absence of useful video data leads businesses to overspend on higher security team, time
                wasted on footage searches or costly setbacks during incidents.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="130">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>5</span></div>
              <h3>Slow Emergency Response</h3>
              <p>Failing to have instant alert for fire, intrusion or dangerous behavior will slow down response
                teams which can significantly influence results.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="140">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>6</span></div>
              <h3>High Security Costs Low Protection</h3>
              <p>Dependence on old systems forces businesses to hire more security staff and handle frequent
                disruptions, which results in increased expenses while still feeling vulnerable and insecure.
              </p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>7</span></div>
              <h3>Slow Emergency Response</h3>
              <p>Without real-time alerts for fire, intrusion, or unsafe behavior, response teams take longer to
                act. In an emergency, those crucial minutes can make a big difference.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-6 col-12 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="160">
            <div className="problem-card w-100">
              <div className="problem-icon"><span>8</span></div>
              <h3>High Security Costs Without Results</h3>
              <p>Using outdated systems means hiring more guards and dealing with regular problems. Businesses
                pay more, but still feel unprotected and disorganized.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container py-3 py-lg-4">
        <div className="section-header aos-init aos-animate" data-aos="fade-up">
          <h2 className="text-center">Our Analytics <span>Modules</span></h2>
          <p className="text-center">With Tech2globe’s AI-based video analytics modules, you can surpass conventional surveillance by enabling
            automatic detection, real-time notifications and offering deep operational understandings through an
            AI-powered video analytics system. Designed to adapt to your needs, our modular system can be used for
            monitoring retail floors, construction sites and manage smart cities. </p>
        </div>

        <div className="row modules-row">
          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="0">
            <div className="module-card card">
              <img src="/images/aivideo/intrusion-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Intrusion Detection</h3>
                <p className="card-text">Detect and notify about unauthorized intrusions in restricted areas. This
                  module is suited for securing sensitive areas and preventing trespassing from escalating.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="module-card card">
              <img src="/images/aivideo/virtual-line-crossing.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Virtual Line Crossing</h3>
                <p className="card-text">Set digital boundaries and receive alerts when violated. Suited for
                  safeguarding entry/exit zones, parking spaces, and sensitive zones.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="110">
            <div className="module-card card">
              <img src="/images/aivideo/object-removed-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Object Removed Detection</h3>
                <p className="card-text">Spot suspicious items left unattended or stolen assets. Perfect for
                  securing airports, shopping centers, warehouses to stop threats and prevent theft.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="120">
            <div className="module-card card">
              <img src="/images/aivideo/people-counting.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">People Counting</h3>
                <p className="card-text">Monitor and assess the movement of people entering and exiting an area.
                  Ideal for overseeing occupancy limits, resource distribution and foot traffic trends.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="130">
            <div className="module-card card">
              <img src="/images/aivideo/crowd-monitoring.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Crowd Density Monitoring</h3>
                <p className="card-text">Evaluate and monitor crowd density in any location. Great for maintaining
                  public safety during rush hours, at events and emergencies.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="140">
            <div className="module-card card">
              <img src="/images/aivideo/face-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Face Recognition</h3>
                <p className="card-text">Introduce smart identity verification for staff, visitors and entry points.
                  It will enhance security, automate your access management, and support contactless entry.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
            <div className="module-card card">
              <img src="/images/aivideo/wrong-way-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Wrong-Way Detection</h3>
                <p className="card-text">Issue alerts for people and vehicles going against permitted movement.
                  Helps prevent accidents in parking areas, tunnels and warehouse corridors.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="160">
            <div className="module-card card">
              <img src="/images/aivideo/speed-detetction.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Speed Detection</h3>
                <p className="card-text">Catch vehicle’s speed instantly and issue alerts for violations. It is
                  optimal for ensuring traffic safety in campuses, logistics areas and gated communities.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="170">
            <div className="module-card card">
              <img src="/images/aivideo/fire-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Fire &amp; Smoke Detection</h3>
                <p className="card-text">Spot flames and smoke quickly through visual detection. It enables swift
                  response in risky areas and helps minimize damage.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="180">
            <div className="module-card card">
              <img src="/images/aivideo/slip-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Slip &amp; Fall Detection</h3>
                <p className="card-text">Recognize slips, fall and abnormal movements signaling injuries. Ai based
                  video surveillance can improve workplace safety and supports faster medical and operational
                  intervention.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="190">
            <div className="module-card card">
              <img src="/images/aivideo/tampering-detection.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Tampering Detection</h3>
                <p className="card-text">Receive warnings when cameras are blocked, moved or tampered with. This
                  will support ongoing surveillance and notifies you of sabotage attempts.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="120">
            <div className="module-card card">
              <img src="/images/aivideo/queue-managment.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Queue Management</h3>
                <p className="card-text">Keep track of customer lines and waiting time instantly. This enables
                  better staffing decisions, minimizing delays and enhance service performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BenefitsSection />

      <div className="container call-cta text-white py-4 px-3 rounded mb-4 d-flex justify-content-between align-items-center flex-column flex-md-row" data-aos="fade-up">
        <div className="text-center text-md-start mb-3 mb-md-0" data-aos="fade-right" data-aos-delay="100">
          <h4 className="fw-bold mb-1 text-white">Talk to Our Video Analytics Expert Now!</h4>
          <p className="mb-0 text-white">Get a custom AI solution for your video analytics needs.</p>
        </div>
        <a href="tel:+919899675039" className="btn btn-light text-primary fw-bold px-4 py-2" data-aos="zoom-in" data-aos-delay="200">
          <svg className="svg-inline--fa fa-phone-volume" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-volume" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path></svg> +91 9899675039
        </a>
      </div>

      <IndustryTabs />


      <div className="container py-3 py-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
        <div className="section-header aos-init aos-animate" data-aos="fade-down">
          <h2 className="text-center">Our <span>Engagement Model</span> Flow</h2>
          <p className="text-center">We follow a systematic approach to engagement, delivering smooth onboarding, transparency, and
            significant value for your business. Here’s how we work with you:</p>
        </div>
        <ul className="timeline">

          <li data-aos="fade-right" data-aos-delay="50" className="aos-init aos-animate">
            <div className="direction-l">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">01</div>
                </div>
                <div className="box-context">
                  <h4>Need Assessment</h4>
                  <p>We start by evaluating your business objectives, site configuration and primary risk
                    zones to determine appropriate surveillance requirements and maintain compliance with
                    industry standards.</p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>


          <li data-aos="fade-left" data-aos-delay="70" className="aos-init aos-animate">
            <div className="direction-r">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">02</div>
                </div>
                <div className="box-context">
                  <h4>Solution Design</h4>
                  <p>We analyze your site and suggest the best AI modules and functionalities, delivering a
                    personalized proposal outlining system layout, implementation plan and costs.</p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>


          <li data-aos="fade-right" data-aos-delay="90" className="aos-init aos-animate">
            <div className="direction-l">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">03</div>
                </div>
                <div className="box-context">
                  <h4>Pilot Deployment </h4>
                  <p>We offer a short-term trial deployment so you can experience the system’s benefits
                    directly before committing to full deployment. </p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>


          <li data-aos="fade-left" data-aos-delay="110" className="aos-init aos-animate">
            <div className="direction-r">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">04</div>
                </div>
                <div className="box-context">
                  <h4>Full Implementation</h4>
                  <p>We roll out the solution at full scale, integrating with your current cameras and
                    systems, while our team guarantees a streamlined installation with minimal interruption.
                  </p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>


          <li data-aos="fade-right" data-aos-delay="130" className="aos-init aos-animate">
            <div className="direction-l">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">05</div>
                </div>
                <div className="box-context">
                  <h4>User Training</h4>
                  <p>We will train your team to navigate the dashboard, understand alerts and utilize insights
                    on their own, guaranteeing confidence and independence.</p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>


          <li data-aos="fade-left" data-aos-delay="150" className="aos-init aos-animate">
            <div className="direction-r">
              <div className="myprocess-box">
                <div className="step-indicate">
                  <div className="text">Step</div>
                  <div className="number">06</div>
                </div>
                <div className="box-context">
                  <h4>Continuous Support</h4>
                  <p>We offer ongoing support post deployment to track system health, refine AI algorithms,
                    and enhance results based on live data insights.</p>
                </div>
              </div>
              <div className="indicate-dot"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="schedule-cta my-5 py-5 text-center text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">


        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h2 className="fw-bold mb-3 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            Smarter Security for a Safer Tomorrow
          </h2>
          <p className="lead mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            Ensure the safety of people, property, and processes with AI that interprets and signals enabling you to
            anticipate challenges.
          </p>
          <a
            href="#contact-us"
            className="demo-btn btn btn-lg px-5 py-3"
          >
            Schedule a Demo
          </a>

        </div>

      </div>

      <div className="container pt-3 pb-5 why-t2g">
        <div className="row">
          <div className="col-md-6 order-2 order-md-1 aos-init aos-animate" data-aos="fade-left" data-aos-duration="600">
            <div className="section-header text-start">
              <h2 className="w-100">Why <span>Tech2Globe</span> for AI-Powered Video Analytics?</h2>
              <p className="w-100"><em>Smarter Surveillance. Trusted Execution. Proven Results.</em></p>
            </div>
            <p>Tech2Globe’s AI-powered video analytics system delivers 99% detection accuracy and smooth real-time
              responsiveness. It is capable of identifying people, animals and objects under difficult
              circumstances, and using predictive AI to anticipate and prevent threat. It is designed to scale
              across structures such as stores and smart cities. It can easily connect with your current cloud or
              on-site infrastructure. </p>

            <p>More than just monitoring, Tech2Globe also offers smart and responsible monitoring systems as well.
              It detects activities like unauthorized entry and loitering with the help of Geo-fencing and
              real-time analysis. With integrated GSPR compliance, facial masking and role-based permission, the
              AI video analytics system ensures user privacy. You will receive instant notifications through SMS,
              email or mobile apps to ensuring that you are always informed and in charge all the times.</p>


          </div>
          <div className="col-md-6 order-1 order-md-2 mb-3 mb-md-0 aos-init aos-animate" data-aos="fade-right" data-aos-duration="600">
            <img src="/images/aivideo/why-t2g.png" alt="Why Tech2Globe" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      <div className="container py-3 py-lg-4 testimonials aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600">
        <div className="section-header">
          <h2>What <span>Clients</span> Are Saying</h2>
          <p>Our clients share how AI-powered surveillance has helped them enhance security,
            improve response times, and streamline operations across their sites.</p>
        </div>
        <div className="bg-light">
          <div className="row mb-4">
            <div className="col-md-4 text-center border-end d-flex flex-column justify-content-end" style={{ bordercolor: "#D6D6D6", gap: "25px" }}>
              <div>
                <h6 className="text-muted">Combined Rating</h6>
                <h2 className="fw-bold">4.8</h2>
                <div className="text-warning">
                  <svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                  <svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                </div>
                <p className="small text-muted mt-2">(400+) Customer<br />Ratings</p>
              </div>
              <div className="pt-4 border-top">
                <button className="btn btn-outline-dark btn-sm me-2" ><svg className="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg> </button>
                <button className="btn btn-outline-dark btn-sm" ><svg className="svg-inline--fa fa-chevron-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></button>
              </div>
            </div>

            <div className="col-md-8">
              <AiTestimonial />
            </div>
          </div>
        </div>
      </div>

      <div className="price-cta-section py-0 mb-3 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600">
        <div className="cta-container text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <h2>Premium Solutions at Competitive Prices</h2>
          <p>Get started with our affordable packages tailored to your needs.</p>

          <div className="price-tag aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">$20*</div>

          <div className="benefits aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div className="benefit-item"><svg className="svg-inline--fa fa-circle-check fa-xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Customizable</div>
            <div className="benefit-item"><svg className="svg-inline--fa fa-circle-check fa-xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> 24/7 Support</div>
            <div className="benefit-item"><svg className="svg-inline--fa fa-circle-check fa-xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Free Consultation</div>
          </div>

          <a href="#contact-us" className="cta-button aos-init aos-animate" data-aos="fade-up" data-aos-delay="800">Contact Now for Details</a>
          <div className="mt-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000"><em><small>*per month per camera</small></em>
          </div>
        </div>
      </div>





      <div className="container py-3 py-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <div className="section-header text-md-start">
              <h2 className="w-100 text-left">Wondering About Something?<br />
                Check Here</h2>
              <p className="w-100 text-left"> Have questions about how our system works? You're in the right place.
                Explore the answers to common queries and discover how our intelligent
                solutions seamlessly integrate with your security setup.
              </p>
            </div>
            <div className="faq-bg-wrapper d-flex justify-content-end d-none d-md-flex">
              <img src="/images/aivideo/brain-ai-chip.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" fdprocessedid="ubu2hk">
                    Is your system compatible with our existing cameras?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes! We support most IP and analog cameras.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" fdprocessedid="8gyghc">
                    How fast does it detect threats?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Under 3 seconds via our Real Time Detection engine.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" fdprocessedid="9ggqa2">
                    Can we control everything remotely?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Absolutely. Our mobile app and web dashboard offer full access.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" fdprocessedid="mrmi5c">
                    Is it expensive?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    No. Our modular pricing makes it affordable and scalable.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" fdprocessedid="433w6">
                    What’s the biggest benefit?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Less manual work, smarter security, real-time prevention.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <ContactSection />



    </>
  )
};

import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ProcessSlider from "@/app/components/Tableau/ProcessSlider";




export default function TableauConsultingServices() {


  return (
    <>

      <section class="ws-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-8 text-center m-auto">
              <div class="ws-content-block">
                <img src="/images/services/service-inner/tableau-logo.png" alt="Tableau" class="img-fluid mb-3" />
                <h1>Turn Data into Decisions with Tech2Globe’s Tableau Consulting Experts</h1>
                <div class="ws-btnblock">
                  <a href="/contact-us" class="button-red mt-2 mx-0">Get A Consultation</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Breadcrumb pageName="Tableau Consulting Services" />

      <BrandSection />

      <section className="bi-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-block row justify-content-between m-0">
                <div className="col-lg-5 left-block p-0">
                  <div className="position-sticky" style={{ top: '130px' }}>
                    <h2>Comprehensive Tableau Consulting Services for Smarter Business Growth</h2>
                    <p>At Tech2Globe, we provide Tableau consulting services that match your business
                      goals and data needs. Whether you’re beginning your journey with business
                      intelligence or aiming to strengthen advanced analytics, our Tableau specialists
                      deliver scalable strategies that turn data into clear insights, speed up
                      decision-making, and support long-term growth.</p>
                    <div className="bi-btnblock">
                      <a href="/contact-us" className="button-red mt-2 mx-0 mb-4 mb-lg-3">Speak with Our
                        Tableau Experts</a>
                    </div>

                  </div>
                </div>

                <div className="col-lg-6 right-block p-0">

                  <div className="bi-servicecard mb-4 mb-lg-5 active">
                    <div className="icon"><svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></div>
                    <div className="title">Tableau Strategy &amp; Assessment</div>
                    <div className="desc">
                      Tech2Globe delivers expert <strong>Tableau consulting services</strong> to
                      review your current data setup and build a clear analytics roadmap. Our
                      strategies focus on improving dashboard performance, uncovering hidden
                      opportunities, and enabling confident, data-driven decisions for long-term
                      success.
                    </div>
                  </div>

                  <div className="bi-servicecard mb-4 mb-lg-5">
                    <div className="icon"><svg className="svg-inline--fa fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path></svg></div>
                    <div className="title">Data Modeling &amp; ETL Development</div>
                    <div className="desc">
                      We build scalable, reliable <strong>Tableau data models</strong> that ensure
                      accuracy in every report. Our team manages the full ETL (Extract, Transform,
                      Load) process, bringing together data from multiple sources to create a single
                      source of truth—empowering faster, smarter business outcomes.
                    </div>
                  </div>

                  <div className="bi-servicecard mb-4 mb-lg-5">
                    <div className="icon"><svg className="svg-inline--fa fa-gauge-high" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gauge-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg></div>
                    <div className="title">Dashboard &amp; Report Development</div>
                    <div className="desc">
                      At Tech2Globe, we design interactive <strong>Tableau dashboards and
                        reports</strong> built around your business needs. With a strong focus on
                      clarity, speed, and usability, our solutions give teams instant access to
                      real-time insights—driving collaboration and sharper decision-making across
                      departments.
                    </div>
                  </div>

                  <div className="bi-servicecard mb-4 mb-lg-5">
                    <div className="icon"><svg className="svg-inline--fa fa-right-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"></path></svg></div>
                    <div className="title">Tableau Migration Services</div>
                    <div className="desc">
                      Our migration experts help organizations move smoothly from Excel, Power BI,
                      Qlik, or legacy BI platforms to <strong>Tableau</strong>. We ensure a secure and
                      efficient migration that improves accessibility, reduces reliance on outdated
                      tools, and maximizes the value of your analytics investment.
                    </div>
                  </div>

                  <div className="bi-servicecard mb-4 mb-lg-5">
                    <div className="icon"><svg className="svg-inline--fa fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></div>
                    <div className="title">Embedded Tableau Solutions</div>
                    <div className="desc">
                      We integrate <strong>Tableau analytics</strong> directly into your business
                      applications, customer portals, or SaaS platforms. This lets end-users access
                      real-time insights within their everyday workflows—boosting productivity,
                      improving customer experiences, and streamlining decisions without switching
                      tools.
                    </div>
                  </div>

                  <div className="bi-servicecard mb-4 mb-lg-5">
                    <div className="icon"><svg className="svg-inline--fa fa-screwdriver-wrench" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg></div>
                    <div className="title">Tableau Optimization &amp; Support</div>
                    <div className="desc">
                      Tech2Globe offers dedicated <strong>Tableau support and optimization</strong>
                      services to keep your analytics environment running at its best. From
                      fine-tuning performance and solving technical issues to adapting dashboards for
                      evolving needs, we make sure your Tableau setup is always secure, scalable, and
                      future-ready.
                    </div>
                  </div>

                </div>



              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bi-features-section">
        <div className="container m-auto headesc text-center mb-5">
          <h2>Why Choose Tech2Globe for Tableau Consulting Services?</h2>
          <p>Transform scattered data into meaningful intelligence—boost efficiency, uncover new opportunities,
            and maximize ROI with expert Tableau solutions.</p>
        </div>

        <div className="container">
          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">1</span>
                <h3>Move Beyond Basic Dashboards</h3>
                <p>Tableau’s drag-and-drop visuals are powerful, but true value comes from strategy. Our
                  consultants build dashboards that tell a story and drive decisions—not just display
                  charts.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">2</span>
                <h3>Turn Raw Data into Business Clarity</h3>
                <p>Many companies struggle with scattered data. Tech2Globe’s Tableau experts organize,
                  clean, and model it into accurate insights that shape smarter strategies and measurable
                  growth.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">3</span>
                <h3>Scalable Solutions for Growing Data</h3>
                <p>As data volumes rise, speed and performance can drop. Our Tableau consulting services
                  ensure your reports and architecture are optimized for scalability and enterprise-level
                  efficiency.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">4</span>
                <h3>Quick Deployment, Faster ROI</h3>
                <p>We apply proven methods and best practices that shorten Tableau implementation time,
                  reduce costs, and deliver measurable results—so you see ROI faster.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">5</span>
                <h3>Security, Governance &amp; Compliance</h3>
                <p>Data protection is critical. Our consultants set up secure governance frameworks,
                  role-based access, and compliance standards—ensuring reliability and trust at every
                  step.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bi-feature-card h-100">
                <span className="bi-feature-number">6</span>
                <h3>Future-Ready Analytics</h3>
                <p>As business needs evolve, so should your analytics. Tech2Globe helps you stay ahead with
                  advanced Tableau features, embedded BI, and innovations that grow with your
                  organization.</p>
              </div>
            </div>

          </div>
          <div className="ws-btnblock mt-3 text-center">
            <a href="/contact-us" className="button-red mt-2 mx-0">Talk to Our Tableau Experts</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto headesc text-center mb-5">
          <h2>In-House vs. Tableau Consultants: Which Delivers More Value?</h2>
          <p>Understand the key differences to maximize your <strong>business intelligence investment</strong> and
            choose the right approach for sustainable growth.</p>
        </div>

        <div className="container">
          <div className="table-responsive">
            <table className="table comparison-table" style={{ background: '#fff5e1', textAlign: 'center', }}>
              <thead style={{ background: '#f15a29', color: '#fff', }}>
                <tr>
                  <th className="criteria-col">
                    <h5>Criteria</h5>
                  </th>
                  <th className="inhouse-col">
                    <h5>In-House Team</h5>
                  </th>
                  <th className="consultant-col">
                    <h5>Tableau Consultant</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="criteria-col">Expertise</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Generalist
                    skills, limited exposure to best practices</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Specialized
                    <strong>Tableau experts</strong> with deep, cross-industry experience
                  </td>
                </tr>
                <tr>
                  <td className="criteria-col">Speed of Implementation</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Slower due to
                    steep learning curves and limited resources</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Faster deployment
                    with proven <strong>Tableau frameworks</strong></td>
                </tr>
                <tr>
                  <td className="criteria-col">Scalability</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Struggles with
                    complex data sets and user growth</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Enterprise-grade,
                    scalable architecture designed for expansion</td>
                </tr>
                <tr>
                  <td className="criteria-col">Customization &amp; UX</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Limited to basic
                    visuals and static reports</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Advanced,
                    interactive dashboards built for usability and impact</td>
                </tr>
                <tr>
                  <td className="criteria-col">Tool Optimization</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Underutilized
                    features, missed insights</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Full use of Tableau
                    Prep, advanced calculations &amp; embedded analytics</td>
                </tr>
                <tr>
                  <td className="criteria-col">Migration Capability</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Higher risk of
                    errors or data loss during migration</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Seamless migration
                    from Excel, Power BI, or legacy BI tools with zero data loss</td>
                </tr>
                <tr>
                  <td className="criteria-col">Ongoing Support &amp; Training</td>
                  <td className="inhouse-col"><svg className="svg-inline--fa fa-circle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> Ad-hoc support,
                    limited training resources</td>
                  <td className="consultant-col"><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Continuous support,
                    structured training, and team upskilling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>


        <section className="powerbi-section">
          <div className="container m-auto headesc text-center mb-5">
            <h2>Custom Tableau Dashboards for Smarter Insights</h2>
            <p>
              Our Tableau experts design interactive dashboards that transform data into clear, actionable
              insights.
              Each dashboard is tailored to your business needs—helping teams track KPIs, uncover trends,
              and make faster, data-driven decisions with confidence.
            </p>
          </div>


          <div className="container">
            <div className="row">


              <div className="col-md-6 mb-4">
                <div className="dashboard-card">
                  <h5>Superstore Dashboard</h5>
                  <p>
                    Get a clear view of sales, profit ratio, and shipping performance across regions with
                    this Tableau dashboard.
                    Track sales trends over time, compare regions, and analyze profit margins to identify
                    growth opportunities
                    and improve operational efficiency.
                  </p>
                  <img src="/images/services/service-inner/superstore-dashboard.png" alt="Superstore Dashboard" className="img-fluid" />
                </div>
              </div>


              <div className="col-md-6 mb-4">
                <div className="dashboard-card">
                  <h5>Customer Segmentation</h5>
                  <p>
                    Understand customer behavior with this Tableau segmentation dashboard. Analyze
                    correlations across ratings
                    such as satisfaction, reliability, and ease of use. Identify customer segments based on
                    loyalty, tenure,
                    and preferences to improve engagement and retention strategies.
                  </p>
                  <img src="/images/services/service-inner/customer-segmentation-dashboard.png" alt="Customer Segmentation Dashboard" className="img-fluid" />
                </div>
              </div>


              <div className="col-md-6 mb-4">
                <div className="dashboard-card">
                  <h5>Global Market Overview</h5>
                  <p>
                    Gain insights into the global economy and industry growth with Tableau. This dashboard
                    highlights GDP,
                    traffic, deliveries, and market value across different aircraft categories. Explore
                    regional contributions
                    to market demand and forecast long-term industry expansion.
                  </p>
                  <img src="/images/services/service-inner/global-market-overview.png" alt="Global Market Overview Dashboard" className="img-fluid" />
                </div>
              </div>


              <div className="col-md-6 mb-4">
                <div className="dashboard-card">
                  <h5>Pediatrics Overview</h5>
                  <p>
                    Monitor patient admissions, discharges, and encounters by department with this Tableau
                    healthcare dashboard.
                    Track hospital length of stay, cluster patients by visits, and analyze department-level
                    performance to optimize
                    healthcare delivery and improve patient outcomes.
                  </p>
                  <img src="/images/services/service-inner/pediatrics-overview.png" alt="Pediatrics Overview Dashboard" className="img-fluid" />
                </div>
              </div>



            </div>
          </div>

          <div className="ws-btnblock mt-3 text-center">
            <a href="/contact-us" className="button-red mt-2 mx-0">
              Get Your Custom Dashboard Today
            </a>
          </div>
        </section>

        <div className="container">
          <div className="row">

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-user-tie" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path></svg></div>
              <div>
                <div className="feature-title">Proven Analytics Expertise Across Industries</div>
                <p>With years of delivering <strong>Tableau consulting solutions</strong>, we’ve supported
                  businesses in healthcare, retail, finance, manufacturing, and more. Our industry
                  insights ensure dashboards and reports address real-world challenges and deliver
                  measurable impact.</p>
              </div>
            </div>

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-diagram-project" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="diagram-project" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"></path></svg></div>
              <div>
                <div className="feature-title">End-to-End Tableau Consulting</div>
                <p>From analytics strategy and data modeling to dashboard development, optimization, and
                  training, Tech2Globe covers the full <strong>Tableau implementation lifecycle</strong>.
                  Our aim: maximize ROI and create scalable, future-ready BI systems.</p>
              </div>
            </div>

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-certificate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="certificate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"></path></svg></div>
              <div>
                <div className="feature-title">Certified Tableau Experts</div>
                <p>Our certified Tableau consultants bring the latest features, security standards, and
                  governance practices. The result is a business intelligence environment that’s secure,
                  scalable, and built to evolve with your needs.</p>
              </div>
            </div>

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-sun" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg></div>
              <div>
                <div className="feature-title">Custom Solutions, Not Templates</div>
                <p>We don’t deliver cookie-cutter dashboards. Every Tableau solution is built around your
                  KPIs, workflows, and business goals—ensuring insights are relevant, real-time, and
                  widely adopted across teams.</p>
              </div>
            </div>

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-bolt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224C.9 240.7-2.6 254.8 2 267.3S18.7 288 32 288H143.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5L317.4 44.6z"></path></svg></div>
              <div>
                <div className="feature-title">Agile Approach, Faster ROI</div>
                <p>Using an agile delivery model, we roll out MVP dashboards quickly and refine them
                  iteratively. This approach ensures faster time-to-value while maintaining accuracy,
                  performance, and governance.</p>
              </div>
            </div>

            <div className="feature-box col-md-6 mb-3 h-100">
              <div className="feature-icon"><svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></div>
              <div>
                <div className="feature-title">Collaboration &amp; Knowledge Transfer</div>
                <p>We work closely with your internal teams, providing workshops, documentation, and
                  hands-on <strong>Tableau training</strong>. This ensures your organization not only
                  gains insights but also builds long-term self-sufficiency in analytics.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="ws-btnblock mt-3 text-center">
          <a href="/contact-us" className="button-red mt-2 mx-0">
            Experience the Tech2Globe Advantage</a>
        </div>
      </section>

      <section>
        <div className="container m-auto headesc text-center mb-5">
          <h2>Our Structured Approach to Tableau Consulting Services</h2>
          <p>At Tech2Globe, we use a proven, phased methodology to deliver <strong>Tableau consulting
            solutions</strong>
            that transform raw data into powerful insights, accelerate decision-making, and scale with your
            business growth.</p>
        </div>

        <div className="container">
          <ProcessSlider />
        </div>
      </section>

      <section className="bg-dark text-light py-5">
        <div className="container m-auto headesc text-center mb-5">
          <h2 className="text-white">Industries We Empower with Tableau Consulting</h2>
          <p className="text-white">Tech2Globe delivers <strong>Tableau analytics solutions</strong> across diverse
            industries—helping organizations uncover hidden insights, streamline operations, and achieve
            measurable growth through smarter data use.</p>
        </div>

        <div className="container">
          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">
                  <svg className="svg-inline--fa fa-cart-shopping fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </div>

                <h3 className="fw-medium">Retail, CPG &amp; E-Commerce</h3>
                <p>Harness <strong>real-time Tableau dashboards</strong> to track sales, customer journeys,
                  and inventory. We help brands fine-tune pricing, promotions, and supply chains with
                  actionable insights.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">

                  <svg className="svg-inline--fa fa-heart-pulse fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"></path></svg>
                </div>
                <h3 className="fw-medium">Healthcare</h3>
                <p>Enhance patient outcomes and streamline operations with <strong>healthcare
                  analytics</strong>. From hospital workflows to compliance tracking, Tableau
                  visualizations support faster, smarter decisions.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">
                  <svg className="svg-inline--fa fa-building fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path></svg>
                </div>
                <h3 className="fw-medium">Construction</h3>
                <p>Stay on top of budgets, schedules, and resources with <strong>construction
                  analytics</strong>. Our Tableau dashboards give project managers clarity to reduce
                  risks and maximize profitability.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">
                  <svg className="svg-inline--fa fa-dollar-sign fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M146 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3C4.9 411.4-2.4 392.5 4.8 376.3s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C105.4 279.3 70.4 270 44.4 253c-14.2-9.3-27.5-22-35.8-39.6C.3 195.4-1.4 175.4 2.5 154.1C9.7 116 38.3 91.2 70.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path></svg>
                </div>
                <h3 className="fw-medium">Finance &amp; Banking</h3>
                <p>Transform complex financial data into crystal-clear insights. From compliance and risk to
                  portfolio monitoring, our <strong>Tableau consulting for finance</strong> enables
                  agility and transparency.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">
                  <svg className="svg-inline--fa fa-microchip fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microchip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>
                </div>
                <h3 className="fw-medium">Technology &amp; ISVs</h3>
                <p>Fuel growth with <strong>Tableau solutions for SaaS &amp; ISVs</strong>. We help technology
                  providers track adoption, optimize products, and reduce churn with real-time analytics.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 text-center p-4 industry-card">
                <div className="text-center">
                  <svg className="svg-inline--fa fa-bullhorn fa-2x mb-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
                </div>
                <h3 className="fw-medium">Marketing &amp; Sales</h3>
                <p>Bring campaign, lead, and revenue data into a single source of truth. Our
                  <strong>marketing &amp; sales Tableau dashboards</strong> empower teams to measure ROI,
                  refine targeting, and scale customer growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto headesc text-center mb-5">
          <h2>Technologies We Use for Tableau Consulting Services</h2>
          <p className="mb-2">Modern Data Stack Expertise to Power Your Analytics</p>
          <p>
            From real-time data streaming to cloud warehousing, we integrate Tableau with leading technologies
            to deliver agility, scalability, and high-performance analytics.
          </p>
        </div>

        <ul className="nav nav-tabs justify-content-center mb-4" id="techTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="dl-tab" data-bs-toggle="tab" data-bs-target="#dl" type="button" role="tab" fdprocessedid="ldac4" aria-selected="false" tabindex="-1">
              DL Frameworks
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="modules-tab" data-bs-toggle="tab" data-bs-target="#modules" type="button" role="tab" fdprocessedid="tib75" aria-selected="true">
              Modules/Toolkits
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="libraries-tab" data-bs-toggle="tab" data-bs-target="#libraries" type="button" role="tab" fdprocessedid="8nzy6w" aria-selected="false" tabindex="-1">
              Libraries
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="frontend-tab" data-bs-toggle="tab" data-bs-target="#frontend" type="button" role="tab" fdprocessedid="4df8q" aria-selected="false" tabindex="-1">
              Frontend
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="backend-tab" data-bs-toggle="tab" data-bs-target="#backend" type="button" role="tab" fdprocessedid="45d50n" aria-selected="false" tabindex="-1">
              Backend
            </button>
          </li>
        </ul>


        <div className="tab-content" id="techTabsContent">

          <div className="tab-pane fade" id="dl" role="tabpanel" aria-labelledby="dl-tab">
            <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3">
              <img src="/images/services/service-inner/theano.png" className="img-fluid" alt="Theano" title="Theano deep learning framework" />
              <img src="/images/services/service-inner/nvidia.png" className="img-fluid" alt="NVIDIA" title="NVIDIA AI and deep learning platform" />
              <img src="/images/services/service-inner/chainer.png" className="img-fluid" alt="Chainer" title="Chainer neural network framework" />
              <img src="/images/services/service-inner/pytorch.png" className="img-fluid" alt="PyTorch" title="PyTorch deep learning framework" />
              <img src="/images/services/service-inner/mxnet.png" className="img-fluid" alt="Apache MXNet" title="Apache MXNet deep learning framework" />
            </div>
          </div>


          <div className="tab-pane fade active show" id="modules" role="tabpanel" aria-labelledby="modules-tab">
            <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3">
              <img src="/images/services/service-inner/kurento.png" className="img-fluid" alt="Kurento" title="Kurento media server toolkit" />
              <img src="/images/services/service-inner/microsoft-cognitive-toolkit.png" className="img-fluid" alt="Microsoft Cognitive Toolkit" title="Microsoft Cognitive Toolkit (CNTK) for AI" />
              <img src="/images/services/service-inner/core-ml.png" className="img-fluid" alt="Core ML" title="Core ML machine learning framework by Apple" />
            </div>
          </div>


          <div className="tab-pane fade" id="libraries" role="tabpanel" aria-labelledby="libraries-tab">
            <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3">
              <img src="/images/services/service-inner/openn.png" className="img-fluid" alt="OpenNN" title="OpenNN neural networks library" />
              <img src="/images/services/service-inner/Tensorflow.png" className="img-fluid" alt="TensorFlow" title="TensorFlow machine learning library" />
              <img src="/images/services/service-inner/sonnet.png" className="img-fluid" alt="Sonnet" title="Sonnet deep learning library built on TensorFlow" />
              <img src="/images/services/service-inner/Neuroph.png" className="img-fluid" alt="Neuroph" title="Neuroph Java neural network library" />
            </div>
          </div>


          <div className="tab-pane fade" id="frontend" role="tabpanel">
            <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3">
              {/* <img src="/images/services/service-inner/Typescript.png" className="img-fluid" alt="TypeScript" title="TypeScript frontend programming language" />
              <img src="/images/services/service-inner/Angular JS.png" className="img-fluid" alt="AngularJS" title="AngularJS frontend framework" />
              <img src="/images/services/service-inner/Next JS.png" className="img-fluid" alt="Next.js" title="Next.js React-based frontend framework" /> */}
            </div>
          </div>


          <div className="tab-pane fade" id="backend" role="tabpanel">
            <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3">
              {/* <img src="/images/services/service-inner/Node JS.png" className="img-fluid" alt="Node.js" title="Node.js backend runtime" />
              <img src="/images/services/service-inner/Python.png" className="img-fluid" alt="Python" title="Python backend programming language" />
              <img src="/images/services/service-inner/Rust.png" className="img-fluid" alt="Rust" title="Rust backend programming language" /> */}
            </div>
          </div>
        </div>


      </section>

      <section className="py-5 position-relative bg-light">
        <div className="container m-auto headesc text-center mb-5">
          <h2>Our Engagement Models</h2>
          <p>
            We offer flexible engagement models designed around your business needs—whether you require
            end-to-end Tableau implementation, dedicated expertise, or strategic advisory.
          </p>
        </div>

        <div className="moving-bg"></div>

        <div className="container engagement-models">
          <div className="row g-4 justify-content-center">

            <article className="col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
                <div className="text-orange mb-3 fs-2" aria-label="Project Delivery Model">
                  <svg className="svg-inline--fa fa-diagram-project" aria-labelledby="svg-inline--fa-title-ONgdq6BSX0s5" data-prefix="fas" data-icon="diagram-project" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><title id="svg-inline--fa-title-ONgdq6BSX0s5">Project-Focused Tableau Delivery</title><path fill="currentColor" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"></path></svg>
                </div>
                <h5 className="fw-bold">Project-Focused Tableau Delivery</h5>
                <p>
                  Ideal for businesses with defined goals and timelines. We manage the entire process—from
                  requirements gathering to Tableau deployment—ensuring impactful results with minimal
                  effort from your team.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
                <div className="text-orange mb-3 fs-2" aria-label="Dedicated Experts Model">
                  <svg className="svg-inline--fa fa-users-gear" aria-labelledby="svg-inline--fa-title-2bb3obFyNcWt" data-prefix="fas" data-icon="users-gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><title id="svg-inline--fa-title-2bb3obFyNcWt">Dedicated Tableau Experts</title><path fill="currentColor" d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"></path></svg>
                </div>
                <h5 className="fw-bold">Dedicated Tableau Experts</h5>
                <p>
                  Looking for long-term support? Our experienced Tableau specialists work as an extension
                  of your team, scaling resources as your analytics needs expand.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
                <div className="text-orange mb-3 fs-2" aria-label="Consulting &amp; Advisory Model">
                  <svg className="svg-inline--fa fa-lightbulb" aria-labelledby="svg-inline--fa-title-aA00JopCh4W6" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><title id="svg-inline--fa-title-aA00JopCh4W6">Tableau Consulting &amp; Advisory</title><path fill="currentColor" d="M256 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C352 78.8 273.2 0 176 0S0 78.8 0 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0C66.5 324.9 86.4 352.1 96 384H256zM176 512c44.2 0 80-35.8 80-80V416H96v16c0 44.2 35.8 80 80 80zM96 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg>
                </div>
                <h5 className="fw-bold">Tableau Consulting &amp; Advisory</h5>
                <p>
                  Not sure where to begin? We help you define a clear analytics roadmap, select the right
                  Tableau architecture, and guide your team with proven best practices.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
                <div className="text-orange mb-3 fs-2" aria-label="Support &amp; Optimization Model">
                  <svg className="svg-inline--fa fa-screwdriver-wrench" aria-labelledby="svg-inline--fa-title-UNmBlRn7Aer3" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-UNmBlRn7Aer3">Tableau Support &amp; Optimization</title><path fill="currentColor" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
                </div>
                <h5 className="fw-bold">Tableau Support &amp; Optimization</h5>
                <p>
                  Already using Tableau? We optimize performance, troubleshoot data issues, enhance
                  dashboards, and train your team to maximize ROI.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="bg-dark text-light py-5">
        <div className="container m-auto headesc text-center mb-5">
          <h2 className="text-white">Get Started with Our Tableau Consulting Process</h2>
        </div>

        <div className="container">
          <div className="row g-4">

            <article className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark text-light border-0 text-center step-card">
                <div className="image-wrapper mx-auto mb-3">
                  <img src="images/services/service-inner/contact-us.png" alt="Step 1: Initial Consultation for Power BI" className="img-fluid" title="Connect with Us" />
                </div>
                <h6 className="text-secondary">Step 1</h6>
                <h5 className="text-orange">Connect with Us</h5>
                <p className="text-white">
                  Begin with a consultation call where we understand your analytics setup, reporting
                  needs, and business goals.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark text-light border-0 text-center step-card">
                <div className="image-wrapper mx-auto mb-3">
                  <img src="images/services/service-inner/project-plan.png" alt="Step 2: Data assessment and planning" className="img-fluid" title="Assess &amp; Plan" />
                </div>
                <h6 className="text-secondary">Step 2</h6>
                <h5 className="text-orange">Assess &amp; Plan</h5>
                <p className="text-white">
                  We analyze your data sources, highlight key challenges, and define a clear Tableau
                  strategy with milestones.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark text-light border-0 text-center step-card">
                <div className="image-wrapper mx-auto mb-3">
                  <img src="images/services/service-inner/dashboard.png" alt="Step 3: Power BI dashboard prototyping" className="img-fluid" title="Prototype Dashboards" />
                </div>
                <h6 className="text-secondary">Step 3</h6>
                <h5 className="text-orange">Prototype Dashboards</h5>
                <p className="text-white">
                  We design an initial dashboard prototype with essential KPIs to validate usability,
                  design, and insights.
                </p>
              </div>
            </article>

            <article className="col-md-6 col-lg-3">
              <div className="card h-100 bg-dark text-light border-0 text-center step-card">
                <div className="image-wrapper mx-auto mb-3">
                  <img src="images/services/service-inner/rocket.png" alt="Step 4: Complete Power BI rollout" className="img-fluid" title="Full Implementation" />
                </div>
                <h6 className="text-secondary">Step 4</h6>
                <h5 className="text-orange">Full Implementation</h5>
                <p className="text-white">
                  We deliver a complete Tableau solution—from data modeling and performance tuning to
                  deployment and training.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="headesc text-center text-lg-start mb-5 position-sticky" style={{
                top: "100px"
              }}>
                <h2>Frequently Asked Questions about Tableau Consulting</h2>
                <p>Got questions? Here are answers to the most common queries about our Tableau consulting
                  services, process, and business benefits.</p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="accordion" id="faqAccordion">


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="zuzi58">
                      1. What services are included in Tableau consulting?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion" >
                    <div className="accordion-body">
                      Tableau consulting includes dashboard development, data visualization, advanced
                      analytics, integration with multiple data sources, and user training. At
                      Tech2Globe, we also provide enterprise-level deployment, governance, and
                      performance optimization.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" fdprocessedid="ponq7e">
                      2. Why should I work with a dedicated Tableau consulting team?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion" >
                    <div className="accordion-body">
                      A dedicated Tableau consulting team helps you unlock the full power of your
                      data. With faster implementation, personalized dashboards, and ongoing support,
                      they ensure you maximize ROI, reduce risks, and achieve meaningful business
                      outcomes.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" fdprocessedid="db0na">
                      3. How do I choose the right Tableau consulting partner?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#faqAccordion" >
                    <div className="accordion-body">
                      Look for a partner with certified Tableau experts, proven case studies, industry
                      knowledge, and the ability to deliver secure, scalable BI solutions. A partner
                      that aligns with your business goals is essential for success.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" fdprocessedid="y316e">
                      4. Can Tableau consulting services integrate with cloud-based data?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. Our Tableau consultants integrate Tableau with cloud platforms such as AWS,
                      Azure, and Google Cloud to ensure seamless connectivity, scalability, and high
                      performance.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" fdprocessedid="jg1ups">
                      5. Can you help with self-service BI adoption using Tableau?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. We enable business users to adopt self-service analytics in Tableau
                      while maintaining enterprise-level governance, data security, and compliance.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" fdprocessedid="ju69w">
                      6. Which industries benefit most from Tableau consulting?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Industries such as healthcare, retail, finance, manufacturing, logistics, and
                      e-commerce benefit from Tableau consulting by gaining real-time visibility,
                      predictive insights, and data-driven strategies.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-0 mb-4 " aria-label="Power BI Consulting Call to Action">
        <div className="cta-section-bi text-center p-5 rounded-3">
          <h2 className="text-white mb-3">Ready to Transform Data into Clear Business Insights?</h2>
          <p className="text-white mb-4">
            Work with a trusted Tableau consulting company that combines technical expertise,
            industry know-how,
            and end-to-end support. <br />
            Tech2Globe helps you harness the true power of Tableau to make confident,
            data-driven decisions.
          </p>
          <div className="ws-btnblock d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="/contact-us" className="button-red">Contact Us</a>
          </div>
        </div>
      </section>

    </>
  )
};
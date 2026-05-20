import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Selenium Testing Services",
  description: "",
  keywords: [],
  alternates: {
    canonical: "https://www.tech2globe.com/selenium-testing-services",
  },
};

const pageHeaderData = {
  title: "Selenium Testing Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Automation Testing Services", path: "/automation-testing-services" },
  { id: 2, name: "Selenium Testing Services", path: "/selenium-testing-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function SeleniumTesting() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Selenium Testing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Selenium Testing Services" imageSrc="/images/services/web-and-mobile-testing-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Selenium is one of the best open-source automated testing solutions for web applications. It comprises of set of tools to automate web browsers across several platforms. In Today’s world, Selenium runs in many operating systems, browsers and is controlled by several testing frameworks and programming languages. Use of Selenium is used not only limited to web browser automation testing but also to automate web based administration tasks.</p>
                <p>Tech2Globe has extensive expertise in Selenium automated. We do automated regression, functional testing, creation of automation framework, test management tools integration, testing of browser compatibility, testing for mobile apps and much more using Selenium.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="pb-3">Why Tech2Globe for Selenium Automated Testing Services?</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow-sm h-100">
                      <h4 className="d-flex gap-2"><img src="/images/services/service-inner/selenium-infrastructure.png" alt="Selenium Testing Infrastructure" style={{
                        width: "28px", height: "28px",
                      }} /> Selenium Testing Infrastructure</h4>
                      <p className="mb-0">Tech2Globe has a team of expert testers who has profound experience in using Selenium. Our Selenium experts have several years of experience in selenium web application testing which allows you to relax on hiring a tester and setting up testing infrastructure explicitly. Tech2Globe work directly on your projects and test your software in real browser/OS platforms for web and mobile.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow-sm h-100">
                      <h4 className="d-flex gap-2"><img src="/images/services/service-inner/expert.png" alt="Experts in Handling Complex Projects" style={{
                        width: "28px", height: "28px",
                      }} />Experts in Handling Complex Projects</h4>
                      <p className="mb-0">Our Selenium test engineers have worked on several complex projects of various domains. We love complexity and challenges. Once you partner with us for Selenium testing automation, you can expect your Testing is welldone. You will be having a WOW feeling once done. We are capable of taking care of all complexities in your projects through our streamlined testing process.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="mt-3 d-flex gap-2"> <img src="/images/services/service-inner/selenium-infrastructure.png" alt="Unique Selenium Testing Services Model" style={{
                        width: "28px", height: "28px",
                      }} /> Unique Selenium Testing Services Model</h3>
                <p className="mb-0"><FaAngleRight /> Certified and experienced Selenium QA Engineers, who loves working on Selenium</p>
                <p className="mb-0"><FaAngleRight />  You can hire a dedicated selenium tester or team of selenium specialists for full time or part time basis easily as per your choice</p>
                <p><FaAngleRight />  Risk Free Selenium Testing for 2 Weeks</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="mt-3 d-flex gap-2"><img src="/images/services/service-inner/skill.png" alt="Selenium Testing Skills Includes" style={{
                        width: "28px", height: "28px",
                      }} /> Selenium Testing Skills Includes</h3>
                <p className="mb-0"><FaAngleRight /> Expert in Selenium with most of the programming languages viz. PHP, C#.NET, Ruby, Python, Perl, Java</p>
                <p className="mb-0"><FaAngleRight /> Apache Flex/Flash and Database testing with Selenium 2</p>
                <p className="mb-0"><FaAngleRight />  Experts in Selenium IDE, RC &WebDriver / Selenium 2</p>
                <p className="mb-0"><FaAngleRight /> Strong Selenium IDE, RC &WebDriver / Selenium 2 expertise</p>
                <p><FaAngleRight />  Selenium with JUnit, TestNG Frameworks</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Clients</h2>
                <div className="row pb-5">
                  <div className={Style.LogoGrid}>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/1.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/2.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/3.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/4.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/5.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/attractivecostumes.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/beency.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/dhamaka99.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/lacanvas.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/plazasurfsports.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/sports456.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/travel-blue.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/vantagevista.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/windsorone.png" alt="" />
                    </div>
                    <div className="logoitem">
                      <img src="/images/services/service-inner/clientlogo/zphotoedit.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

      </section >

    </>
  )
};

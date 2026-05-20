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
  title: "Mailchimp Template Design & Development Service | Tech2globe",
  description:
    "Tech2Globe provides Mailchimp template design and development services worldwide. We create responsive email designs and custom templates that match your branding and website consistency.",
  keywords: [
    "mailchimp email services",
    "Mailchimp Template Development",
    "custom Mailchimp Template",
    "Mailchimp Template Design"
  ],
  openGraph: {
    title: "Mailchimp Template Design & Development Service | Tech2globe",
    description:
      "Tech2Globe provides Mailchimp template design and development services worldwide. Responsive email design and custom template creation to match your website and keep your branding consistent.",
    url: "https://www.tech2globe.com/mailchimp-template-design-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mailchimp Template Design & Development Service | Tech2globe",
    description:
      "Tech2Globe provides Mailchimp template design and development services worldwide. Responsive email design and custom template creation to match your website and keep your branding consistent."
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/mailchimp-template-design-services"
  }
};

const pageHeaderData = {
  title: "Mailchimp Template Design",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Responsive Web Design", path: "/responsive-web-design" },
  { id: 2, name: "Mailchimp Template Design", path: "/mailchimp-template-design" },
  { id: 3, name: "Angular js Development", path: "/angular-js-development-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function ResponsiveWebDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Mailchimp Template Design" />
     
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Look no further, we’ve got what you need!</h2>
                <hr/>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <Image src="/images/services/service-inner/mailchimp.jpg" alt="" width={400} height={243} className="img-fluid" />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <p>At Tech2Globe we are totally obsessed with email and internet marketing. Sure, people may call us email nerds but we think that’s a good thing that we are called Email experts. Whether you need any email strategy consultations. Custom template designs, copywriting or anything in between. We have the experience and expertise to simply get the job done for you; we’re supported by a gifted team of strategic, creative, and technical professionals. It’s no secret MailChimp is our preferred USP, and we provide a full array of services to help you make the most of MailChimp’s expansive offerings, including:</p>
                  </div>
                </div>

                <div className="row pb-5">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="iconbox card h-100 shadow-sm p-2">
                      <div className="ico">
                        <Image src="/images/services/service-inner/banner-icon-1.png" alt="Virtual Assistant" width={22} height={22} className="img-fluid" />
                      </div>
                      <p className="text-center text-uppercase mt-2">Virtual Assistant</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="iconbox card h-100 shadow-sm p-2">
                      <div className="ico">
                        <Image src="/images/services/service-inner/banner-icon-1.png" alt="End to End Solutions" width={22} height={22} className="img-fluid" />
                      </div>
                      <p className="text-center text-uppercase mt-2">End to End Solutions</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="iconbox card h-100 shadow-sm p-2">
                      <div className="ico">
                        <Image src="/images/services/service-inner/banner-icon-1.png" alt="Google Certified Professionals" width={22} height={22} className="img-fluid" />
                      </div>
                      <p className="text-center text-uppercase mt-2">Google Certified Professionals</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="iconbox card h-100 shadow-sm p-2">
                      <div className="ico">
                        <Image src="/images/services/service-inner/banner-icon-1.png" alt="24*7 Support" width={22} height={22} className="img-fluid" />
                      </div>
                      <p className="text-center text-uppercase mt-2">24*7 Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Strategy & Consulting</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Best Practices Audit</p>
                    <p className="mb-0"><FaAngleRight/> Performance Assessment</p>
                    <p className="mb-0"><FaAngleRight/> Competitive Studies</p>
                    <p><FaAngleRight/> Program Definition and Development</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Optimization & Production</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Frequency and Personalization Strategy</p>
                    <p className="mb-0"><FaAngleRight/> Behavioural and Event Trigger Development</p>
                    <p className="mb-0"><FaAngleRight/> Dynamic Content</p>
                    <p><FaAngleRight/> A/B and Multivariate Testing</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Email Design & Coding</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Promotional Emails</p>
                    <p className="mb-0"><FaAngleRight/> Custom MailChimp Templates</p>
                    <p className="mb-0"><FaAngleRight/> Email Copywriting</p>
                    <p className="mb-0"><FaAngleRight/> Content Libraries</p>
                    <p><FaAngleRight/> Bullet proof’ Coding</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>List Growth & Lead Nurturing</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Database Segmentation and Scoring</p>
                    <p className="mb-0"><FaAngleRight/> List Growth/Churn Strategy</p>
                    <p className="mb-0"><FaAngleRight/> Lead Nurturing Strategy and Tools</p>
                    <p className="mb-0"><FaAngleRight/> Program Definition and Development</p>
                    <p><FaAngleRight/> List Hygiene and Enhancement</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Mail Chimp API Customization</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Salesforce and SugerCRM</p>
                    <p className="mb-0"><FaAngleRight/> Performance Assessment</p>
                    <p className="mb-0"><FaAngleRight/> Google Analytics and Omniture</p>
                    <p><FaAngleRight/> Custom Solutions</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Training & Support</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> One-On-One Training Sessions</p>
                    <p className="mb-0"><FaAngleRight/> Workbooks and Style Guides</p>
                    <p><FaAngleRight/> On call troubleshooting</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Managed Services & Outsourcing</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Outsourced Email Marketing Management</p>
                    <p className="mb-0"><FaAngleRight/> Turn-key Strategy and Production</p>
                    <p><FaAngleRight/> Ongoing Optimization and Delivery</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Questions?</h4>
                    <hr/>
                    <p className="mb-0"><FaAngleRight/> Let us know</p>
                    <p><FaAngleRight/> We’ll get back to you super quick!</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake Php Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Reponsive Web Design </Link></p>
                <p><FaAngleRight /> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>
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

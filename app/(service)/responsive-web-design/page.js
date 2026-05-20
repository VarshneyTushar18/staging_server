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
  title: "Responsive Web Design Services | Web Design Company | Tech2Globe",
  description:
    "Get compatible responsive web design services. Our experts having great experience in java, CSS, HTML etc. & making the website fully responsive and easy to use.",
  keywords: [
    "Responsive web design services",
    "Web Design Company",
    "Responsive Website Design and Development Services",
    "Best web design services",
  ],
};

const pageHeaderData = {
  title: "Responsive Web Design",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "UI/UX Design Services", path: "/ui-ux-design-services" },
  { id: 2, name: "Front End Designing", path: "/front-end-development-company" },
  { id: 3, name: "Responsive Web Designing", path: "/responsive-web-design" },
  { id: 4, name: "Graphic Design", path: "/graphic-design-services" },
  { id: 5, name: "Corporate Branding", path: "/corporate-branding" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function ResponsiveWebDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Responsive Web Design" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Responsive Web Design" imageSrc="/images/services/graphics-design-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Responsive web designs are demonstrating a great brand resource for great brand. According to the ongoing announcement via search engine giant Google, individuals search more on mobile devices than on PCs. It has made the requirement of responsive web design a need for organizations to survive in the market. Tech2Globe can give you the ideal outcomes in mobile interface design. The vast majority of the businesses are gradually moving to this type of web design. There is a rising interest for website design companies that can make a top notch responsive website design.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Get Customized Responsive Web Designing Services from Tech2Globe</h4>
                <p>The main thing matters to the clients? A client needs a site that loads rapidly, is easy to explore, contains the data they need and has an engaging design. Truth be told, organizations that describe themselves as "plan driven" are 89% almost certain than their rivals to surpass their business objectives. At Tech2Globe, we give responsive web design and development services that can stand the trial of time and different devices.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>How We Design Websites and Applications</h4>
                <p>As a best responsive web design company, we make sites that adjust to any gadget or screen size, giving an enjoyable experience to your watchers. We join flexible grids, responsive pictures and readable content and media queries to give you incredible designs that drive transformations and empower the correct activities at the right time.</p>
                <p className="mb-0"><FaAngleRight /> Brand Research</p>
                <p className="mb-0"><FaAngleRight /> Customer Research</p>
                <p className="mb-0"><FaAngleRight /> Intuitive UX/UI Design</p>
                <p className="mb-0"><FaAngleRight /> Designs for Real People</p>
                <p className="mb-0"><FaAngleRight /> Time Saving Work</p>
                <p className="mb-0"><FaAngleRight /> SEO-Friendly Designs</p>
                <p><FaAngleRight /> Reports and Analytics</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Industries We Serve</h4>
                <p>Responsive web design company India make website pages that are effectively navigable on screen of any size and device. Actually, this is called responsive web development. The sites are planned such that regardless of which device they are accessed from, the action is basic and clear to the clients.</p>
                <p className="mb-0"><FaAngleRight /> Travel</p>
                <p className="mb-0"><FaAngleRight /> Transport</p>
                <p className="mb-0"><FaAngleRight /> Education</p>
                <p className="mb-0"><FaAngleRight /> Real Estate</p>
                <p className="mb-0"><FaAngleRight /> Manufacturing</p>
                <p className="mb-0"><FaAngleRight /> Business</p>
                <p className="mb-0"><FaAngleRight /> Banking</p>
                <p className="mb-0"><FaAngleRight /> Entertainment</p>
                <p><FaAngleRight /> Healthcare</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe for Responsive Web Design?</h4>
                <p>Responsive Web Design needs an increasingly conceptual way of thinking and our profoundly productive group keeps up a widening competitive advantage over other website designers. Give us a shot and witness a striking increase in your organization's business graph.</p>
                <p className="mb-0"><FaAngleRight /> We structure each task utilizing extensive user research to make them tastefully satisfying and profoundly helpful.</p>
                <p className="mb-0"><FaAngleRight /> Tech2Globe team has profoundly gifted responsive web design professionals’ experts with productive experience for various planning needs.</p>
                <p className="mb-0"><FaAngleRight /> We give flexible design solutions, from making excellent web and mobile responsive design to branding solutions.</p>
                <p className="mb-0"><FaAngleRight /> We need to exceed expectations in each project, so we imagine, design, test and at exactly then do we live a landing page.</p>
                <p><FaAngleRight /> We have a passion for designing which drives us to convey an unparalleled client experience that supports your marking techniques.</p>
                <p>Contact the main web design company for additional details about responsive web design services. Tech2Globe would be glad to give you the same. We will make the sort of response that you might want to create among your site clients.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development </Link></p>
                <p><FaAngleRight /> <Link href="/volusion-development" className="text-decoration-none fw-normal">Volusion Development</Link> </p>
                <p><FaAngleRight /> <Link href="/3dcart-development" className="text-decoration-none fw-normal">3Dcart Development</Link></p>
                <p><FaAngleRight /> <Link href="/open-cart-development-services" className="text-decoration-none fw-normal">Open Cart Development </Link></p>
                <p><FaAngleRight /> <Link href="/amazon-consulting-services" className="text-decoration-none fw-normal">Amazon Consulting Services </Link></p>
                <p><FaAngleRight /> <Link href="/flipkart-seller-account-management" className="text-decoration-none fw-normal">Flipkart </Link></p>
                <p><FaAngleRight /> <Link href="/online-business-management-amazon-in" className="text-decoration-none fw-normal">Amazon India </Link></p>
                <p><FaAngleRight /> <Link href="/eBay-management" className="text-decoration-none fw-normal">eBay India </Link></p>
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

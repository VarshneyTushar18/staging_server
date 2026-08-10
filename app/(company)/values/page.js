import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Value Our Clients For Better Relationship: Tech2globe",
  description:
    "Tech2globe leading-edge of latest technologies and apps, making sure that our professional record and knowledge, technical expertise, experience and level of client service is incomparable in the industry.",
  openGraph: {
    title: "Value Our Clients For Better Relationship: Tech2globe",
    description:
      "Tech2globe leading-edge of latest technologies and apps, making sure that our professional record and knowledge, technical expertise, experience and level of client service is incomparable in the industry.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/values",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Our Clients For Better Relationship: Tech2globe",
    description:
      "Tech2globe leading-edge of latest technologies and apps, making sure that our professional record and knowledge, technical expertise, experience and level of client service is incomparable in the industry."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/values"
  }
};

const resources = [
  { id: 1, name: "About Tech2Globe", path: "/about-us" },
  { id: 2, name: "Infrastructure", path: "/infrastructure" },
  { id: 3, name: "Values", path: "/values" },
  { id: 4, name: "Associations Ascription", path: "/associations-ascription" },
  { id: 5, name: "Clients", path: "/clients" },
  { id: 6, name: "CSR Initiatives", path: "/csr-initiatives" },
  { id: 7, name: "Our Team", path: "/our-team" },
  { id: 8, name: "Life@Tech2globe", path: "/life-at-tech2globe" },
  { id: 9, name: "Career", path: "/career" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];

const pageHeaderData = {
  title: "Values",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

export default function Values() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="About Us" pageName="Values" />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Values</h2>
                <h5>Tech2Globe Core Values: We value our clients for better relationship with us</h5>
                <hr/>
                <Image
                  src="/images/about/value.jpg"
                  alt="Values"
                  width={264}
                  height={314}
                />
                <p className="pt-3">A leadership team they know technology and business. It&apos;s a powerful combination that guides every judgment we make as a company and for your software web development needs</p>
                <p>We deliver to our clients with the peak level of service at each phase of the customer relationship</p>
                <p>To stay on the leading-edge of latest technologies and apps, making sure that our professional record and knowledge, technical expertise, experience and level of client service is incomparable in the industry.</p>
                <p>To continue to maintain long-term client relationships while creating and maintaining the products and services that we deliver.</p>
                <p>To ensure that Tech2Globe employees are continually trained on cutting-edge technologies while encouraging cross group training or learning based on client engagements <strong>Here</strong>, to challenge our employees to solve difficult problems while ensuring that they remain inspired or self-driven, mapping their career goals to the career track that we make for them at Tech2Globe.</p>
                <p>Honest and sincere to all our investors and shareholders extending from our business partner, clients and employees to our vendors.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h5>We promise to live up to our values</h5>
                <p><strong>Tech2Globe values reflect in:</strong></p>
                <hr/>
                <ul>
                  <li>Bonding relationship with clients</li>
                  <li>Client Intimacy</li>
                  <li>Confidentiality and privacy with respect to work</li>
                  <li>Reflective atmosphere</li>
                  <li>Integrity expressed</li>
                  <li>Independent business objectives</li>
                </ul>
              </div>
         
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

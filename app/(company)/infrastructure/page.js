import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
  title: "OFFICE INFRASTRUCTURE DESIGN AND RELOCATION - Tech2globe",
  description:
    "Tech2globe designed the infrastructure related components of the new space such as computer room, voice, data and power for the workspace.",

  openGraph: {
    title: "OFFICE INFRASTRUCTURE DESIGN AND RELOCATION - Tech2globe",
    description:
      "Tech2globe designed the infrastructure related components of the new space such as computer room, voice, data and power for the workspace.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/Infrastructure",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "OFFICE INFRASTRUCTURE DESIGN AND RELOCATION - Tech2globe",
    description:
      "Tech2globe designed the infrastructure related components of the new space such as computer room, voice, data and power for the workspace."
  },

  alternates: {
    canonical: "https://www.tech2globe.com/Infrastructure"
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
  title: "Infrastructure",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

export default function Infrastructure() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="About Us"
        pageName="Infrastructure"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Take a look towards office Infrastructure</h2>
                <p>Tech2Globe prominent offshore outsourcing software Development Company located in New Delhi, Capital of India and it well connected with international business points. Tech2Globe facility integrates world-class technology infrastructure with main focus on security, scalability and reliability. Tech2Globe has a wide-ranging physical security setup that ensures complete project data, documents, media, and services are secure and safe at all times.</p>
              </div>
              <div className="video pb-3">
                <iframe class="w-100" height="324" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/eUJc53n0cRg"></iframe>
              </div>
              <div className={Style.ContentDiv}>
                <h4>Physical Security</h4>
                <ul className="">
                  <li>Access 365/24/7 - Security guards controlled building.</li>
                  <li>Video surveillance.</li>
                  <li>Smart Card Access.</li>
                  <li>Fire protection.</li>
                </ul>
              </div>
              <div className={Style.ContentDiv}>
                <h4>Infrastructure</h4>
                <ul>
                  <li>Firewall Protection from Cisco for High Network Security.</li>
                  <li>Real Time malware and Virus Protection - Anti-Virus Protected using Microsoft Forefront.</li>
                  <li>For More safety Daily Data Backup – Tech2Globe use secure and reliable online regular backup services.</li>
                  <li>Disaster Management Facility – Fully planned Disaster Recovery strategy.</li>
                  <li>Daily check-up and Preventive Maintenance on Software and Operating systems.</li>
                  <li>24/7/365 Power Availability Power Generator for night shift, Emergency and UPS.</li>
                  <li>Using licensed software for better Development and Design and other services.</li>
                  <li>Internet Connectivity: We have dedicated leased lines for all our development services supported by a 24*7 backup broadband and wireless.</li>
                  <li>Also, we have dedicated servers for application hosting, testing, and other needs.</li>
                  <li>For video communication and conferencing with 24*7 VOIP communications available.</li>
                  <li>Tech2Globe – the name defines technology to globe for perfect standard and quality.</li>
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

import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
  title: "Our Portfolio of Clients at Tech2Globe",
  description:
    "Over the past decade and a half, Tech2Globe has catered to the needs of over 7,800 clients from different domains worldwide. Have a look at our clients!",
  keywords: "",
  openGraph: {
    title: "Our Portfolio of Clients at Tech2Globe",
    description:
      "Over the past decade and a half, Tech2globe has catered to the needs of over 7,800 clients from different domains worldwide. Have a look at our clients!",
    url: "https://www.tech2globe.com/clients",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio of Clients at Tech2Globe",
    description:
      "Over the past decade and a half, Tech2globe has catered to the needs of over 7,800 clients from different domains worldwide. Have a look at our clients!",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/clients",
  },
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

const clients = [
  { img: "/images/clients/ministry-of-jal-shakti.webp", title: "Ministry of Jal Shakti" },
  { img: "/images/clients/ministry-of-ayush.webp", title: "Ministry of Ayush" },
  { img: "/images/clients/ministry-of-defence.webp", title: "Ministry of Defence" },
  { img: "/images/clients/clientpage/delivery-hero.jpg", title: "Delivery Hero" },
  { img: "/images/clients/clientpage/aon-hewiit.png", title: "Aon Hewitt" },
  { img: "/images/clients/clientpage/foodora.png", title: "Foodora" },
  { img: "/images/clients/clientpage/4.png", title: "LinkCycle" },
  { img: "/images/clients/clientpage/zphotoedit.png", title: "ZphotoEdit" },
  { img: "/images/clients/clientpage/2.png", title: "Couture Bidder" },
  { img: "/images/clients/clientpage/clients4.png", title: "Greenfox" },
  { img: "/images/clients/clientpage/sassoon.png", title: "Sassoon" },
  { img: "/images/clients/clientpage/5.png", title: "Silver Gold Intocash" },
  { img: "/images/clients/clientpage/attractivecostumes.png", title: "Attractive" },
  { img: "/images/clients/clientpage/beency.png", title: "Beency" },
  { img: "/images/clients/clientpage/dhamaka99.png", title: "Dhamaka99" },
  { img: "/images/clients/clientpage/lacanvas.png", title: "LA" },
  { img: "/images/clients/clientpage/orthosoft.png", title: "Orthosoft" },
  { img: "/images/clients/clientpage/plazasurfsports.png", title: "Plaza Surf Sport" },
  { img: "/images/clients/clientpage/sports456.png", title: "Sport 456" },
  { img: "/images/clients/clientpage/travel-blue.png", title: "TravelBlue" },
  { img: "/images/clients/clientpage/vantagevista.png", title: "Vantage Vista" },
  { img: "/images/clients/clientpage/windsorone.png", title: "Windsor One" },
  { img: "/images/clients/clientpage/follett-logo.png", title: "Folllett" },
  { img: "/images/clients/clientpage/amazon-usa.png", title: "Amazon" },
  { img: "/images/clients/clientpage/aquatech.png", title: "Aquatech" },
  { img: "/images/clients/clientpage/cantabil.png", title: "Cantabil" },
  { img: "/images/clients/clientpage/bluebird.png", title: "Bluebird" },
  { img: "/images/clients/clientpage/creative-arcades.png", title: "Creative Arcades" },
  { img: "/images/clients/clientpage/ecommerce-guru.png", title: "Ecommerce Guru" },
  { img: "/images/clients/clientpage/epos.png", title: "EPOS" },
  { img: "/images/clients/clientpage/frontier.png", title: "Frontier" },
  { img: "/images/clients/clientpage/getkart.png", title: "Getkart" },
  { img: "/images/clients/clientpage/hp.png", title: "HP" },
  { img: "/images/clients/clientpage/indiaSoft.png", title: "India Soft" },
  { img: "/images/clients/clientpage/instas.png", title: "Instas" },
  { img: "/images/clients/clientpage/legend.png", title: "Legend" },
  { img: "/images/clients/clientpage/nike.png", title: "Nike" },
  { img: "/images/clients/clientpage/patanjali.png", title: "Patanjali" },
  { img: "/images/clients/clientpage/sales-warp.png", title: "Sales Warp" },
  { img: "/images/clients/clientpage/shikhar-group.png", title: "Shikhar" },
  { img: "/images/clients/clientpage/snapdeal.png", title: "Snapdeal" },
  { img: "/images/clients/clientpage/sparsh-logo.png", title: "Sparsh" },
  { img: "/images/clients/clientpage/sports.png", title: "Sports" },
  { img: "/images/clients/clientpage/ss-mediacl.png", title: "SS Medical" },
  { img: "/images/clients/clientpage/swiggy.png", title: "swiggy.png" },
  { img: "/images/clients/clientpage/unacademy.png", title: "Unacademy" },
  { img: "/images/clients/clientpage/wow.png", title: "WOW" },
  { img: "/images/clients/clientpage/wellist.png", title: "Wellist" },
  { img: "/images/clients/clientpage/wooden-street.png", title: "Wooden Street" },
  { img: "/images/clients/clientpage/luiolui.png", title: "Luiolui" }

];
const pageHeaderData = {
  title: "Clients",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

export default function Clients() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="About Us"
        pageName="Clients"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Tech2globe clients: Tech2globe has hundreds of satisfied clients</h2>
                <p>Tech2globe delivers cutting-edge Software Web and Mobile application development services on a global scale. Our clienteles range from Independent Software Vendors to application service providers to non-IT ventures, entrepreneurs and from ambitious start-ups to frontline industry veterans.</p>
                <p>We know that client’s goals and requirements are inextricably connected to a business domain situation. The delve not only into technical facets of a project, but also into business surrounding to find the finest option for our clients, all contingent on their business drivers, activities, size and project scope. Not only do we listen to what our customers need but we also hear what they actually required. Tech2globe team feels dedicated to deliver great value and has a factual desire to become part of Tech2globe client’s success.</p>
                <p>Tech2globe clear insight into customers’ needs and in deep understanding of business domain tendencies have converted into an array of successful web and software development projects in different market niches. Our tailored approach helped Tech2globe create premium clients from various regions like: North America, Western Europe, Northern Europe, Australia, the Middle East and Russia. To know more about the companies that we operated with and our engagement in their software, web, and mobile application development works.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="clients">
                  <div className="row">
                    <div className="col-xs-12">
                      <ul className={Style.ClientGrid}>
                        {clients.map((client, index) => (
                          <li key={index} className={index !== 0 ? "borderTop" : ""}>
                            <figure className="pic">
                              <img
                                src={client.img}
                                alt={client.title}
                                title={client.title}
                              />

                              <div className={Style.PicCaption}>
                                <h5 className={Style.PicTitle}>{client.title}</h5>
                              </div>
                            </figure>
                          </li>
                        ))}
                      </ul>
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
      </section>
    </>
  );
}

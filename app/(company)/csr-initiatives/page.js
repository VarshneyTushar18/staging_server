import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
  title: "Corporate Social Responsibility (CSR) | CSR INITIATIVES",
  description:
    "Corporate social responsibility (CSR) is a business model that helps a company be socially accountable to itself, its stakeholders, and the public.",

  openGraph: {
    title: "Corporate Social Responsibility (CSR) | CSR INITIATIVES",
    description:
      "Corporate social responsibility (CSR) is a business model that helps a company be socially accountable to itself, its stakeholders, and the public.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/csr-initiatives",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Social Responsibility (CSR) | CSR INITIATIVES",
    description:
      "Corporate social responsibility (CSR) is a business model that helps a company be socially accountable to itself, its stakeholders, and the public."
  },

  alternates: {
    canonical: "https://www.tech2globe.com/csr-initiatives"
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
  title: "CSR Initiatives",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

export default function CSRInitiatives() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="About Us"
        pageName="CSR Initiatives"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>An Absolute Pleasure</h2>
                <h5 className="text-danger">Inviting Kids from ‘SPARSH’ for Christmas Eve at Tech2Globe Web Solutions LLP</h5>
                <p className="fw-medium">&quot;We live in a world where people only think about themselves and in such a scenario “TecpGlobe Web Solutions LLP” took an initiative to go that extra mile to bring a joy of happiness in the lives of special little stars of ‘SPARSH’.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row pb-3 g-0">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="images/csr-1.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="images/csr-2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <p>&quot;Sparsh is one such NGO that has really defined humanity in the real sense. Its efforts are truly commendable. To have a heart that cares for others rather than your own self is indeed a self less act of benevolence.</p>
                <p>Sparsh is dedicated to the empowerment and welfare of all sections of the society-women, children, elderly and especially the physically & mentally challenged. Their aim is to empower the children having special needs with the necessary skills to manage life on their own. However, the thrust area of Sparsh is empowerment of mentally and physically challenged children. They have built Sparsh Special School, a school for destitute children with special need.</p>
                <p>&quot;A healing touch can make a lot of difference in someone’s life. With the motive to make this phrase to come a real way”Tech2Globe” took an initiative to invite the special kids from “SPARSH’. 4 little stars were called to grace the occasion of ‘Christmas’ herein.</p>
                <p>The program started with welcoming the special superstars with roses to lighten up their mood with the fragrance of positivity. Tech2Globe was decorated in a Christmas Theme to give a real effect of joy to the kids. ‘ Tech2Globe’ employees put their different stalls in the office premises like- Food Stalls, Games Stalls, Nail Art and Tie the Turban etc.. Then the event was graced by 2 talents of ‘Tech2Globe Family’ who performed a song to bring a smile on those beautiful pure souls.</p>
                <p>&quot;When we were with these children, we were trying to hold back the tears. Watching them perform so well, seeing what they are capable of, we were overwhelmed with tears of joy. Together, let’s do all we can to help them lead a normal life.&quot;</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row pb-3 g-0">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img src="images/lg-csr-1.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img src="images/lg-csr-2.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img src="images/lg-csr-3.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <img src="images/lg-csr-4.jpg" alt="" className="img-fluid" />
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

import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
  title: "Industry Certifications Associations Ascription : Tech2globe",
  description:
    "At Tech2globe, our commitment to providing high quality services is proved by the standards certifications and accreditation that we have achieved over the years.",

  openGraph: {
    title: "Industry Certifications Associations Ascription : Tech2globe",
    description:
      "At Tech2globe, our commitment to providing high quality services is proved by the standards certifications and accreditation that we have achieved over the years.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/associations-ascription",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Industry Certifications Associations Ascription : Tech2globe",
    description:
      "At Tech2globe, our commitment to providing high quality services is proved by the standards certifications and accreditation that we have achieved over the years."
  },

  alternates: {
    canonical: "https://www.tech2globe.com/associations-ascription"
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
  title: "Associations Ascription",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

export default function AssociationsAscription() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="About Us"
        pageName="Associations Ascription"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Associations Ascription</h2>
                <p>Tech2Globe – The name stands for “deliver technology to globe”. We have a long standing commitment towards standard or quality management, flow-less progressive initiatives and we adopt of cutting-edge technologies to accomplish our client&apos;s goals for cost, schedule, functionality and quality. Tech2Globe has been rewarded with international accepted certifications to confirm our commitment to delivering excellence. Check our Awards & Accolades below.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                   

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="/images/iso-innerimage.webp" alt="ISO 9001 2015" />
                      <h3>ISO 9001 2015</h3>
                    </div>
                  </div>              

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="/images/cmmi-innerimage.webp" alt="CMMI 3"/>
                      <h3>CMMI 3</h3>
                    </div>
                  </div>              

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="/images/iso-iec-innerpage.webp" alt="ISO IEC"/>
                      <h3>ISO IEC</h3>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/topsesos-best-in-search.png" alt="Top SEOs Best in Search Award"/>
                      <h3>Top SEOs Best in Search Award</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/Nanaimo-Chamber-Certificate.jpg" alt="Nanaimo Chamber Certificate"/>
                      <h3>Nanaimo Chamber Certificate</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/t2g-certificate-gp-global.jpg" alt="Go Global Awards"/>
                      <h3>Go Global Awards</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/t2g-certificate.jpg" alt="ISO Standard Certification"/>
                      <h3>ISO Standard Certification</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards.jpg" alt="Certified NopCommerce Solutions Partner"/>
                      <h3>Certified NopCommerce Solutions Partner</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/amazone-seller.jpg" alt="Certified AMAZON Seller Service Provider"/>
                      <h3>Certified AMAZON Seller Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/flipkart-ads.jpg" alt="Certified FLIPKART ADS Seller Service Provider"/>
                      <h3>Certified FLIPKART ADS Seller Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-2.jpg" alt="Certified PAYONEER Service Provider"/>
                      <h3>Certified PAYONEER Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-3.jpg" alt="Certified SHOPIFY Service Provider"/>
                      <h3>Certified SHOPIFY Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-4.jpg" alt="Certified AMAZON SPN Service Provider"/>
                      <h3>Certified AMAZON SPN Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-5.jpg" alt="Certified AMAZON SPONSORED PRODUCT Service Provider"/>
                      <h3>Certified AMAZON SPONSORED PRODUCT Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-6.jpg" alt="Certified EBAY Service Provider"/>
                      <h3>Certified EBAY Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-7.jpg" alt="Certified INDIA 5000 BEST MSME AWARDS"/>
                      <h3>Certified INDIA 5000 BEST MSME AWARDS</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/awards-8.jpg" alt="Certified CLUTCH Service Provider"/>
                      <h3>Certified CLUTCH Service Provider</h3>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
                    <div className={Style.AssociationsCard}>
                      <img src="images/associations-ascription/indiasoft-certificate-9.jpg" alt="Certificate of Indiasoft Participation"/>
                      <h3>Certificate of Indiasoft Participation</h3>
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

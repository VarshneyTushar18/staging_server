import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandPointRight, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Image Watermark Removal Service Provider - Delivery within 24 Hours",
  description:
    "Tech2Globe delivers seamless watermark removal services, ensuring pristine images. Trust our expert image watermarking service for a polished and professional visual impact.",
  keywords: "",
  openGraph: {
    title: "Image Watermark Removal Service Provider - Delivery within 24 Hours",
    description:
      "Tech2Globe delivers seamless watermark removal services, ensuring pristine images. Trust our expert image watermarking service for a polished and professional visual impact.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/watermark-removal-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Watermark Removal Service Provider - Delivery within 24 Hours",
    description:
      "Tech2Globe delivers seamless watermark removal services, ensuring pristine images. Trust our expert image watermarking service for a polished and professional visual impact.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/watermark-removal-services",
  },
};

const pageHeaderData = {
  title: "Watermark Removal Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
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

const realtedservices = [
  { id: 1, name: "Drop Shadow", path: "/drop-shadow" },
  { id: 2, name: "Photo Restoration Services", path: "/photo-restoration-services" },
  { id: 3, name: "Black & White Images To Color", path: "/blackandwhite-imagesto-color" },
  { id: 4, name: "Food Photo Editing Services", path: "/food-photo-editing-services" },
  { id: 5, name: "Image Vector Services", path: "/image-vector-services" },
  { id: 6, name: "Skin Retouching Services", path: "/skin-retouching-services" },
  { id: 7, name: "Old Photo Restoration", path: "/old-photo-restoration" },
  { id: 8, name: "Panorama Image Stitching Services", path: "/panorama-image-stitching-services" },
  { id: 9, name: "Watermark Removal Services", path: "/watermark-removal-services" },
  { id: 10, name: "Photo Retouching", path: "/photo-retouching" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Related Services", links: realtedservices }
];

const portfolio = [
  {
    title: "CATALOGUING",
    items: [
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-watermark-removal-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-watermark-removal-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-watermark-removal-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-watermark-removal-portfolio-1.jpg",
      },
    ],
  }
]

const caseStudies = [
  {
    "id": 1,
    "title": "IMAGE PROCESSING",
    "image": "/images/services/service-inner/casestudies/image-enhancement-main-case-study.jpg",
    "description": "To edit more than 4, 00,000 images and carrying out image enhancement within a really short timeframe was a real challenge. The customer would daily upload minimum 100 folders with approximately 50 images to FTP. We had to deliver the work unfailingly on a regular",
    "docLink": "https://zphotoedit.com/case-study/image-processing.pdf"
  },
  {
    "id": 2,
    "title": "REAL ESTATE PHOTO EDITING",
    "image": "/images/services/service-inner/casestudies/real-estate-photo-enhancement-services-case-study.jpg",
    "description": "The client is one of the top realtor marketing service providers in USA. Client's effective marketing program has vastly helped real estate professionals, Property Managers, Investors and private property sellers by increasing their leads manifold, drastically",
    "docLink": "https://zphotoedit.com/case-study/real-estate.pdf"
  },
  {
    "id": 3,
    "title": "JEWELLERY PHOTO EDITING",
    "image": "/images/services/service-inner/casestudies/ecommerce-jewelry-photo-editing-case-study.jpg",
    "description": "Photograph Editing assumes a tremendous part in the marking and showcasing of an adornments business. The altering emphatically affects the photos that the organizations use for something very similar. One of the fundamental targets of Jewelry Photo Editing Services",
    "docLink": "https://zphotoedit.com/case-study/jewellery-photo-editing.pdf"
  },
  {
    "id": 4,
    "title": "ALL TYPES OF REAL ESTATE IMAGES",
    "image": "/images/services/service-inner/casestudies/real-estate-hdr-image-blending-services-case-study.jpg",
    "description": "ZPhotoedit has helped a ton of industry verticals identified with photography, land, media distribution, and so forth to change the normal or dull looking pictures into extraordinary quality. Having broad involvement with photograph correcting",
    "docLink": "https://zphotoedit.com/case-study/real-estate-images.pdf"
  },
  {
    "id": 5,
    "title": "FOOD IMAGE EDITING",
    "image": "/images/services/service-inner/casestudies/image-enhancement-food-photo-editing-portfolio-4-case-study.jpg",
    "description": "One normal error that individuals frequently make is overlooking the significance of food photograph altering and upgrade. An ineffectively situated, hazy, or gloomy photograph will kill your clients' state of mind. Accordingly, when you need to feature the best",
    "docLink": "https://zphotoedit.com/case-study/food-image-editing.pdf"
  },
  {
    "id": 6,
    "title": "ECOMMERCE PRODUCT IMAGE EDITING",
    "image": "/images/services/service-inner/casestudies/ecommerce-product-photo-editing-services-case-study.jpg",
    "description": "The customer is the proprietor of an online way of life store that offers various items like garments, adornments, frill, footwear, magnificence and wellbeing items, hardware, sheets and draperies, furniture and so forth",
    "docLink": "https://zphotoedit.com/case-study/ecommerce-product-image-editing.pdf"
  }
]

export default function WatermarkRemovalServices() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Watermark Removal Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-watermark-removal-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Watermarks are used by many businesses and organizations to safeguard their photos and documents against unlawful usage. A watermark is a word or logo placed on top of a picture that primarily identifies the image's owner. It assists them in preventing their picture from being utilized by someone who does not have permission to do so. It's mainly used to safeguard your copyright. However, if the owner has a new logo on the image as a watermark, the owner may need to change the existing one.</p>

                <p>Placing a watermark is now a simple operation, but removing a watermark from a photograph might be difficult. It is why individuals and businesses choose to outsource <strong>Digital Photos watermark removal</strong> to picture editing service providers.</p>

                <p>Tech2Globe has been providing <strong>Watermark Removal Services in India</strong> for many years. We have a professional staff that specializes in removing watermarks from photographs. Following the watermark removal process, we will supply you with a clean and beautiful image.</p>

                <p>We provide an <strong>Image Watermarking Service</strong> for all images shot by photographers and any photos that businesses may require. We have divided our customized services into numerous categories that will meet your requirements.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Watermark Removal Process</h2>
                <p>For your convenience, we've simplified the complicated procedure of <strong>Product Watermark removal</strong> and image enhancement. But one must not be fooled by its simplicity; it's time-consuming, complex, and demands experience and meticulous attention to detail.</p>

                <p><strong>Correct Pixels Extraction</strong> The watermark Pixels from the region around the watermark are retrieved and blended into the watermark pixels using polynomial blending.</p>

                <p><strong>Getting Rid Of The Watermark</strong> The sample is applied to a very tiny watermark region that is immediately adjacent to the picture. On a pixel-by-pixel basis, steps 1 and 2 are repeated.</p>

                <p><strong>Using A Healing Brush</strong> The Healing Brush or the Airbrush tool is used to erase stains, spots, and other imperfections. To get the most outstanding results, we change the brush size and hardness.</p>

                <h4>Industries We Serve</h4>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <p className="mb-0"><FaHandPointRight /> Studios and Photographers</p>
                    <p className="mb-0"><FaHandPointRight /> Artists</p>
                    <p className="mb-0"><FaHandPointRight /> Stock Photo Agencies</p>
                    <p className="mb-0"><FaHandPointRight /> Online Ad Agencies</p>
                    <p className="mb-0"><FaHandPointRight /> Catalog Services</p>
                    <p className="mb-0"><FaHandPointRight /> Fashion Stores</p>
                    <p className="mb-0"><FaHandPointRight /> Home Appliances</p>
                    <p className="mb-0"><FaHandPointRight /> Jewelry Stores</p>
                    <p className="mb-0"><FaHandPointRight /> Luxury Watches</p>
                    <p className="mb-0"><FaHandPointRight /> Hotels and Resorts</p>
                    <p className="mb-0"><FaHandPointRight /> Amusement Parks</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <p className="mb-0"><FaHandPointRight /> Sports Equipment and Toys</p>
                    <p className="mb-0"><FaHandPointRight /> Baby Products</p>
                    <p className="mb-0"><FaHandPointRight /> Antiques</p>
                    <p className="mb-0"><FaHandPointRight /> Electronic Products</p>
                    <p className="mb-0"><FaHandPointRight /> Furniture</p>
                    <p className="mb-0"><FaHandPointRight /> Cars & Automotive Components</p>
                    <p className="mb-0"><FaHandPointRight /> Medical Equipment</p>
                    <p className="mb-0"><FaHandPointRight /> Real Estate Agencies</p>
                    <p className="mb-0"><FaHandPointRight /> Tour and Travel Services</p>
                    <p className="mb-0"><FaHandPointRight /> eCommerce Platforms</p>
                  </div>
                </div>


              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Tech2Globe?</h4>
                <p>Our staff believe in building healthy relationships with our clients by establishing trust. The following are some of the aspects that distinguish us as a Product Watermark removal service provider:</p>

                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                  {/* Accordion 1 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`${Style.AccordionButton} accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Adaptable Experience
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We have experts in various fields, including e-commerce, news media, printing and publication, art galleries, real estate, television production, and advertising. Overall, our experience in many sectors aids us in giving efficient services to our clients.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                         Industry Trends At The Moment
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Our editors provide cutting-edge solutions by utilizing cutting-edge technology and techniques. We can provide outstanding solutions for our valued clients because we keep up with the current trends.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Work That Is Neat And Tidy
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Our team of professional image editors always guarantees traceless <strong>Digital Photos watermark removal</strong>. Whether you need our services for a single photo or a large batch, we can handle it all with ease. We remove watermarks with the most up-to-date automated and manual technologies available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 4 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                         A Dependable Group
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Removing a watermark can be time-consuming, especially if the watermark is difficult to erase. However, at Tech2Globe, we have experienced experts on hand to work with even the most challenging photographs. Our professionals do these jobs with extreme caution and produce outstanding results.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Accordion 5 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                         The Shortest Possible Turnaround Time
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We provide our clients with the best response time. Our staff dedicates themselves to meeting our clients' deadlines. Punctual project delivery instills a sense of importance in each customer and aids in the seamless operation of our commercial relationships.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 6 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Packages At A Reasonable Price
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We're well-known in the picture editing sector for offering excellent <strong>Watermark Removal Services</strong> in India at low prices. Our cost-effective services are accessible for projects of all sizes, from a few photographs to a large volume worldwide. To obtain a good sense of our cost, you may request a quote from us. We are confident that our pricing is unbeatable.
                        </p>
                      </div>
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

      <div className="PhotoEditPortfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

    </>
  )
};
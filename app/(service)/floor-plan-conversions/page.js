import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Floor Plan Conversion Services by The 2D3D Floor Plan Company | Tech2gobe",
  description:
    "Floor Plan Conversion Services Floor plan conversion services are essential like real estate photo editing services in a real estate business.",
  keywords:
    "residential, apartment, multi unit housing, private house, student housing, architecture, architecture news, architecture design,",
  openGraph: {
    title: "Floor Plan Conversion Services by The 2D3D Floor Plan Company | Tech2gobe",
    description:
      "Floor Plan Conversion Services Floor plan conversion services are essential like real estate photo editing services in a real estate business.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/floor-plan-conversions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floor Plan Conversion Services by The 2D3D Floor Plan Company | Tech2gobe",
    description:
      "Floor Plan Conversion Services Floor plan conversion services are essential like real estate photo editing services in a real estate business.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/floor-plan-conversions",
  },
};

const pageHeaderData = {
  title: "Floor Plan Conversions",
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
  { id: 1, name: "Real Estate Image Processing", path: "/real-estate-image-processing" },
  { id: 2, name: "Post-Processing Of Real Estate Images", path: "/post-processingof-real-estate-images" },
  { id: 3, name: "Real Estate Day To Night Conversion Services", path: "/real-estate-day-to-night-conversion-services" },
  { id: 4, name: "Real Estate Photo Enhancement", path: "/real-estate-photo-enhancement" },
  { id: 5, name: "Real Estate Panoramas", path: "/real-estate-panoramas" },
  { id: 6, name: "Real Estate 360 Degree Virtual Tours", path: "/real-estate-threesixty-degree-virtual-tours" },
  { id: 7, name: "Floor Plan Conversions", path: "/floor-plan-conversions" },
  { id: 8, name: "Sky Replacement Services", path: "/sky-replacement-services" },
  { id: 9, name: "Real Estate Photo Blending Services", path: "/real-estate-photo-blending-services" },
  { id: 10, name: "Real Estate HDR Image Blending", path: "/real-estate-HDR-image-blending" },
  { id: 11, name: "2D/3D Floor Plan Conversions", path: "/twodthreed-floor-plan-conversion" },
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
        img: "/images/services/service-inner/portfolio/floor-plan-conversions-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/floor-plan-conversions-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/floor-plan-conversions-portfolio-3.jpg",
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


export default function FloorPlanConversions() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Floor Plan Conversions" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/floor-plan-conversions-service.jpg" />
              <div className={Style.ContentDiv}>
                <p>The floor plans are something that real estate purchasers check for in addition to the photographs of the actual house. Although the property photographs piqued the buyer's interest to some level, basic information such as room sizes, how rooms are planned out in a plan, how living spaces relate to one another, and so on are only given through complex floor plans. While technology has grown significantly in recent years, allowing real estate agents and marketing experts to present various facts to their clients online, there is always something lacking - a physical glance at a home's layout and size.</p>

                <p>Even if your real estate website has photos of the bedrooms, living room, kitchen, garage, gardens, and other areas, it will be incomplete without floor plan photographs. Furthermore, producing floor plans in 3D or 2D has the benefit of being more aesthetically appealing and better comprehending the basic floor plan. Tech2Globe's real estate floor plan conversion services allow you to display a precise space layout of your property. With our innovative, dynamic, and fascinating 2D and 3D house plan conversion services, we help your listings stand out and sell faster.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Our Floor Plan Conversion Services</h4>
                <p>The 3D and 2D floor plan design services offered by Tech2Globe cater to a wide range of industry and user needs. The perfect floor layout may make a massive difference for a buyer looking at houses. Floor layouts build confidence in consumers, especially in a world where physical viewing is often seen as uncomfortable or inconvenient. It saves both the buyers and the sellers time. Our team uses layouts for reinforcing the potential value of your property and increasing its perceived value among buyers.</p>

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
                        Remodeling A Floor Plan
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
                          Our professionals use existing layouts and images to re-create precise, aesthetically appealing copies through various innovative floor plan development and conversion services to help you attract buyers and improve their real estate shopping experience.
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
                        Converting Floor Plan Formats
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
                          We extract the relevant information and build a more aesthetically beautiful and compelling duplicate of the floor plan in your desired format, regardless of the original floor plan format you give. We also improve current designs with more creative contributions in our real estate <strong>floor plan conversion services.</strong>
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
                        Floor Plans That Can Be Interactive
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
                          Our experts can provide you with real estate floor plans so that your purchasers can engage with them. With simulations, animations, and enhanced design, we ensure that our designs entice and hold the attention of your potential consumers.
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
                        Floor Plans With 360-Degree Views
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
                          We can generate 360-degree designs in addition to 2D to 3D floor plan conversions. These creatives present a thorough perspective of the property and guarantee that the floor plan answers all of your consumers' inquiries.
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
                        2D Floor Plan Conversion
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
                          Tech2Globe's 2D floor plans encompass everything a potential customer may anticipate from your models. Our professionals can develop 2D floor plan pictures to scale, import, and enhance existing 2D designs or construct a floor plan from scratch. You obtain results tailored to your business demands when you outsource <strong>house plan conversion services</strong> to the Tech2Globe team. Furthermore, our team offers exceptional support and efforts to attract buyers with the help of creative touch to the 2D floor plan conversion process, and hence, transforming your concepts into a showcase to meet the buyer's aesthetic goals. We provide 2D to 3D <strong>floor plan conversion services</strong> in addition to developing a comprehensible 2D floor plan. It improves your chances of conversion by giving your consumers a better property viewing experience.
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
                        3D Floor Plan Conversion
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
                          Our 3D <strong>house plan conversion services</strong> produce a realistic depiction that allows purchasers to study a property's model without having to visit it in person. We create high-quality 3D floor plans that provide customers with a clear picture of the layout and a pleasant impression of the space and its size. Our 3D <strong>floor plan conversion services</strong> produce a realistic depiction that allows purchasers to study a property's model without having to visit it in person. We create high-quality 3D floor plans that provide customers with a clear picture of the layout and a pleasant impression of the space and its size.
                        </p>
                      </div>
                    </div>
                  </div>




                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe For Floor Plan Conversion?</h4>
                <p>We assist you in <strong>Floor Plan Creation from Sketches/Photographs/CAD File</strong> into 2D and 3D at the most inexpensive pricing, in the safest and trustworthy manner, and with the most satisfactory outcomes. With comprehensive real estate <strong>floor plan conversion services</strong> from Tech2Globe, you can empower your company and drive it to new heights of success. Contact us if you have any questions or would like an estimate for <strong>house plan conversion services</strong>.</p>
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

      <div className="PhotoEditPortfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
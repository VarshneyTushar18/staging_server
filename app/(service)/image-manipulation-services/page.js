import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Image Manipulation Service | Online Photo Manipulation Services | Tech2globe",
  description:
    "Image manipulation services for photographers from $25 per image. If you need a head replacement or any creative photo manipulation services.",

  keywords:
    "image manipulation online,photo manipulation online,photo manipulation services",

  openGraph: {
    title:
      "Image Manipulation Service | Online Photo Manipulation Services | Tech2globe",
    description:
      "Image manipulation services for photographers from $25 per image. If you need a head replacement or any creative photo manipulation services.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/image-manipulation-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Image Manipulation Service | Online Photo Manipulation Services | Tech2globe",
    description:
      "Image manipulation services for photographers from $25 per image. If you need a head replacement or any creative photo manipulation services.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/image-manipulation-services",
  },
};

const pageHeaderData = {
  title: "Image Manipulation Services",
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
  { id: 1, name: "Image Clipping", path: "/image-clipping" },
  { id: 2, name: "Photo Cutout Services", path: "/photo-cutout-services" },
  { id: 3, name: "Clipping Path Services", path: "/clipping-path-services" },
  { id: 4, name: "Image Tracing Services", path: "/image-tracing-services" },
  { id: 5, name: "Hair Masking Services", path: "/hair-masking-services" },
  { id: 6, name: "Image Manipulation Services", path: "/image-manipulation-services" },
  { id: 7, name: "Car Image Clipping", path: "/car-image-clipping" },
  { id: 8, name: "Image Masking Services", path: "/image-masking-services" },
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
        img: "/images/services/service-inner/portfolio/image-clipping-image-manipulation-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-manipulation-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-manipulation-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-manipulation-portfolio-4.jpg",
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

export default function ImageManipulation() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Manipulation Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-image-manipulation-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Do you want to improve the appearance of your photographs by modifying and editing them? Do you want to increase the quality of your photographs? Are you seeking a reputable picture manipulation firm to outsource your photo modification services to? If that's the case, you are in luck since we provide highly skilled photo manipulation services. Tech2Globe is a renowned picture modification service provider with a global clientele. When you outsource digital photo manipulation services to us, you can expect to receive top-notch services because of our affordable photo manipulation services. Our several years of experience can help you to get the best results possible.</p>

              </div>

              <div className={Style.ContentDiv}>

                <h4 className="pt-3">Our Image Manipulation Services</h4>

                <p>Our <strong>Photo Manipulation Services</strong> at Tech2Globe use complex image manipulation techniques to edit a photograph by adding objects, people, or items in the background or foreground. Our Photoshop image alteration and digital <strong>Photo Manipulation Services</strong> may make a variety of adjustments.</p>

              </div>


              <div className={Style.ContentDiv}>

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
                        Cinematographic Effects
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
                          Our professional editors can combine many photographs together to create a looping sequence, resulting in visually pleasing loop shots. With our cinemagraph, you will be able to show off photos in which a tiny section of the image is intended as a moving image. We can improve the visuals of your product or service to pitch to customers through digital marketing campaigns strategy.
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
                        Photo Color Correction Services For Photographs
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
                          With our expert <strong>photo color correction services</strong>, we can make your images seem more natural and appealing. While traditional color correction entails modifying numerous aspects of an image, we go above and beyond to improve the visual of your pictures by manipulating colors. We use the most up-to-date color grading techniques to produce balanced saturation, curves, and solid color fills.
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
                        Photo Retouching Services
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
                          With Tech2Globe's picture repair services, you can give your photographs a life. Because our photo correction experts will make your items and services seem sharp in the completed image to entice shoppers and potential clients, this service will be highly beneficial to marketers and e-commerce enterprises. We provide background removal, raster to vector conversion, clipping path service, picture masking, and much more as part of this service package.
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
                        Services For Creating Photo Collages
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
                          Tech2Globe provides high-quality photo collage-making services that include unique templates and layouts that allow you to remix and embellish your photographs to your liking. Once you have sent us your images, our editors will build a magnificent collage based on your directions, whether it's for a personal present or office decor.
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
                        Photo Density & Color Correction
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
                          Photographers rely on our picture density and color correction to produce a professional finish when processing images for public exhibition. Our editors will correct all the technical flaws such as insufficient lighting, sharpness, or contrast. We can also repair old and faded photographs to a near-original state.
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
                        Brightness and Contrast Enhancement
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
                          A well-presented photograph must have ideal brightness and contrast to communicate the information without allowing space for interpretation. Our picture editing experts will adjust brightness and contrast with advanced editing tools to create a distortion-free image.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 7 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Creative Photo Manipulation Services
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We don't just conduct standard photo retouching. Tech2Globe features pros and artists that can modify images with a splash of originality. We can provide finished photographs exactly how you want them. Therefore, we employ that capability to deliver photo alteration services.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Should You Work With Tech2Globe?</h4>
                <p>When you engage expert photo editors with years of experience like those at Tech2Globe, you can be confident that the <strong>Photo Correction Services</strong> will be completed on time. We don't simply do touch-ups with our processed photographs; we add the wow factor. Even though our services exceed your expectations and industry norms, our charges are very affordable.</p>

                <p>Adobe Photoshop CS and CC, Jasc PaintShop Pro, Kodak's Digital ICE technology, and plug-ins like light machine and color washer are the latest and most powerful software tools we utilize. We can deliver results in various formats, including JPEG, TIFF, PSD, CDR, BMP, and others. We offer help 24*7 with the quickest response time possible.</p>
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
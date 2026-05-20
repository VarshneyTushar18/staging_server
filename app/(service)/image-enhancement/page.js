import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Outsource Digital Image Enhancement Services in Bulk",
  description:
    "Outsource digital image enhancement services in bulk with Tech2Globe. Get professional, fast, and accurate image editing solutions for your business.",

  openGraph: {
    title: "Outsource Digital Image Enhancement Services in Bulk",
    description:
      "Outsource digital image enhancement services in bulk with Tech2Globe. Get professional, fast, and accurate image editing solutions for your business.",
    url: "https://www.tech2globe.com/image-enhancement",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Digital Image Enhancement Services in Bulk",
    description:
      "Outsource digital image enhancement services in bulk with Tech2Globe. Get professional, fast, and accurate image editing solutions for your business.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/image-enhancement",
  },
};

const pageHeaderData = {
  title: "Image Enhancement",
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


export default function ImageEnhancement() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Enhancement" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-main.jpg" />
              <div className={Style.ContentDiv}>
                <p>Are you happy with the way your images look? Do you think you need to improve the quality of your photos? If this is the case, an image enhancement service is an excellent way to get your photos processed by a professional. Tech2Globe is a renowned image enhancement company that can help you bring your images to life. Our experts have years of expertise in picture editing and enhancement, and they have exactly the perfect amount of innovative solutions for each image. Tech2Globe provides top <strong>Professional Photo Enhancement services in bulk</strong> on time and within your budget, thanks to the combination of innovative equipment and specialized services.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>Services For Professional Image Enhancement</h2>
                <p>We have a one-of-a-kind blend of technological infrastructure, bespoke solutions, and devoted resources to function effectively. This combination of tactics, technology, and subtlety allows us to deliver the desired results while keeping within your budget and timeline.</p>
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
                        Culling
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Send us your photo albums, and we will pick and organize a collection of the most incredible images. When you outsource digital photo enhancement services to our team, you get one of the most basic services.
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
                        Color Correction
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Color correction is one of the first changes we conduct when you outsource picture improvement services to us. We match the total range, white balance, color temperature, exposure, saturation, contrast, and vibration to your chosen style and theme.
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
                        Cropping An Image
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          With our <strong>image cropping & resizing</strong> picture editing services, we provide you with the ideal frame and remove distractions that lay along the shot's horizons while ensuring that nothing important is lost.
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
                        Background Editing
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Transform your photographs with specific, high-end background enhancement, retouching, extension, manipulation, and aesthetic transformation by outsourcing <strong>digital image enhancement</strong> services to our team.
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
                        Spots
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Easily remove blemishes, scars, acne, stains, light spots, skin tone variances, patches, and other imperfections from all of your images. You can outsource all forms of spot correction and removal services to our team of <strong>digital image enhancement</strong> experts.
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
                        Unruly Hair
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          The most apparent disruptors are stray hairs and other variables such as lacking luster or too much shine. Our <strong>Photoshop image enhancement services</strong> remove stray hairs, smooth the ends, and give the hair the proper tone and gloss.
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
                        Wrinkles
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Our online <strong>graphics enhancement</strong> procedure takes a unique approach when working with wrinkles in photos. Instead of entirely removing wrinkles and producing a fake smoothness, we meticulously strive to make wrinkles less noticeable and the skin tighter, giving the images a natural, ageless appearance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 8 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Glare
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Unintentional glare is a common problem in portraits, landscapes, close-ups, and even panoramas. We employ various photo editing tools and techniques to eliminate glare from a photo or the subject's eyes, face, and backdrop.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 9 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        Shadows
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We eliminate unsightly shadows of people or items from photos as part of our picture editing services. At the same time, our photo editors are skilled at manipulating and blending shadows throughout an image to achieve a variety of styles and effects.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 10 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        People & Objects
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionSection1"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Do you require a different background or want help <strong>removing unwanted objects</strong> that don't fit your aesthetics or theme? We are here to help you. You will get smooth cutting, merging, and blending results when you outsource picture enhancement services to us.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Us?</h4>
                <p>We have years of expertise with the numerous firms we have successfully served worldwide, or the highly scalable and flexible outsourcing models we provide our clients. You can request a sample to see how valuable outsourcing <strong>photoshop image enhancement services</strong> to us may be for your company. A free, risk-free sample of any of your images will speak volumes about our experience and skills.</p>

                <p>We don't simply do touch-ups with our processed photographs; we add the wow factor to it. Even though our services exceed your expectations and industry norms, our charges are very affordable. We can provide results in various file formats, including JPEG, TIFF, PSD, CDR, BMP, and others.</p>

                <p>We offer 24*7 help with the quickest response time possible. We protect your data throughout storage, transfer, and processing and keep it private. Before each image is delivered, our quality assurance team examines it to get the best quality possible.</p>
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

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
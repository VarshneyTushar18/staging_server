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
  title: "360 Panorama Photo Stitching Services - Tech2Globe",
  description:
    "Tech2Globe offers professional 360 panorama photo stitching services. Transform your images into immersive experiences with our expert solutions.",
  openGraph: {
    title: "360 Panorama Photo Stitching Services - Tech2Globe",
    description:
      "Tech2Globe offers professional 360 panorama photo stitching services. Transform your images into immersive experiences with our expert solutions.",
    siteName: "Tech2Globe",
    url: "https://www.tech2globe.com/threesixty-panorma",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/threesixty-panorma",
  },
};

const pageHeaderData = {
  title: "360° Panorama",
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
  { id: 1, name: "Bulk Image Conversion", path: "/bulk-image-conversion" },
  { id: 2, name: "Photoshop Services", path: "/photoshop-services" },
  { id: 3, name: "Lightroom Services", path: "/lightroom-services" },
  { id: 4, name: "Car Image Clipping", path: "/car-image-clipping" },
  { id: 5, name: "Video Editing", path: "/video-editing" },
  { id: 6, name: "360° Panorama", path: "/threesixty-panorma" },
  { id: 7, name: "Virtual Staging", path: "/virtual-staging" }
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
        img: "/images/services/service-inner/portfolio/special-service-360-panorama.jpg",
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

export default function ThreesixtyPanorama() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Threesixty Panorma" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/special-service-360-panorama.jpg" />
              <div className={Style.ContentDiv}>

                <p>If you're a hotelier, realtor, freelance photographer, or have your own studio and want to promote your business or property; the 360-degree Photoshop Image Stitching panoramic experience can significantly impact potential buyers. Panorama picture stitching combines standard-sized photographic photos to create a seamless panorama image. Your customer is able to browse the site with a 360-degree viewing angle visually and you will also be able to help them distinguish minor characteristics of the assets.</p>

                <p>We have been delivering quality <strong>360 panorama stitching services</strong> to consumers worldwide for years at Tech2Globe. We offer a cost-effective stitching solution in high quality since we have an ultra-modern set-up in the form of current image editing software and a staff of skilled and highly trained 360 panorama photo stitching professionals. We make attractive <strong>virtual reality pictures</strong> from many shots of the place or location using powerful Photoshop photo and image stitching techniques.</p>

                <p>You may let your visitors live it and have an immersive experience using our <strong>360 panorama services</strong>.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Virtual Tour Creation Services</h2>

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
                        Fisheye Stitching
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
                          Fisheye photos are wide-angle slanted shots of a scene that appear distorted when taken for the first time. We used Photoshop to stitch together numerous fisheye photographs to create amazing wide-angle fisheye images.
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
                        HDR Panorama Stitching & Enhancement
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
                          We create a high-resolution panoramic image by combining many low-resolution photographs taken from various viewpoints of the same scene at various exposure settings.
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
                        Services For Creating 3D Virtual Tours
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
                          Generating the <strong>3D model of a product</strong> is a complicated procedure in which photographs are calibrated and twisted to match precisely, then blended to remove noticeable blurring, foreign objects, and trimmed to give the whole combination of the property image a cohesive look. The complex picture stitching programs, such as 3D Vista, PTGui, and others, may then be used by our team to produce a <strong>360° virtual tour</strong>.
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
                        Cylinder (Inner And Outer) Panorama
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
                          There are three types of cylindrical panoramas: oblique, vertical, and horizontal. We render photographs in a panoramic form that is most appropriate for the scenario using powerful panorama stitching algorithms.
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
                        Services For 360° Photo Stitching
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
                          Several overlapping views are blended into a single image with no trace of the numerous original photos or evidence of stitching.
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
                        Panorama Image For Hotels
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
                          Hoteliers can better sell their products by giving their customers the virtual experience of exploring exteriors, interiors, and landscapes using panorama image services. We provide high-quality <strong>360 panorama stitching services</strong> for hotels to display panoramas of outdoor and internal amenities. It will aid in enhancing prospective hotel and hospitality client interaction and footfall.
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
                        Store Panorama Stitching
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
                          High-quality shop panoramic photographs are necessary to show potential consumers the many departments and items.
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
                        Panorama Of A Scenic Spot
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Scenic locations, beaches, tourist attractions, holiday resorts, and ski resorts are beautifully captured and displayed in wide-angle panoramic photographs. If you're a landscape or wedding photographer, our scenic location panoramic stitching services can make your panoramas ideal in every aspect. Our editors will expertly combine photographs captured with a wide-angle lens together to give your clients a dreamlike experience of the gorgeous location.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 8 */}
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
                        Panoramas Of Real Estate
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Renters and purchasers want to see the entire property without personally visiting it, from single-family homes to large multi-family buildings and other commercial constructions. To successfully sell and transfer homes, real estate agents and photographers must provide high-quality <strong>Virtual Reality Pictures</strong> of the outside and inside of the house that allows potential buyers to rotate the image in 360 degrees and examine the image in depth. We can produce composites, panoramic panels, and other things as a top 360-degree panorama picture stitching service provider to give customers a larger view and help them visualize the property in ways that other kinds of photography can't.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p className="mb-0"><FaAngleRight /> Highest quality services with a track record of success.</p>
                <p className="mb-0"><FaAngleRight /> An expert team offering image editing and stitching services with years of experience.</p>
                <p className="mb-0"><FaAngleRight /> On-time project delivery, regardless of project volume (low or massive).</p>
                <p className="mb-0"><FaAngleRight /> Robust infrastructure for delivering high-quality solutions promptly.</p>
                <p className="mb-0"><FaAngleRight /> Client brainstorming sessions to correctly identify their demands.</p>
                <p className="mb-0"><FaAngleRight /> We provide high-end services at the most affordable costs.</p>
                <p className="mb-0"><FaAngleRight /> Large-scale and batch initiatives require scalable infrastructure.</p>
                <p className="mb-0"><FaAngleRight /> Data security and privacy are ensured. broadband and wireless.</p>
                <p className="mb-0"><FaAngleRight /> There will be no data or image quality loss with the most recent software.</p>
                <p className="mb-0"><FaAngleRight /> Image support in a variety of formats.</p>
                <p className="mb-0"><FaAngleRight /> Client Support is available 24*7 through a designated single point of contact.</p>
                <p className="mb-0"><FaAngleRight /> Quickest response time, turnaround time, and throughput.</p>
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
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
  title: "#1 Food Photography Editing Service | Online Food Retouching Service",
  description:
    "Professional food photography editing service from $5 per image. If you want to make your food photos delicious-looking, refer to our food photo retouching service",
  keywords: "",
  openGraph: {
    title: "#1 Food Photography Editing Service | Online Food Retouching Service",
    description:
      "Professional food photography editing service from $5 per image. If you want to make your food photos delicious-looking, refer to our food photo retouching service",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/food-photo-editing-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Food Photography Editing Service | Online Food Retouching Service",
    description:
      "Professional food photography editing service from $5 per image. If you want to make your food photos delicious-looking, refer to our food photo retouching service",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/food-photo-editing-services",
  },
};

const pageHeaderData = {
  title: "Food Photo Editing Services",
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
        img: "/images/services/service-inner/portfolio/image-enhancement-food-photo-editing-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-food-photo-editing-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-food-photo-editing-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-food-photo-editing-portfolio-4.jpg",
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


export default function FoodPhotoEditing() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Food Photo Editing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-food-photo-editing-services.jpg" />
              <div className={Style.ContentDiv}>
                <p>Professional food photography is one of the most exciting landscapes in photography today while being relatively new to the scene. To captivate clients, gain better word of mouth, and sell their products, restaurants, supermarkets, food retail outlets, bloggers, and even Instagram influencers require high-quality taken and edited food images nowadays. In addition, with the rapid expansion of smartphones and social media sites, one must consider the shifting trends. Therefore, professional food photography is necessary for a successful business, and professional food picture editing services may assist in this endeavor.</p>
                <p>If you are beginning with food photography and want to make an impression on your clients, you could outsource food image editing services to us at Tech2Globe. Our talented food picture editing team can create unique adjustments to save you the time and effort for editing a significant number of photos. You will be able to concentrate on your photography company this way. Our team has modified over a million photographs. We have been in business as a prominent food photo-editing firm for a long time. As a result, you can anticipate a speedier response time for all of your food photo editing needs.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>What Are The Benefits Of Food Photography Editing?</h2>
                <p>People are mostly fond of food and different dishes, and due to the accessibility of the internet, they usually stick to what seems attractive to them. As a result, a skilled food photographer will frequently use his photographic abilities to explore the abstractness and originality of food.</p>

                <p>Food photography can help your business reach new heights. The more clear and attractive the photography is, the more consumers will be attracted to your business. You can easily advertise your signature platters and dishes with the help of best food photography editing services.</p>

                <p>A well-presented food photograph will draw consumers to your client's establishment. But, aside from that, food photography editing helps in the following ways:</p>

                <p><strong>Customers' Trust Is Increased</strong> We can make your images stand out from others by making the images look more authentic and appealing if you opt to outsource food image editing services. This can help to increase the visitors' trust in you as they find your website more genuine and reliable.</p>

                <p><strong>It Gives Life To Your Brand</strong> Visual marketing consistently outperforms other types of marketing. With our food photo editing services, you can confidently boost and sell your business, at the same time increasing the visibility of your brand.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Services</h4>
                <p>People frequently make the mistake of overlooking the value of food photo editing and improvement. For example, a poorly positioned, grainy, or gloomy photo will detract your clients attention. This can be solved if you contact our professional food photo editing firm and want to present the finest of the food images with the perfect blend of creativity, such as the proper balance of color, saturation, and so on. Our food picture editing professionals at Tech2Globe have years of experience delivering quality food photo editing services.</p>
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
                        Color Correction For Food Photographs
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
                          The appropriate color combination is essential for highlighting the brand's USP. If you're working with a customer who owns a traditional eatery, you'll also need to pay attention to the lighting and backdrops. You'll need subtle things to pop up in the shot in this situation. Color correction can help with all of these things. Our food picture editing services at Tech2Globe can handle all of your <strong>Food Photo Color Correction</strong> needs.
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
                        Food Recipes Editing
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
                          Regardless of how good the food on your clients' menu is, few people will not order if the visual is unappealing. This situation can be avoided by taking our food photo editing services to make the color pop or increase the contrast, and make the visuals more eye-catching. <strong>We can alter food recipes in the following ways:</strong><br/>
                          <ul>
                            <li>Make the food's color brighter.</li>
                            <li>Increase the contrast.</li>
                            <li>Remove unnecessary elements.</li>
                            <li>Fix the backdrop, and so forth.</li>
                          </ul>
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
                        Food Photo Cropping
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
                          A well-cropped photo will leave a lasting impression on the customer's mind. Additionally, if the food shot is appropriately cropped, it will lure the onlookers. Therefore, our food picture editors may trim the images and focus on the most significant parts in the most subtle way possible.
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
                        Color Grading & Retouching Of Food Photos
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
                          Our experts may work on the photographs' saturation, contrast, and colors using color grading. They are the experts of Adobe Photoshop and Adobe Lightroom and very well know how to utilize them to make the necessary alterations to the photos/images.
                        </p>
                      </div>
                    </div>
                  </div>



                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Us?</h4>
                <p>At Tech2Globe, we believe in providing our clients with the most outstanding picture editing services possible while consistently improving our infrastructure to meet their needs. We know how unique food photographs can help you stand out from the crowd.</p>
                <p>Contact us to discover more about our services and how we can assist you with the best possible food picture editing.</p>
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
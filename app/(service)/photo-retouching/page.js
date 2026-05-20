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

export const metadata = {
  title: " Photo Retouching | Retouch Photos Online for Free | Tech2globe ",
  description:
    "Tech2Globe offers professional photo retouching services. Transform your images online for free with our expert retouching solutions.",
  keywords: "",
  openGraph: {
    title: "Photo Retouching | Retouch Photos Online for Free | Tech2globe ",
    description:
      "Tech2Globe offers professional photo retouching services. Transform your images online for free with our expert retouching solutions.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/photo-retouching",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Retouching | Retouch Photos Online for Free | Tech2globe ",
    description:
      "Tech2Globe offers professional photo retouching services. Transform your images online for free with our expert retouching solutions.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/photo-retouching",
  },
};

const pageHeaderData = {
  title: "Photo Retouching",
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
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-retouching-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-retouching-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-retouching-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-retouching-portfolio-4.jpg",
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

export default function PhotoRetouching() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Photo Retouching" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-photo-retouching-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>The e-commerce sector is based on visuals, and it depends mainly on billions of photographs and images that have been meticulously taken and processed to entice buyers. Millions of customers go online nowadays to window shop and buy things. Individuals are making impulsive decisions based only on how the object seems in the photograph. To attract such users, businesses and merchants must develop higher-quality photographs faster to keep their online product catalogs fresh and make more sales.</p>

                <p>For marketing objectives, images are frequently modified and changed, as this is an inventive and creative technique to reach out to your target audience. You've come to the correct spot if your company needs <strong>high-end photo retouching services</strong> or if your portrait studio needs hundreds of photographs edited in a short amount of time.</p>

                <p>Tech2Globe has been delivering <strong>high-end photo retouching services</strong> to international portrait studios, organizations, publications, professional photographers, and others for many years. Our highly skilled photo editors are experts in using the most up-to-date  <strong>photoshop photo editing and retouching</strong> software and can deliver high-quality services to meet the needs of our clients.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">The Photo Retouching Services Of Tech2Globe</h2>
                <p>Photo retouching is a time-consuming procedure that necessitates both ability and competence on the part of the photo editor. We can retouch your digital photos to give them a more defined look while also adding the precise aesthetic you want. JPEG, PSD, TIFF, GIF, PNG, PGF, RAW, and other image file types are the formats we deal with.</p>

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
                        Photo Retouching For Products
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
                          The product <strong>photo retouching services</strong> offered by Tech2Globe provide you an advantage over competing e-commerce companies. Our services may assist you in resolving lighting issues, removing backdrops, and improving the product's marketability.
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
                        Retouching A Portrait
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
                          <strong>Retouch portrait photos</strong> with our services. Our experts ensure that the images appear natural and genuine. We are well-versed in creating professional-looking shots without airbrushing, which gives portrait photos a plastic aspect.
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
                        Retouching Of Real Estate Photographs
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
                          Our real estate image retouching services give your real estate photographs a welcoming environment, adequate lighting, and precise scale, all of which are sure to attract property searchers. We aim to eliminate camera faults and make structural photographs appear genuine.
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
                        Retouching For Commercial Photography
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
                          We protect your brand identity and reputation with our commercial photographic retouching services. Our photo editors work with location photos and corporate headshots to maintain a professional appearance that promotes your brand.
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
                        Amateur Photo Retouching
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
                          Our crew also works with amateur photographers, providing picture editing assistance. Apart from that, we assist customers in better understanding their cameras and focusing on proper photographic practices.
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
                        Retouching Of Jewelry
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
                          We have a professional staff of editors at Tech2Globe that deal with jewelry photographers and offline and online stores. We use shine enhancement, focus stacking, background removal, scratch removal, and other techniques to repair jewelry photographs.
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
                         Retouching Of Wedding Photos
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
                          At Tech2Globe, our skilled team guarantees that they will preserve your wedding memories in the best possible way. We edit and post-process various types of wedding images, including rehearsal shoots, bridal portraits, and so on.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tech2Globe's Photo Retouching Techniques</h4>
                <p>To get the most excellent retouching results, we at Tech2Globe employ a variety of digital picture retouching processes. Together with our knowledge and expertise in picture editing, these procedures ensure the most pleasing possible results.</p>

                <p><strong>Tintype Restoration</strong> This method removes blemishes and scrapes. It also helps to improve the photo's clarity by brightening the original picture scan.</p>
                <p><strong>Getting Rid Of Mold</strong> Mold removal techniques help in removing molds, improving photo color contrast, and fixing image backdrops.</p>
                <p><strong>Glamor Retouching</strong> This method is mainly utilized for retouching model portfolios. It helps erase imperfections, bring out the color of the hair, and sharpen the original image.</p>
                <p><strong>Restoration And Color Correction</strong> This photo method is used to restore the clarity and quality of fading and old photographs.</p>
                <p><strong>Colorizing Black-And-White Photos</strong> This technique is used to give black and white photos more color and depth.</p>
                <p><strong>Removing The Background</strong> This picture retouching technique alters an image's backdrop, adds a front, enhances, corrects, and reduces color.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Should You Choose Us?</h4>
                <p><strong>Professional Photo Retouching</strong> involves skilled editing and visualization abilities, as well as knowledge of various retouching tools. Our picture retouching experts have expertise working with a variety of marketing and digital publishing firms. They know how to create high-quality photographs in a short amount of time. We save you time, money, and the aggravation of having to hire someone to work on your photos.</p>

                <p>We offer photographs ahead of schedule and with a short turnaround time. We also provide customized <strong>High-end photo Retouching services</strong> depending on the needs of the customer. We have a well-trained staff of photo editors who are skilled in using the most up-to-date picture retouching tools and technology. Our team is capable of handling both minor and significant retouching assignments.</p>

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
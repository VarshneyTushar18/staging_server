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
  title: "Creative Image Masking Services | Tech2globe",
  description:
    "Reimagine your photos and give them a new, improved look with tech2glbe Creative image masking services. Visit our website to find out how it works",
  keywords:
    "image manipulation online,photo manipulation online,photo manipulation services",
  openGraph: {
    title: "Creative Image Masking Services | Tech2globe",
    description:
      "Reimagine your photos and give them a new, improved look with tech2glbe Creative image masking services. Visit our website to find out how it works",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/image-masking-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Image Masking Services | Tech2globe",
    description:
      "Reimagine your photos and give them a new, improved look with tech2glbe Creative image masking services. Visit our website to find out how it works",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/image-masking-services",
  },
};

const pageHeaderData = {
  title: "Image Masking Services",
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
        img: "/images/services/service-inner/portfolio/image-clipping-image-masking-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-masking-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-masking-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-image-masking-portfolio-1.jpg",
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

export default function ImageMaskingServices() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Masking Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-image-masking-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Sometimes there are fuzzy borders or hair parts in an image's backdrop that need to be eliminated. It is simple to accomplish using the picture masking approach. Masking a picture might help you keep some areas of your photos undisturbed while working on other image elements. After a long day of shooting, the last thing you want to do is get down and spend hours photo masking so you can place your photographs on a white backdrop – especially when dealing with undefined borders like hair or fur. You can avoid all this hard work and give a professional company to help you with this with their best <strong>Photoshop Image masking service</strong>.</p>

                <p>Tech2Globe, being one of the prominent picture editing firms, can provide you with quality image masking services at an affordable price. Tech2Globe is the appropriate partner to outsource your <strong>professional image masking service</strong> to having years of expertise, and offering services to big portrait studios, real estate agencies, and other businesses.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Various Types Of Photo Masking</h2>
                <p><strong>Photoshop Image masking service</strong> is divided into several categories based on their difficulty, complexity, and the images' needs.</p>

                <p><strong>Layer Masking</strong>  Using this approach, we can alter the ratio of exposing or blurring areas of an image and modify the opacity of objects depending on the backdrop.</p>
                <p><strong>Alpha Channel Masking</strong>  This approach is beneficial when the backdrop of an image is in a single color, and the background has to be removed. The divided topics are referred to as the alpha channel, and they are preserved separately so that they may be modified at any moment.</p>
                <p><strong>Masking Of Hair And Flesh</strong>  Hair and flesh photoshop masking captures the subject's soft edges to alter the contrast, backdrop, exposure, and other factors in Photoshop. It allows you to alter images of mannequins, outfits, models, birds, and animals.</p>
                <p><strong>Masking Of Objects</strong>  In nature photography, wedding photography, newborn and kid photography, and real estate photography, any undesirable things that do not connect to the subjects may be simply knocked away.</p>
                <p><strong>Refine Edges Image Masking</strong>  A subject in a photograph might have softer edges, thanks to refining edge masking, making it look more natural and lifelike. Edges will be ideally in sync with the backdrop.</p>
                <p><strong>Color Masking</strong>  During the post-color correction process, color masking ensures that empty lines do not divert attention from the image's topic. To achieve perfection, the contrast and exposure are adjusted or fixed.</p>
                <p><strong>Image Masking For Collage Photoshop Collage Masking</strong>  creates new photos from old raw photographs by capturing topics from many images, placing them on a different backdrop, and highlighting and applying other corrections to bring them into focus.</p>
                <p><strong>Masking Transparent Objects</strong>  Images with transparent or translucent topics must preserve their inherent opacity in the new backdrop to seem authentic. Editors ensure that light readily travels through the subjects while retaining contrast when changing the backdrop in Photoshop Transparency Masking.</p>
                <p><strong>Clipping Mask</strong>  The clipping mask is a technique that combines two layers to keep the top layer's opacity or transparency while applying an effect to the bottom layer to make it appear natural.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p>We at Tech2Globe understand that image alteration is a time-consuming procedure that requires ability, enthusiasm, and attention. As a result, we supply the most up-to-date software and technology to our digital picture editors, which has been thoroughly tested for high quality. Our digital imaging professionals are updated on the newest picture editing software and tools regularly.</p>

                <p>Tech2Globe's photo editing experts are innovative and they ensure that all masked photographs have a professional touch. They recognize the value of focusing on the goods you're trying to sell and eliminating distracting backgrounds. You can rest confident that you will receive your finished project within the time frame when you work with Tech2Globe. We <strong>Create Image masking</strong> that suits all your needs.</p>

                <p>Our low-cost <strong>Photoshop Image masking service</strong> will not jeopardize your deadlines or expectations in any way. To ensure that you obtain high-quality services, we adhere to ISO quality standards. We ensure that our picture editors receive frequent training to keep them up to date on the newest image editing tools and technologies.</p>

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
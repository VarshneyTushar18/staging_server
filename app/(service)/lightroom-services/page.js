import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";

export const metadata = {
  title: "Lightroom Editing Services | Tech2globe",

  description:
    "Lightroom services by Flatworld Solutions provide clients with top quality photo editing services at cost-effective prices.",

  keywords: [
    "lightroom",
    "lightroom services",
    "outsource lightroom services",
    "services using adobe lightroom",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/lightroom-services",
  },

  openGraph: {
    title: "Lightroom Editing Services | Tech2globe",
    description:
      "Lightroom services by Flatworld Solutions provide clients with top quality photo editing services at cost-effective prices.",
    url: "https://www.tech2globe.com/lightroom-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lightroom Editing Services | Tech2globe",
    description:
      "Lightroom services by Flatworld Solutions provide clients with top quality photo editing services at cost-effective prices.",
  }
};

const pageHeaderData = {
  title: "Lightroom Services",
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

export default function Lightroom() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Lightroom Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-state4.jpg" />
              <div className={Style.ContentDiv}>

                <p>Adobe Lightroom is one of the best comprehensive editing programs riched in features that provides exceptional photo editing services and results. Compared to other photo editing software, Lightroom provides a variety of functionality for image manipulation. Even after shooting with great skill, most photographers struggle to acquire the proper color contrast and tone modifications in their photos. At Tech2Globe, we provide the best lightroom editing services and post-production image editing for photographers who don't want to spend time in front of computers perfecting their photos.</p>
                <p>We can edit even the most challenging photographs with excellence and produce effective results in quicker turnaround times with our team of experienced and competent photo editors. We can handle projects of all scales and sizes with excellent efficiency and cost, whether you need experienced photo editors for a small project or have a significant necessity for picture editing.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Photo Editing Services</h4>
                <hr/>
                <p>At Tech2Globe, we provide a wide range of <strong>photo Merging lightroom editing services</strong> in various fields, including portrait photography, real estate photography, wedding photography, product photography, and much more. You may quickly obtain any number of photos and videos altered as per your exact specifications with our rapid, easy-to-access, and cost-effective services.</p>
                <p><strong>Services For Image Enhancement</strong> We can make your raw photos seem incredibly clean and professional with our image enhancement services. Colors are enhanced, shadows are removed, and any undesired components are removed to make the images suitable for printing and personal use.</p>
                <p><strong>Services For Changing Colors</strong> We assist our clients in changing the original hues of their photos using Adobe Lightroom and edit the photos according to their specific needs.</p>
                <p><strong>Services To Change The Sky</strong> We can help you modify the photo's backdrop while converting the sky background into a bright one and make the edited picture appear astonishingly gorgeous, whether you took the pictures on a terrible weather day or a day with less natural light.</p>
                <p><strong>Services For Skin Retouching</strong> We improve the images and erase any defects in the skin that may detract from the image's overall beauty. Whether you want to enhance the skin tone, remove imperfections, or reduce under-eye dark circles, we can alter the photos to your specifications.</p>
                <p><strong>Noise Removal Services</strong> We can smooth out the grainy and blurry photos to make them seem smooth, flawless, and transparent.</p>
                <p><strong>Effects Of The Brush </strong>We can improve your photographs by applying the necessary effects to give them the desired appearance.</p>
                <p><strong>Lightroom Split Toning Services</strong> It is possible to bring the traditional perspective effect to photographs by using different colors, with the best Lightroom split toning services offered to our clients.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">The Advantages Of Using Adobe Lightroom Software</h4>
                <hr />
                <p>We provide a fantastic collection of services utilizing Adobe Lightroom at Tech2Globe to provide the best picture editing outcomes. Adobe Lightroom is a picture editing software designed primarily for photographers. Unlike Photoshop, which has a lot of tools you might not require, Lightroom concentrates on the most important aspects of picture processing. It provides excellent and unrivaled picture management and editing in several modes to compare and select the best image. It is one of the most outstanding programs for editing photographs effortlessly, efficiently, and quickly, with features such as virtual copy support, presets, and online galleries. It also allows the ability to work with numerous pictures simultaneously.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Should You Hire Tech4Globe To Provide Lightroom Services?</h4>
                <hr />
                <p>We are one of the most reputable picture editing agencies with over a decade of expertise. We promise the most excellent result in edited photographs at a low price as one of the most dependable photo editing outsourcing organizations. Tech2Globe provides a wide range of services to its clients, as well as a comprehensive set of business advantages, making us one of the most excellent outsourcing companies in this industry.</p>

                <p>We are the ideal firm to work with for picture editing tasks because of our unwavering dedication to providing top-notch quality <strong>photo merging lightroom editing services</strong> and meticulous attention to detail. We provide highly cost-effective services with flexible price choices for each job.</p>

                <p>We achieve the best outcomes by utilizing the most innovative and cutting-edge equipment. We also follow and comply with ISO standards to guarantee optimal service delivery. Tech2Globe assure you that the information and images you provide are kept entirely private.</p>
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

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
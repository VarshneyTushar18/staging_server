import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
   title:
    "Outsource Real Estate Photo Blending Services - Tech2globe",

  description:
    "Outsource Real Estate Photo Blending Services to Tech2glbe and get high-quality photo blending services at an affordable price.",

  keywords: [
    "residential",
    "apartment",
    "multi unit housing",
    "private house",
    "student housing",
    "architecture",
    "architecture news",
    "architecture design",
  ],

  alternates: {
    canonical:
      "https://www.tech2globe.com/real-estate-photo-blending-services",
  },

  openGraph: {
    title:
      "Outsource Real Estate Photo Blending Services - Tech2globe",
    description:
      "Outsource Real Estate Photo Blending Services to Tech2glbe and get high-quality photo blending services at an affordable price.",
    url:
      "https://www.tech2globe.com/real-estate-photo-blending-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Outsource Real Estate Photo Blending Services - Tech2globe",
    description:
      "Outsource Real Estate Photo Blending Services to Tech2glbe and get high-quality photo blending services at an affordable price.",
  },
};
const pageHeaderData = {
  title: "Real Estate Photo Blending Services",
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
        img: "/images/services/service-inner/real-estate-photo-blending-services.jpg",
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

export default function RealEstatePhotoBlending() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How experienced are you?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We have been serving global clients since 2009. In more than 10 years, we have delivered diverse complexity data projects successfully.",
        },
      },
      {
        "@type": "Question",
        name: "What is the quality assurance process you follow?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We do three steps quality checking on each data project. Operators check work first, Project Managers review randomly, and QA teams verify thoroughly before delivery.",
        },
      },
      {
        "@type": "Question",
        name: "What is your turnaround time?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Clients set deadlines and we work efficiently with an experienced workforce to meet timelines for both small and large-scale projects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free trials?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we offer free trial work to earn your confidence with no commitment required.",
        },
      },
      {
        "@type": "Question",
        name: "How do I receive a finished project?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You will receive the finished project via email, secure FTP server, CD, DVD, or any preferred method.",
        },
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Real Estate Photo Blending Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-photo-blending-services.jpg" />
              <div className={Style.ContentDiv}>
                
                <p>If you work in real estate, images are essential. They enable you to show potential purchasers your house and encourage them to make a final buying choice. Make sure your photographs leave a lasting and effective impact on your customers. However, due to uneven lighting, wrong exposures, and erroneous angles, real estate photos taken with even a high-end digital camera can provide variable results. In that case, you can take help from our specialists who can turn your messed-up photos into real works of beauty at Tech2Globe.</p>
                <p>Our skilled photo editors combine a series of photos using the latest image enhancement techniques and software to create high-dynamic-range real estate photographs that are sharp, clear, and consistent in quality. Improve the visual range of your photographs with Tech2Globe's real estate <strong>Photo blending Services</strong>. Take advantage of our expert real estate <strong>Photo blending Services</strong> and show off your property to its full potential.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3 mb-0">Services We Offer</h4>
                <p>Tech2Globe is the top provider of real estate <strong>Photo blending Services</strong>, with over a decade of expertise in the image editing and photo enhancement market. Our real estate clients may use our professional high dynamic range (HDR) image mixing and editing services. Our skilled picture editors mix a succession of photographs of different brightness, contrast, and quality to create faultless images that present an eye-catching perspective of the property using an intelligent combination of human and automatic <strong>photo-blending techniques</strong> and procedures.</p>

                 <h4 className="pt-2 mb-0">Correction Of Color Exposure</h4>
                <p>In any shot, color is the most critical factor. It elevates the quality of your photographs and makes them more appealing. We offer extensive color correction services to balance and enhance the colors and hues of your pictures, resulting in rich, blended images in appropriate formats.</p>

                 <h4 className="pt-2 mb-0">Correction Of Viewpoint</h4>
                <p>We provide perspective correction services to make your photographs seem ideal by correcting the linear and textual parts. For example, we may assist you with aligning columns, lampposts, walls, and other buildings so that they seem upright. While doing so, our professional picture editors guarantee that lens flaws such as geometric distortion, chromatic aberration, and vignetting are minimized.</p>

                 <h4 className="pt-2 mb-0">Photo Bracketing</h4>
                <p>We also provide picture bracketing as part of our outsourced real estate <strong>Photo blending Services</strong> to improve the photographs' flash value, exposure, color, and white balance to make them more transparent, sharper, and more appealing.</p>

                 <h4 className="pt-2 mb-0">Image Retouching</h4>
                <p>We enhance the appearance and feel of your property's photographs by decreasing noise, leveling horizons, removing undesired items, and fixing color casts after they've been blended.</p>

                 <h4 className="pt-2 mb-0">Changing The Color Balance</h4>
                <p>The most challenging aspect of picture enhancement is getting the appropriate color; therefore, we alter the color balance to represent natural colors correctly and increase the richness of your composite image.</p>

                 <h4 className="pt-2 mb-0">Blending Of Images</h4>
                <p>Finally, to make beautiful HDR photos, we mix and blend photographs with varied exposures. We employ under-exposure photographs to capture highlights and over-exposure images to acquire shadows.</p>

                 <h4 className="pt-2 mb-0">The Advantages Of Using Our Real Estate HDR Photo Blending Services</h4>
                <p>Tech2Globe is one of the first companies to offer offshore real estate photo mixing services. We can expertly combine your real estate photographs to increase their aesthetic appeal and impart excellent clarity, having edited hundreds of images to perfection. <strong>Outsource Real Estate Photo Blending Services</strong> to Tech2Globe and enjoy:</p>

                 <h4 className="pt-2 mb-0">Professional Results For A Reasonable Price</h4>
                <p>Tech2Globe offers a comprehensive range of real estate <strong>Photo blending Services</strong> in India to meet your specific demands. All of our service packages may be readily adjusted to as per your requirements and are reasonably priced.</p>

                 <h4 className="pt-2 mb-0">Professional Photo Editors At Your Fingertips</h4>
                <p>When you <strong>Outsource Real Estate Photo Blending Services</strong> to Tech2Globe, you have immediate access to some of the top brains in the business. We have a talented staff of picture editors with years of expertise in the field. Our editors and image enhancers are skilled at dealing with even the most specialist picture editing and <strong>photo-blending techniques</strong>, such as Adobe Photoshop, CorelDraw, and Enfuse. They can deliver professional-quality results with no delays.</p>

                 <h4 className="pt-2 mb-0">Strict Observance Of The Highest Quality Standards</h4>
                <p>Our editors and quality controllers do extensive quality checks to guarantee that the edited photographs meet or exceed our clients' expectations and international quality standards.</p>

                 <h4 className="pt-2 mb-0">Project And Data Security In-Depth</h4>
                <p>We are concerned about your safety. Hence, you can rest confident that your data is entirely protected and safe when you <strong>Outsource Real Estate Photo Blending Services</strong> to us. To prevent frequent cyber assaults and security breaches, we use best-in-class worldwide privacy and data protection procedures.</p>

                 <h4 className="pt-2 mb-0">Use Of High-End Software</h4>
                <p>We use expert digital artists to deliver top-quality HDR picture mixing to ensure that our real estate customers receive the most professional <strong>Photo blending Services</strong>. Our picture editors are skilled in various imaging tools and can also deal with any bespoke program requested by the customer.</p>
                 
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
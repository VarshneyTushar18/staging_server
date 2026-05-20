import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Real Estate Panoramas with Expert Image Stitching - Tech2Globe",
  description:
    "Tech2Globe offers expert image stitching for stunning real estate panoramas. Elevate your property listings with immersive visuals!",
  alternates: {
    canonical: "https://www.tech2globe.com/real-estate-panoramas",
  },
  openGraph: {
    title: "Real Estate Panoramas with Expert Image Stitching - Tech2Globe",
    description:
      "Tech2Globe offers expert image stitching for stunning real estate panoramas. Elevate your property listings with immersive visuals!",
    url: "https://www.tech2globe.com/real-estate-panoramas",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Panoramas with Expert Image Stitching - Tech2Globe",
    description:
      "Tech2Globe offers expert image stitching for stunning real estate panoramas. Elevate your property listings with immersive visuals!",
  }
};

const pageHeaderData = {
  title: "Real Estate Panoramas",
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
        img: "/images/services/service-inner/portfolio/real-estate-panorama-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-panorama-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-panorama-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-panorama-portfolio-4.jpg",
      },
    ],
  }
]

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
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

export default function RealEstatePanoramas() {

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
      <Breadcrumb pageName="Real Estate Panoramas" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-panorama-services.jpg" />
              <div className={Style.ContentDiv}>

                <h2>Real Estate Panoramas</h2>

                <p>Is it costing you time and money to edit real estate panoramas? Without the expertise of a professional real estate panorama editor, are you unable to attain the desired level of finesse? You may save time and money by not hiring full-time photographers or spending thousands of dollars on real estate panoramic photography. When it comes to <strong>panorama image Stitching</strong>, Tech2Globe offers a one-stop solution.</p>
                <p>You receive specialized picture editing experts with years of expertise when you work with us. They have a thorough understanding of picture editing tools and technology to create pixel-perfect panoramas ready to be shown to potential buyers. So, why are you still waiting? Connect with us to outsource <strong>Property Panorama Services!</strong></p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">What Is Real Estate Panorama?</h2>
                <p>A real estate panorama image is a wide-angle view of a real estate property that preserves features throughout the image. The 360-degree virtual tour is another name for this. Multiple pictures must be stitched together to obtain this perspective.</p>
                <p>To help our clients with this, we have a team of digital image professionals at Tech2Globe that specialize in real estate <strong>HDR panoramas.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Real Estate Panorama Services</h2>
                <p>You may rely on us for real estate panoramas, real estate enhancement, real estate 360 panoramas, or <strong>panorama image Stitching services</strong> while your real estate photographers focus on taking photographs. Get ready to experience significant increase in your real estate business!</p>
                <p>Our Property Panorama Services are:</p>

                <h4>Cropping And Rotation Of Images</h4>
                <p>Capturing your real estate panoramas to focus on a few key elements is a possibility. To attain precision, we shall employ advanced cropping features in editing software. Your <strong>HDR panoramas</strong> may also be turned to the desired degree to create an artistic real estate panoramic.</p>

                <h4>Stitching In Full View</h4>
                <p>We have professionals in picture stitching techniques who employ the most up-to-date image stitching software, such as the PTGui and Stitcher Unlimited, to provide customers with services like Circular stitching, Rectilinear stitching, and Full Frame stitching.</p>

                <h4>Horizontal And Vertical Image Alterations And Stitching</h4>
                <p>We'll stitch horizontal and vertical shots together to produce a more immersive composite than a typical panorama, which catches fewer details with a sweep.</p>

                <h4>Contrast And Brightness Adjustment</h4>
                <p>Without exaggerating the impact, problems with brightness or contrast can be resolved. We'll make sure that these aspects of the real estate picture are correctly harmonized.</p>

                <h4>Removal Of Wires And Switchboard</h4>
                <p>We can eliminate the overhead cables and inside switchboards that might disturb <strong>HDR panoramas</strong> with remarkable precision. For outstanding panoramic photographs, we'll take out the undesired items that get in the way.</p>

                <h4>Image Alignment, Warping, And Positioning</h4>
                <p>Instead of employing a feature-based strategy to align pixels in your real estate panoramas, we'll utilize a robust algorithm. It also corrects any faults in the panoramic image as a whole. With a greater field of vision, we can also correct warping and positioning concerns.</p>

                <h4>Replacement Of Colors</h4>
                <p>Wrong or overly saturated colors might detract from the photo's overall quality and attractiveness. To make it aesthetically appealing, we will calibrate colors based on your preferences. We can change the color of the original or replace it entirely with a color of your choice.</p>

                <h4>The Use Of Photo Filters</h4>
                <p>Photographers may use filters to add creative touches to panoramic pictures. To make your real estate images excel, we'll use high-quality photo filters.</p>

                <h4>Getting Rid Of Unwanted Objects</h4>
                <p>Landscape photographers are prone to overlooking undesired detail recorded accidentally during photoshoots. To make your <strong>inner and outer cylinder panorama</strong> image faultless, our editors can remove camera flashes, picture sports, and shadows.</p>

                <h4>Adjusting The Curve And Level</h4>
                <p>By actuating the curve and level adjustment, we will regulate the image tone with precision. We will ensure your panoramas have the appropriate contrast by harmonizing the black and whites of a tonal range.</p>

                <h4>Image Retouching</h4>
                <p>With picture improvement, we can give your real estate panoramas more dimension. It will increase the attraction of panoramic pictures as a means of boosting real estate sales.</p>

                <h4>Our Creation Process For Panoramas</h4>
                <p>To obtain the best results, the process entails numerous processes and highly professional techniques applied to images given by you.</p>

                <p className="mb-0"><FaAngleRight /> Analysis of Requirements</p>
                <p className="mb-0"><FaAngleRight /> Planning a project</p>
                <p className="mb-0"><FaAngleRight /> Estimation of Time and Cost</p>
                <p className="mb-0"><FaAngleRight /> Formation of a Team</p>
                <p className="mb-0"><FaAngleRight /> Stitching and Processing of Images</p>
                <p className="mb-0"><FaAngleRight /> Quality Control and Assurance</p>
                <p className="mb-0"><FaAngleRight /> Results are delivered securely.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Should You Choose Us?</h2>
                <p>With years of expertise in <strong>Panoramic Real Estate Photos editing</strong>, we can better grasp each client's unique requirements. We are a trusted Indian real estate panoramas firm because of our extensive expertise in supporting small and large estate agencies. With a rapid turnaround time, we can build magnificent and faultless panoramic stitching of your property and deliver them in whatever format you desire - JPEG, TIFF, etc. Our specialty is being cost-effective without sacrificing quality.</p>
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

      <ClientSlider testimonials={testimonials} />
    </>
  )
};
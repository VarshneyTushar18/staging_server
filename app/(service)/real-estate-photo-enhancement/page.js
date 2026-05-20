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
  title: "#1 Real Estate Photo Editing Services | Tech2globe",

  description:"Real estate photo editing services from $1 per image for photographers & real estate agents. We guarantee the best property photography for your listings. Start making real estate photo enhancement fast",

  keywords: [
    "real estate photo editing services",
    "real estate photo enhancement",
    "real estate photo retouching services",
    "real estate photo editing",
  ],

  alternates: {
    canonical:"https://www.tech2globe.com/real-estate-photo-enhancement",
  },

  openGraph: {
    title: "#1 Real Estate Photo Editing Services | Tech2globe",
    description:"Real estate photo editing services from $1 per image for photographers & real estate agents. We guarantee the best property photography for your listings. Start making real estate photo enhancement fast",
    url: "https://www.tech2globe.com/real-estate-photo-enhancement",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "#1 Real Estate Photo Editing Services | Tech2globe",
    description:"Real estate photo editing services from $1 per image for photographers & real estate agents. We guarantee the best property photography for your listings. Start making real estate photo enhancement fast",
  },
};

const pageHeaderData = {
  title: "Real Estate Photo Enhancement",
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
        img: "/images/services/service-inner/portfolio/real-estate-photo-enhancement-services.jpg",
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

export default function RealEstatePhotoEnhancement() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Real Estate Photo Enhancement" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-photo-enhancement-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>The usage of near-perfect high-quality images displaying the greatest property attributes is critical to the success of a real estate business website. When you utilize our professional Real Estate Photo Enhancement services, our trained photo editors do everything to give you the finest results possible. If the photos, aerial views, and panoramas are not attractive and catchy, your buyers will not spend much time on the listing. When you hire dedicated photo editors, your chances of selling or leasing your listed property increase.</p>
                <p>Given the intense competition in the real estate industry, the presentation has emerged as an essential for attracting a target audience. Our <strong>real estate photography editing</strong> services help you attract consumers’ attention and increase conversions with high-resolution photographs set up to promote engagement and enhance conversions. We help you to increase detailing in your images to make it look attractive on the web or in print. Our years of <strong>real estate image enhancement</strong> outsourcing knowledge and expertise helps your business to pitch your shot with confidence and potential across worldwide marketplaces.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Real Estate Photo Enhancement Services We Provide:</h2>
                <p><strong>Outsource real estate Image enhancement services</strong> to our experts and save time and efforts. We provide best editing results with high quality by fine-tuning to the client's specifications. We provide real estate photo enhancing services in sectors such as:</p>

                <h4>Getting Rid Of Unwanted Objects</h4>
                <p>If there are any undesired things showing up in your real estate photo, our experts will make sure they are eliminated. Our skilled experts use various professional tools to remove them and make the images more authentic.</p>

                <h4>Replacement Of The Background</h4>
                <p>If your real estate images have a distracting background, such as any unessential, we remove them to make the image more professional and attractive to the eye.</p>

                <h4>Image Density Adjustment</h4>
                <p>If your image density is not up to the mark, we will work with you to improve it so you can develop a more appealing profile that attracts clients to your project.</p>

                <h4>Lens Correction</h4>
                <p>We undertake lens correction to rectify the defect if the lens used to photograph the real estate caused the picture to collapse inwards.</p>

                <h4>Fixing Blurry Photographs</h4>
                <p>We will correct and restore your real estate photograph if it is blurry or deformed due to dirt or grease.</p>

                <h4>Removing The Time Stamp</h4>
                <p>We can erase the time stamp from the photograph's edge using image editing software, making the image visually appealing.</p>

                <h4>Getting Rid Of Faded Edges</h4>
                <p>Images might start fading with time. To bring the photographs back to life, we apply color correction and restoration procedures.</p>

                <h4>Addition Of Texts/Objects</h4>
                <p>To assist clients in obtaining a vision of the intricacies, we add words to photographs to produce brochures and educational pieces.</p>

                <h4>Correcting Horizontal And Vertical Perspective Distortions</h4>
                <p>As a leading <strong>Real Estate Photo Enhancement</strong> service provider, we correct image distortions so that the image seems appealing.</p>

  
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p>We are a competent real estate picture editing service provider with a customer-centric approach, aesthetically appealing results, a highly collaborative working atmosphere, and cutting-edge technical resources. We have a team of <strong>real estate photography editing </strong>experts in Photoshop, Lightroom, Photomatix, Enfuse, and other image-enhancing tools. We provide metric-based photo editing, extensive color grading, 2D and 3D floor designs, and bulk photo archiving options.</p>
                <p>Give your brand an edge in the industry by using one of the industry's top <strong>real estate photography editing</strong> services. Tech2Globe is a real estate photo editing and outsourcing firm. We have a team of skilled image editing pros who specialize in real estate photo correction and retouching. Our staff has provided high-quality results to global clientele while meeting tough deadlines. We can handle all of your <strong>real estate photo enhancement</strong> needs, allowing you to focus on growing your business and increasing revenues.</p>
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
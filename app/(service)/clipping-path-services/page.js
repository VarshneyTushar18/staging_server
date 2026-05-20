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
  title: "Photo Clipping Path Services | Clipping Path Services | Tech2globe",
  description:
    "Enhance your visuals with Tech2Globe’s precise Photo Clipping Path services. Trust our expert Clipping Path services for flawless image editing and perfection.",
  keywords:
    "clipping path, clipping paths, clipping path services, clipping path service, image clipping path",
  openGraph: {
    title: "Photo Clipping Path Services | Clipping Path Services | Tech2globe",
    description:
      "Enhance your visuals with Tech2Globe’s precise Photo Clipping Path services. Trust our expert Clipping Path services for flawless image editing and perfection.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/clipping-path-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Clipping Path Services | Clipping Path Services | Tech2globe",
    description:
      "Enhance your visuals with Tech2Globe’s precise Photo Clipping Path services. Trust our expert Clipping Path services for flawless image editing and perfection.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/clipping-path-services",
  },
};

const pageHeaderData = {
  title: "Clipping Path Services",
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
  { id: 4, name: "Hair Masking Services", path: "/hair-masking-services" },
  { id: 5, name: "Image Manipulation Services", path: "/image-manipulation-services" },
  { id: 6, name: "Car Image Clipping", path: "/car-image-clipping" },
  { id: 7, name: "Image Masking Services", path: "/image-masking-services" },
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
        img: "/images/services/service-inner/portfolio/image-clipping-clippingpath-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-clippingpath-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-clippingpath-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-clippingpath-portfolio-4.jpg",
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

export default function ClippingPath() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Clipping Path Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-clippingpath-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>According to e-commerce business owners, picture studios, marketing agencies, etc., images have a vital part in selling a product. Using just any image, on the other hand, will not work. To acquire the desired impression from clients, it should be trimmed accurately and rightly. With our exact picture clipping and photo clipping path services, we can change your photographs utilizing numerous backdrops and color palettes, providing needed <strong>Image manipulation and enhancements</strong> to adapt to your varied marketing and commercial demands. Photo clipping path services, in general, eliminate the backdrop of a product photograph. The product's clipping path can either be placed on a different backdrop or saved as a transparent picture. This procedure is also known as etching or silo formation.</p>

                <p>Creating clipping paths around a product might take a long time to do picture cut-outs. However, even though it is a tedious procedure, it is essential for e-commerce retouching. At Tech2Globe, we provide <strong>affordable clipping path services</strong> to assist you in focusing your customer's attention to a primary focus of the picture so that the essential features are highlighted. We provide the artistic touch and attention to detail to assist you in presenting your commodities, products, real estate, models, or things in a minimalist, clean, and high-quality manner.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Path Clipping Services</h4>
                <p>With the growing need for e-commerce firms, a clipping path service provider is quite advantageous. However, to capture the attention of their clients, such businesses must rely on the right product image. As a result, it's critical to improve the images to meet the needs of online e-commerce sites. Tech2Globe assures that your company receives exceptional <strong>Image Retouching Services</strong> that turn prospects into customers and develop a strong brand presence.</p>

                <p>We provide a variety of picture clipping path services as a well-established <strong>Professional Clipping path service Provider</strong>. You don't have to let a significant number of photographs to clip, lack of central capabilities or picture clipping issues keep you from receiving edited and improved images.</p>

                <p><strong>Clipping Path Services For Photographs</strong> We employ both a soft and hard-edge clipping path approach to design a border that correctly positions the item in the image while separating it from the backdrop. As a result, we can create unique picture backdrops for you, as well as text wrapping alternatives.</p>
                <p><strong>Image Tracing</strong> We utilize advanced softwares to trace your photographs and trim each photo to ensure that the core object is accurately transferred to your chosen gray or white backdrop.</p>
                <p><strong>Masking Hair</strong> We employ alpha channel picture editing techniques to make selecting and removing hair from an image easier. Although this approach is primarily for eliminating or cutting out human hair, we also utilize it for fine detail cutting.</p>
                <p><strong>Dropping Background</strong> We utilize the latest and most excellent picture editing tools to crop away the backdrops to focus on the primary subject.</p>
                <p><strong>Photo Of A Shadow</strong> Tech2Globe's picture editing experts can digitally produce a realistic shadow in your photos. Even though the light source is generally at the top, our specialists can produce shadow views from any angle.</p>
                <p><strong>Clipping A Car Image</strong> Our skilled photo editors clip, crop, and shift automobile photos to any chosen backdrop, making the photo or image ideal for marketing campaigns as a stock photo image.</p>
                <p><strong>Model Clipping</strong> Tech2Globe, as a professional clipping path provider, can manage the complexities of picture clipping for organic images of models or spokespersons. Our skilled picture editors employ precise clipping path photoshop techniques to create a perfect image that retains all essential features.</p>
                <p><strong>Product Clipping</strong> We offer the most excellent clipping path photoshop service, tailored to the needs of many sectors, including real estate, commerce, fashion, pet goods, jewelry, automobile, and more.</p>
                <p><strong>Hand-Drawn Clipping</strong> We are the top professional clipping path service provider, and we highly pay attention to your photographs. Clipping pathways are created by hand by qualified and experienced workers.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p>Although clipping a picture appears to be a basic and straightforward job, it takes several hours to master. You may take advantage of the double benefit of correctly clipped photographs provided in a short amount of time by outsourcing clipping path service to Tech2Globe. Tech2Globe's <strong>Image Retouching Services</strong> are a cost-effective way to cope with picture clipping needs. In addition, our services may be perfectly tailored to meet your requirements.</p>

                <p>Here are the reasons why Tech2Globe is the most acceptable option for <strong>affordable clipping path services</strong>. We provide the highest degree of protection for your personal information to prevent it from falling into the wrong hands. Our data security policy is endogenous and exogenous, and we use ISO regulations to ensure the project's confidentiality.</p>

                <p>As an ideal <strong>professional clipping path service</strong> provider for your organization, we are very concerned about on-time delivery, 100% accuracy, economical pricing, or quality control methods for the assigned projects by our clients.</p>
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
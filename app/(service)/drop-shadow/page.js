import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";

export const metadata = {
  title: " Best Shadow Effects | tech2globe",

  description: "Tech2Globe offers the best drop shadow services for stunning visual effects. Enhance your images with our expert shadow effects.",
  // keywords empty → intentionally omitted
  alternates: {
    canonical: "https://www.tech2globe.com/drop-shadow",
  },

  openGraph: {
    title: " Best Shadow Effects | tech2globe",
    description: "Tech2Globe offers the best drop shadow services for stunning visual effects. Enhance your images with our expert shadow effects.",
    url: "https://www.tech2globe.com/drop-shadow",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: " Best Shadow Effects | tech2globe",
    description: "Tech2Globe offers the best drop shadow services for stunning visual effects. Enhance your images with our expert shadow effects.",
  },
};

const pageHeaderData = {
  title: "Drop Shadow",
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
        img: "/images/services/service-inner/portfolio/image-enhancement-drop-shadow-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-drop-shadow-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-drop-shadow-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-drop-shadow-portfolio-4.jpg",
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

export default function DropShadow() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Drop Shadow" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-drop-shadow.jpg" />
              <div className={Style.ContentDiv}>
                <p>Do photos of your product, property, and location appear raw, naked, unappealing, and artificial? Is there a lack of a natural look and feel to them? If that's the case, you may use our photoshop shadow services to add or alter shadows in images in a natural-looking manner. Drop shadow effects create the illusion of a shadow beneath or below the image's focus point. It literally "throws light" on the subject of a photograph's focus. A shadow is an effect that shows an object or element is slightly lifted above the ground or surface. The use of natural & reflection shadow creation gives character to the image with depth and texture.</p>
                <p>We employ the best quality drop shadow services atTech2Globe to produce the ideal shadows for objects in your photos. Like everything else in life, being natural is a plus for your presence. We achieve this by incorporating natural-looking shadows into your product photos and improvements to your photographs that are subtle yet visible so that you can sell more.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>The Affordable Reflection Shadow Services You Need</h2>
                <p><strong>Removing The Background</strong> Cutouts, etching, knock-outs, silhouettes, and other techniques are used in this process. Removing the backdrop from product images is a vital image editing step.</p>

                <p><strong>Retouching Of Photographs</strong>  We can eliminate props, wrinkles, creases, imperfections on the skin, dirt, and other flaws to improve your pictures and give it a more professional appearance.</p>

                <p><strong>Path Of Clipping</strong>  With meticulously hand-drawn clipping pathways, you can plan for the future. Text wrapping, background removal, print media, and the web are available for clipping pathways.</p>

                <p><strong>Color Correction</strong>  With correct colors, you can cut down on returns. Update your product image sets to match color values properly.</p>

                <p><strong>Invisible Mannequin</strong>  Mannequins are obtrusive, and model photography is pricey. Ghost mannequin effect is utilized by our experts to take multiple photographs and then combine them to remove the mannequin. This process allows us to focus on the product rather than the mannequin or the model in the photograph.</p>

                <p><strong>Reflection And Shadow</strong>  Increase the attraction of your goods by adding floating and reflection services to a photograph, by retaining or adding a slight shadow or reflection to an existing natural shadow.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Who Might Benefit From Drop Shadow Services?</h4>
                <p>Tech2Globe's <strong>best quality drop shadow services</strong> help the clients who want their photographs to be improved and beautified. Shadow generation enhances the quality of your photographs and gives them a more realistic appearance. If you operate a modeling agency generating images for viewers, capture geographic photos, or have an e-commerce site that displays images of things for buyers, then Tech2Globe can be your perfect spot for all the editing needs. We also help individuals who work in a photography studio, wholesale and manufacturing companies, advertising agencies, and others that require <strong>clipping with shadow service</strong> to improve their businesses.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>When Do Companies Require The Services Of A Drop Shadow Creator?</h4>
                <p>Various scenarios necessitate various techniques to increase the attractiveness of the photos. For example, suppose, you need to list your items or products on the internet; you'll need clean and presentable images. <strong>Natural drop shadow services</strong> can help you to get the most attractive and flawless images for this.</p>
                <p>Our <strong>best quality drop shadow services</strong> will assist you in altering your images and ensuring that they are pleasing to the eye. Maintaining a balance between the product photos and their shadows ensures that the images are presented professionally. The picture will appear realistic and artificial if you fail to maintain the required balance between the image itself and the appropriate shadow. Given that people are more likely to click on things that appear appealing, Tech2Globe allows you to improve the quality of your photographs.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Should You Choose Tech2Globe?</h4>
                <p>We provide the best and most affordable pricing with comprehensive solutions, ensuring that you get the best value for your money. We have an expert team who are skilled, well-trained, and creative and ensures timely service delivery. We employ the most up-to-date tools, including Adobe Photoshop CS and CC, Jasc PaintShop Pro, and Kodak's Digital ICE technology. We accept digital and physical images in all kinds and forms. We specialize in large-scale picture processing. We achieve the majority of our objectives through automation.</p>
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
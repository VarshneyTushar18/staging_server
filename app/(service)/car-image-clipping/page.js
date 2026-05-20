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
  title: "Photoshop Car Image Clipping and Effects | Tech2globe",
  description:
    "Outsource car image clipping services to a specialized Photoshop artists to ensure accurate clipping, background removal, and added quality car effects.",
  keywords:
    "image manipulation online,photo manipulation online,photo manipulation services",
  openGraph: {
    title: "Photoshop Car Image Clipping and Effects | Tech2globe",
    description:
      "Outsource car image clipping services to a specialized Photoshop artists to ensure accurate clipping, background removal, and added quality car effects.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/car-image-clipping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photoshop Car Image Clipping and Effects | Tech2globe",
    description:
      "Outsource car image clipping services to a specialized Photoshop artists to ensure accurate clipping, background removal, and added quality car effects.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/car-image-clipping",
  },
};

const pageHeaderData = {
  title: "Car Image Clipping",
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
        img: "/images/services/service-inner/portfolio/image-clipping-car-image-clipping-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-car-image-clipping-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-car-image-clipping-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-car-image-clipping-portfolio-4.jpg",
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


export default function CarImageClipping() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Car Image Clipping" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-car-image-clipping-services.jpg" />
              <div className={Style.ContentDiv}>
                <p>There is no question that most photographs in marketing materials and official brochures have several diversions that draw the viewer's attention away. Using appropriate automobile picture clipping services may eliminate these distractions from the photographs. Image clipping services help to remove all distortions and background non-essentials from a photograph and accentuate the primary subject. <strong>Car Image Retouching</strong> is a crucial step, especially when it comes to automobile marketing. Automobile manufacturers must present their vehicles in the best possible light to get buyers to purchase them. Therefore, at Tech2Globe, we fully comprehend our clients' needs and give the best <strong>Car photography Retouching Services</strong> tailored to their needs.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe's Car Photo Clipping Services</h4>
                <p>Tech2Globe has been delivering high-quality picture editing services to clients across a variety of industries for many years. Our extensive knowledge allows us to recognize the many advantages of automobile photo clipping and deliver services accordingly. We know how to make automobile photographs stand out by making it professional and eye-catching . When you Outsource Car Image Clipping Services to us, we can help you spice up your marketing content with car images cut according to your specifications. We offer the following car image clipping services :</p>

                <p><strong>Clipping A Car Image</strong> At Tech2Globe, we have a team of skilled picture editors that can remove distracting backdrops from automobile photographs and other disturbing elements. We also add shadows to make the automobile shot more beautiful and give it a more natural aspect.</p>
                <p><strong>Creating A 360-Degree Car View</strong> Automotive pictures must appear appealing to have a long-lasting impact on buyers. Our experts generate a 360-degree perspective of the vehicle, including the interiors, to assist consumers in visualizing it and getting a truer sense of the image. It helps to clear the minds of clients who are confused, and this results in increased sales.</p>
                <p><strong>Recoloring</strong> Occasionally, the necessary automobile color is unavailable for photographing, and the color cannot be shown in marketing brochures as a result. In that situation, Tech2Globe assists our clients in creating automobile photos in a variety of hues.</p>
                <p><strong>Vehicle Photo Manipulation</strong> Certain automotive modifications may not be available for photographs, and as a result, marketers cannot highlight these new characteristics in car photographs. However, we can assist you in incorporating such automotive modifications into your photographs and showcasing these qualities at Tech2Globe.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4>The Benefits Of A Car Image Editing Service</h4>
                <p>Every aspect of e-commerce is becoming more complex. It makes it difficult for customers to rely upon certain brands. If you're in an automobile company, you should put the most excellent and most attractive car photographs on your website to impress buyers at first glance. This should be considered in order to be recognised as a professional automobile or vehicle vendor and attract potential buyers.</p>
                <p>Photos without a retouching process are likely to be less appealing and not capable of attracting the visitors. Most auto dealers use <strong>Car Image Editing</strong> services to make their vehicle photographs more appealing and eye-catching.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Tech2Globe has been operating in the picture editing market for many years and has worked with a wide range of clients from various sectors. Our picture editors are highly skilled and are proficient in using the most up-to-date photo editing tools and technology. We deliver altered images promptly, ensuring that your tasks are completed on time. In addition, our cost-effective <strong>Car photography Retouching Services</strong> are of the highest quality.</p>
                <p>To deliver the most excellent automobile image clipping services, we have access to the most up-to-date picture editing tools and technologies, as well as cutting-edge resources. In addition, our expert team has the knowledge and experience to give the automotive photographs a professional appearance that you can utilize for promotion and advertising purposes.</p>
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
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
  title: "Virtual Staging Service Provider | Virtual Staging for Real Estate",
  description:
    "Tech2globe provides virtual staging services for your real estate listings to help buyers visualize fully furnished empty homes, sell faster, and achieve top value with a digital remodel of any property.",
  alternates: {
    canonical: "https://www.tech2globe.com/virtual-staging",
  },
  openGraph: {
    title: "Virtual Staging Service Provider | Virtual Staging for Real Estate",
    description:
      "Tech2globe provides virtual staging services for your real estate listings to help buyers visualize fully furnished empty homes, sell faster, and achieve top value with a digital remodel of any property.",
    url: "https://www.tech2globe.com/virtual-staging",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Staging Service Provider | Virtual Staging for Real Estate",
    description:
      "Tech2globe provides virtual staging services for your real estate listings to help buyers visualize fully furnished empty homes, sell faster, and achieve top value with a digital remodel of any property.",
  }
};

const pageHeaderData = {
  title: "Virtual Staging",
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

const portfolio = [
  {
    title: "CATALOGUING",
    items: [
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/special-service-virtual-staging-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/special-service-virtual-staging-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/special-service-virtual-staging-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/special-service-virtual-staging-portfolio-4.jpg",
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

export default function VirtualStaging() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Virtual Staging" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/special-service-virtual-staging-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Property and real estate organizations have lifted their game to Virtual Staging innovations as the world moves to new technology developments. On a website, an empty flat has a minor attraction than one that is well-furnished and decorated. Traditional house staging is something we all adore, but it has a few flaws that make it tough to pull off. Realistic staging can create the appearance that the items on display are included with purchasing a house.</p>

                <p>It is when virtual house staging starts to make sense. Capturing digital images of empty rooms and installing digital furniture and other décor is known as virtual house staging. <strong>Virtual Home Staging</strong> is less expensive than accurate home staging and allows you to exhibit your property to potential buyers in a much more imaginative way. <strong>Virtual Staging Services</strong> are used by various businesses, including real estate agents, home and interior decor websites, and online furniture retailers, to name a few.</p>

                <p>Tech2Globe, based out of India, is a leading <strong>Virtual Staging Services</strong> provider with the infrastructure, knowledge, and resources to suit any virtual staging needs. We produce accurate physical dimensions of a property using the most up-to-date 3D rendering technologies.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Is It So Important To Have A Realistic Product?</h4>
                <p>After seeing photographs of homes and structures online, nearly 4 out of 5 home purchasers decide "not" to purchase a property. If you want to sell your home, you don't want to be among more than 80% of listings. According to a building's design and style choices, our skilled team of image specialists creates realism when staging by adding several types of furnishings to blank spaces, ranging from modern to contemporary, from minimalist to traditional.</p>

                <p>An extensive inventory of photos of furniture, furnishings, ornamental lighting, and other décor is necessary for our <strong>virtual staging solutions</strong>. We can bring luxury to a room that would be difficult to envision otherwise, and this may be the distinction between a sale and a refusal. Sellers and developers have the best chance of closing transactions faster and at more excellent prices when using staged homes. Our <strong>Virtual Staging Services</strong> allow you to highlight the most remarkable characteristics of your house in various ways to appeal to a broader audience.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">What Do We Stage?</h2>
  
                <h4>The Living Room</h4>
                <p>There will be a sofa, a settee, a TV, a home theater, a coffee table, and lighting to make it appear larger.</p>

                <h4>Bedrooms</h4>
                <p>Paint colors, patterns, furniture, bed, side tables, night lamps, wardrobes, and other items are available to all family members.</p>

                <h4>Outdoors</h4>
                <p>Garden tables and chairs, swings, pools, basketball hoops, parking, and landscaping are all available.</p>

                <h4>Kitchen</h4>
                <p>With a fireplace, grill, oven, kitchen table, dishwasher, modular cabinetry, small bar, and colorful fruits on the table.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Should You Choose Tech2Globe For Virtual Staging?</h2>
                <p>By outsourcing your <strong>Virtual Staging Services</strong> to us, you can take several advantages. We provide our clients with various flexible and cost-effective pricing choices that will precisely meet your business needs and budget. As a certified organization, you can trust that all of the information and photographs you submit will be kept safe and secure.</p>

                <p>Staged homes sell faster and for a more excellent price than unoccupied real estate. Most sellers struggle to see the possibilities of an empty property, but this is no longer a problem with our <strong>Virtual Home Staging</strong> service. We believe in investing in the most significant infrastructure while providing excellent service to our customers. We have access to the most up-to-date virtual staging software and tools, as well as international-standard office space.</p>

                <p>Virtual Real Estate Staging Services aid in presenting real estate photographs to potential purchasers, resulting in beneficial outcomes for both sellers and buyers. <strong>Try the best Virtual Staging </strong>services, where our editing professionals can transform a basic snapshot of an empty room into a completely furnished and beautiful home utilizing powerful 3D rendering technology.</p>

                <p>Tech2Globe employs the most up-to-date 3D rendering technology to generate accurate physical dimensions of a property. We offer a furniture catalog from which clients may pick. When <strong>Virtual Staging Services</strong> are outsourced, not only is time, work, and money saved but the real estate property may be imagined just as it was designed. Our specialists can create any real estate photograph by adding furnishings and other accessories desired by the client.</p>
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
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
  title: "Outsource Image Vector Services | Tech2globe",

  description: "Outsource image vector services to Flatworld Solutions and get access to accurate vector images, and vector graphics services",
  // keywords empty → intentionally omitted
  alternates: {
    canonical: "https://www.tech2globe.com/image-vector-services",
  },

  openGraph: {
    title: "Outsource Image Vector Services | Tech2globe",
    description: "Outsource image vector services to Flatworld Solutions and get access to accurate vector images, and vector graphics services",
    url: "https://www.tech2globe.com/image-vector-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Image Vector Services | Tech2globe",
    description: "Outsource image vector services to Flatworld Solutions and get access to accurate vector images, and vector graphics services",
  },
};

const pageHeaderData = {
  title: "Image Vector Services",
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
        img: "/images/services/service-inner/portfolio/image-enhancement-image-vector-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-image-vector-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-image-vector-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-image-vector-portfolio-4.jpg",
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

export default function ImageVector() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Vector Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-image-vector-services.jpg" />
              <div className={Style.ContentDiv}>
                <h2>Image Vector Services</h2>
                <p>The advantages that vector graphics and vector art give over traditional formats are grabbing the public's attention, business organizations, and portrait studios alike. One of the most significant advantages is that you may scale them to any size without sacrificing quality. As a result, they're great for scaling portraits, logos, and other pictures. Tech2Globe is a pioneer image solution provider and has provided vector graphics production and conversion services to a large clientele. We can work on your stationery, signage, banners, vehicle graphics, and portraits, among other things, using our high-quality vector graphics and our team of picture editing pros.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Tech2Globe's Photo Vectoring Process</h4>
                <p>You can contact Tech2Globe if you are a picture studio looking to supply your clientele with incredibly artistic portraits. We understand how portraits are made and use that understanding in our <strong>Photo Vectoring</strong> services.</p>

                <p>The distinction between a bitmap and a vector picture is that bitmaps are made of pixels, whereas vector graphics comprise pathways. A bitmap picture comprises a network of individual pixels, each of which can be of any shade or hue. Instead of pixels, mathematical connections between points and the routes linking them are utilized to define a picture in vector graphics.</p>

                <p>Our photo editors can transform your raster (bitmap) image to vector artwork in the quickest time possible. Our vectorization treatment often takes less than 24 hours. However, this schedule is highly dependent on the customer's requirements and may differ from one client to the next.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Converting Raster Into Vector Images Has Several Advantages</h4>
                <p className="mb-0"><FaAngleRight /> A bitmap image's resolution is limited, but vector images are resolution-free and can be stretched to any size.</p>
                <p className="mb-0"><FaAngleRight /> A rectangular border constrains bitmaps, but vector pictures are not restricted by any.</p>
                <p className="mb-0"><FaAngleRight /> High-resolution bitmaps have a large file size, whereas a vector picture has a much smaller file size.</p>
                <p><FaAngleRight /> Vector pictures, unlike bitmap images, may be reproduced on paper without losing quality.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of Tech2Globe's HDR Photo Blending Services</h4>
                <p>We customize our <strong>Vector Image Conversion</strong> services to match your needs while maintaining the most competitive prices.</p>
                <p className="mb-0"><FaAngleRight /> We employ the most up-to-date software and tools for the most acceptable results, such as Adobe Photoshop CS3 and Enblend- Enfuse GUI.</p>
                <p className="mb-0"><FaAngleRight /> We have the quickest job turnaround time.</p>
                <p className="mb-0"><FaAngleRight /> Our picture blending professionals are experts with years of experience and are pretty good at what they do.</p>
                <p><FaAngleRight /> Our services are scalable to fit any project size.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>What Are The Advantages Of Using Our Image Vectorization Services?</h4>
                <p>Tech2Globe has the right mix of specialists and tools for Raster to vector conversion, whether it's a collage of your client's precious baby, a wall portrait of your client and their spouse, or a portrait of an outdoor scenery that your client has snapped and wants it as a portrait. Over 290 distinct vector image formats are supported by our team, including IMG, JPEG, PCX, PDF, PICT, GIF, and TIFF.</p>
                <p>All converted vector pictures are produced by hand by our photo professionals with great detailing. A typical Tech2Globe vector file might include the following:</p>
                <p className="mb-0"><FaAngleRight /> Hatch designs that are related.</p>
                <p className="mb-0"><FaAngleRight /> Accurate text.</p>
                <p className="mb-0"><FaAngleRight /> Accurate layer information.</p>
                <p className="mb-0"><FaAngleRight /> Dimensions of association.</p>
                <p className="mb-0"><FaAngleRight /> Precise line kinds.</p>
                <p className="mb-0"><FaAngleRight /> Standard component symbols and blocks.</p>
                <p><FaAngleRight /> Blocks with titles (as per scale).</p>
                <p>The image to vector conversion team at Tech2Globe ensures that the vectors created/converted are suitable for a wide range of applications, including printing, embroidery, engraving, CAD, illustration, and web design. All of this comes at a tremendous operational cost reduction for you!</p>
                <p>Our team is familiar with image editing applications such as Adobe Photoshop CS6 and plug-ins for Adobe Photoshop, Indesign, Illustrator, PTGUI, CorelDraw, Aperture, and Corel Painter. The skilled picture editing staff swiftly handles <strong>Raster Vector Conversion Services</strong> and offers a quick turnaround time for all projects, saving you time and effort.</p>
                <p>Along with picture vectorization, image to vector conversion is part of our extended image editing services portfolio that includes image stitching, image editing, and digital photo enhancement. Benefit from our quality services by outsourcing to the best <strong>Vector Artwork Conversion Services in India</strong>.</p>
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
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
  title: "Photo Restoration Services | Restoring Old Photos | Tech2globe",

  description: "Photo Restoration Services  We Repair and Restore Old Photos. Fading and Damage can be Repaired, Preserving them for Future Generations.",

  // keywords empty in source → safely omitted (recommended)
  alternates: {
    canonical: "https://www.tech2globe.com/photo-restoration-services",
  },

  openGraph: {
    title: "Photo Restoration Services | Restoring Old Photos | Tech2globe",
    description: "Photo Restoration Services  We Repair and Restore Old Photos. Fading and Damage can be Repaired, Preserving them for Future Generations.",
    url: "https://www.tech2globe.com/photo-restoration-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Photo Restoration Services | Restoring Old Photos | Tech2globe",
    description: "Photo Restoration Services  We Repair and Restore Old Photos. Fading and Damage can be Repaired, Preserving them for Future Generations.",
  },
};

const pageHeaderData = {
  title: "Photo Restoration Services",
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
  { id: 8, name: "Career", path: "/career" },
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
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-restoration-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-restoration-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-restoration-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-photo-restoration-portfolio-4.jpg",
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

export default function PhotoRestoration() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Photo Restoration Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-photo-restoration-services.jpg" />
              <div className={Style.ContentDiv}>
                <h2>Photo Restoration Services</h2>
                <p>Is the quality of your photographs deteriorating or fading as a result of time? Do they appear to be tattered, fading, or missing parts? Are there flaws or stains on your photos caused by germs or mold? The method of recovering a photograph that has been destroyed or impacted by aging is known as photo restoration. Our Photo Restoration Services offer a comprehensive range of services for restoring and reconstructing old and damaged photographs to your specifications. In addition, when you use our Photo Restoration Services, any undesired color casts are removed, and the image's contrast is altered, resulting in comprehensive image restoration.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>The Many Types Of Photo Restoration Services Available</h2>
                <p className="mb-0"><FaAngleRight /> Removing stains and dirt</p>
                <p className="mb-0"><FaAngleRight /> Repairing damages caused by the loss of pigments and chemical coatings</p>
                <p className="mb-0"><FaAngleRight /> Restoration of water-damaged photographs</p>
                <p className="mb-0"><FaAngleRight /> Getting rid of color blemishes and eliminating scratches</p>
                <p className="mb-0"><FaAngleRight /> Restoring mold and insect damage to photographs</p>
                <p className="mb-0"><FaAngleRight /> Repairing loss due to wear and tear, scratches, cracks, or folding</p>
                <p className="mb-0"><FaAngleRight /> Restoring of custom borders</p>
                <p className="mb-0"><FaAngleRight /> Removing damaged album glue</p>
                <p className="mb-0"><FaAngleRight /> Minor tremors and inadequate illumination can be removed</p>
                <p className="mb-0"><FaAngleRight /> Colorization of black-and-white photographs</p>
                <p className="mb-0"><FaAngleRight /> Bringing fading photographs back to life</p>
                <p className="mb-0"><FaAngleRight /> Fixing corners that are missing or torn</p>
                <p className="mb-0"><FaAngleRight /> Missing components are recreated and reassembled</p>
                <p className="mb-0"><FaAngleRight /> Bringing back the details in the photos</p>
                <p className="mb-0"><FaAngleRight /> Old photographs are scanned or enlarged</p>
                <p className="mb-0"><FaAngleRight /> Cropping or straightening pictures</p>
                <p className="mb-0"><FaAngleRight /> The background can be removed or changed</p>
                <p className="mb-0"><FaAngleRight /> Retouching of the body and face</p>
                <p><FaAngleRight /> Correcting color balance & removing yellowness</p>
                <p>We accept actual photos and convert them into better digital copies for you.</p>
                <p>Apart from providing online digital picture restoration and manipulation services, we also provide a whole variety of image editing and enhancement services to ensure that your photographs are of the highest quality. With a scalable infrastructure and workforce, we provide the industry's shortest response time. For our frequent clients, we provide savings on large-scale projects.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>The Benefits Of Using Our Photo Restoration Services</h2>
                <p>Our <strong>photo restoration experts in India</strong> are professionals in color to black and white, black and white to color, sepia tone conversions, color corrections, digital hand coloring, balancing, tones, tints, matching, and sequencing. To bring out the best digital photo restoration, selective tints, new color schemes, modernization, duotones, tri-tones, and four colors are employed.</p>

                <p>In creating the most outstanding picture restoration, we use contrast themes, color aging, re-sequence to standard colors, re-sequence to informal colors, glossy to a matte finish, or vice versa.</p>

                <p>We deal with TIFF, JPEG, PSD, GIF, PNG, PGF, RAW, raw digital files, and other key image formats in addition to old picture and antique photo restoration. We can also convert photographs and files from one format to another according to your preferences.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Why Choose Us?</h2>
                <p>Outsource digital picture restoration services to a firm that knows your concept and can successfully carry it out. Tech2Globe is a domain-experienced outsourcing and <strong>image restoration company</strong> with strong picture restoration experts and cutting-edge technical infrastructure. Over the years, we've provided bespoke picture restoration, photo enhancement, and photo colorization services to a global clientele. Our professionals employ the most up-to-date photo restoration applications, such as Image mender, Adobe Photoshop, Corel Paintshop Pro, KAVIS Retoucher, and others to restore old photographs.</p>
                <p>Our technical experts and photo editors are highly skilled in converting colored pictures to black and white, black and white images to color, restoring custom borders, converting to sepia tones, balancing color tones, adjusting the color, tints, digital hand coloring, sequencing, matching, and more. We are among the biggest trusted names in the picture restoration business because of our industry experience and established track record of producing excellent outcomes. Use our expertise in damaged picture repair to obtain the results you want in a flash.</p>
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
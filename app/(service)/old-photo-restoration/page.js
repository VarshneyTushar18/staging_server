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
  title: "Old Photo Restoration Services | Digital Photo Restoration Services",

  description: "Tech2globe Photo Restorer helps restore old photos instantly. AI enables online old photo restoration as it auto-fixes damaged, faded, and scratch old photos. Get your Old Photo Restoration With Us today!",

  // keywords empty → intentionally omitted

  alternates: {
    canonical: "https://www.tech2globe.com/old-photo-restoration",
  },

  openGraph: {
    title: "Old Photo Restoration Services | Digital Photo Restoration Services",
    description: "Tech2globe Photo Restorer helps restore old photos instantly. AI enables online old photo restoration as it auto-fixes damaged, faded, and scratch old photos. Get your Old Photo Restoration With Us today!",
    url: "https://www.tech2globe.com/old-photo-restoration",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Old Photo Restoration Services | Digital Photo Restoration Services",
    description: "Tech2globe Photo Restorer helps restore old photos instantly. AI enables online old photo restoration as it auto-fixes damaged, faded, and scratch old photos. Get your Old Photo Restoration With Us today!",
  },
};

const pageHeaderData = {
  title: "Old Photo Restoration",
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
        img: "/images/services/service-inner/portfolio/image-enhancement-old-photo-restoration-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-old-photo-restoration-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-old-photo-restoration-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-old-photo-restoration-portfolio-4.jpg",
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

export default function OldPhotoRestoration() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Old Photo Restoration" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-old-photo-restoration.jpg" />
              <div className={Style.ContentDiv}>
                <p>Do you have old pictures that are damaged, faded, or covered with spots that make them impossible to view? With our <strong>Digital Photo Restoration Services</strong>, you can bring them back to life. Before the invention of digital cameras, individuals would take images on film and have them printed so that the memories could be preserved indefinitely. However, these photographs tend to fade and lose their quality with time. The older a photograph becomes, the more damage it sustains. As a result, old photo restoration is critical in ensuring that old images are digitized for long-term usage and restored to their former brilliance.</p>
                <p>Tech2Globe can help you if you recreate those damaged yet valuable photographs. Our picture restoration professionals will digitally capture your photos before <strong>Retouching Old photos, Repair Torn or Cracked Photos</strong> to bring them back to their former brilliance. Apart from recreating your photos, we will also do color cast removal and contrast adjustment procedures. Your image will not only be digitally repaired, but it will also appear better than before!</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>Services For Restoring Old Photographs</h2>
                <p>Old pictures tend to break down as they become older. Tech2Globe's skilled team of picture editors can help you <strong>restore the old photo to perfection</strong> so you can relive old memories. Our low-cost services save our clients’ time and money that would otherwise be spent employing an in-house picture editing staff.</p>

                <p>Some of the essential antique photo restoration services we provide are:</p>
                
                <p className="mb-0"><FaAngleRight /> Recreate damaged faces or body parts</p>
                <p className="mb-0"><FaAngleRight /> Remove minor stains or blemishes</p>
                <p className="mb-0"><FaAngleRight /> Restore photographs that have been shredded or damaged</p>
                <p className="mb-0"><FaAngleRight /> Corners that are missing or torn can be repaired</p>
                <p className="mb-0"><FaAngleRight /> Missing components can be recreated and reassembled</p>
                <p className="mb-0"><FaAngleRight /> Repairing damages caused by pigmentation</p>
                <p className="mb-0"><FaAngleRight /> Restoration of water/coffee damage</p>
                <p className="mb-0"><FaAngleRight /> Repairing mold and insect damage to pictures.</p>
                <p className="mb-0"><FaAngleRight /> Loss is due to wear and tear, scratches, cracks, or folding being repaired.</p>
                <p className="mb-0"><FaAngleRight /> Bringing back fading photographs</p>
                <p className="mb-0"><FaAngleRight /> Bringing back details in the photos</p>
                <p className="mb-0"><FaAngleRight /> Cropping or straightening pictures</p>
                <p className="mb-0"><FaAngleRight /> Change or remove the background</p>
                <p><FaAngleRight /> Retouching of the body and face</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Should You Hire Restoration Services For Old Photographs?</h4>
                <p>Photographs can decay over time if not taken care of. Our Digital Photo Restoration Services can help you preserve your images for years to come, ensuring that they don't lose their luster and important memories linked with them.</p>
                <p className="mb-0"><FaAngleRight /> After the improvement, you can obtain a digital version of the photographs that will not be affected by time.</p>
                <p className="mb-0"><FaAngleRight /> You can share the restored images to future generations as well as your loved ones.</p>
                <p className="mb-0"><FaAngleRight /> You can save these images in a more safe location.</p>
                <p><FaAngleRight /> You have the option of enlarging your images and framing your memories.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe For Old Photo Restoration Services?</h4>
                <p>Tech2Globe is a highly skilled <strong>picture restoration company</strong> that strives to gratify its clients and provide value to its companies. When you <strong>outsource picture restoration services</strong> to Tech2Globe, you receive higher quality services. All individuals and photo studios can benefit from our low-cost <strong>antique picture restoration services</strong>. Even though we provide low-cost picture restoration services, the quality of our work is never compromised.</p>

                <p>We use a multi-level quality control system to deliver only the highest-quality photo restoration services. You won't have to worry about security or confidentiality when you work with us for picture restoration or ripped photo repair since we go to great lengths to keep your photos safe and private.</p>

                <p>With a 12 to 24 hours turnaround time, you may have your vintage images repaired and altered. Submit a scanned copy of the photo you want restoring to our secure FTP server, and we'll email you the digitally restored image the following day!</p>
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
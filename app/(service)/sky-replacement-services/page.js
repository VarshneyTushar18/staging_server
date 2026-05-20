import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Sky Replacement Services | Tech2globe",

  description: "Tech2gobe has been providing professional Sky Replacement Services for real estate photos to clients around the globe at cost-effective prices.",

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
    canonical: "https://www.tech2globe.com/sky-replacement-services",
  },

  openGraph: {
    title: "Sky Replacement Services | Tech2globe",
    description: "Tech2gobe has been providing professional Sky Replacement Services for real estate photos to clients around the globe at cost-effective prices.",
    url: "https://www.tech2globe.com/sky-replacement-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sky Replacement Services | Tech2globe",
    description: "Tech2gobe has been providing professional Sky Replacement Services for real estate photos to clients around the globe at cost-effective prices.",
  },
};

const pageHeaderData = {
  title: "Sky Replacement Services",
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

export default function SkyReplacement() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Sky Replacement Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-sky-replacement-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Real estate photography is essential in assuring tenancy or sale of property in all real estate markets worldwide. Images with a bright, clear sky are an essential part of every creative real estate photograph. Outdoor photographs of your real estate property are frequently marred by various distortions and factors, rendering them drab, distracting, and even useless. The Professional <strong>Sky Replacement Services</strong> provided by Tech2Globe ensure that the real estate business works all year.</p>
                <p>We supply real estate clients all around the world with high-quality expert sky replacement services. We have a staff of skilled editors that can immediately spot sections of the image that may require sky augmentation or sky alteration and do it on time, using all of the most popular editing tools and techniques. We supply consumers all around the world with <strong>perfect real estate photo sky change</strong> services. Our extensive expertise in this industry enables us to better assist our customers by understanding their business models and providing the necessary services. We understand their business models and deliver the essential services since we have worked in various sectors. Moreover, we assist our customers in generating more money through our service by offering competitive prices and quick response times.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-0">Our Sky Replacement Services For Real Estate</h4>
                <p>For many years, we have provided high-end real estate photo sky change services to our clients, and we have transformed countless bland and monotonous skylines into eye-catching ones.</p>

                <h4 className="mb-0">Changing The Color Of The Sky Or Adding Color</h4>
                <p>For many years, we have provided high-end real estate photo sky change services to our clients, and we have transformed countless bland and monotonous skylines into eye-catching ones.</p>

                <h4 className="mb-0">Services To Remove Color Casts</h4>
                <p>Images with odd colors are known as color casts. Specific photos are primarily blue or yellow in tone and lack true-to-life colors. Color cast removal services may assist you in removing the color cast from your real estate photograph, making it appear more appealing, brighter, and natural.</p>

                <h4 className="mb-0">Getting Rid Of Unwanted Objects</h4>
                <p>Groundwork elimination is manipulation work that entails removing the groundwork and enhancing its quality with unique changes. They include color adjustments, shadow reduction or addition, and sometimes increased contrast. Because this service enhances the visual attractiveness of the image, our professionals use it frequently. Our photo alteration service is distinct from the rest of our offerings. Our experienced Image Editor performs little recovery work to improve the overall impression.</p>

                <h4 className="mb-0">Sky Perspective Correction</h4>
                <p>Do you have a real estate building that appears to be leaning backwards? Do you get the sensation that it's slanted inward? If that's the case, your real estate images will be lowered in value. Real estate images with distorted perspectives can negatively suffocate your real estate selling prospects; therefore, Photo Perspective Correction is necessary to present your home correctly.</p>

                <h4 className="mb-0">Changing The Background</h4>
                <p>As the name suggests, the tool helps replace blown-out or unappealing skies with more appealing alternatives while adjusting to the rest of the image to make the new sky feel more authentic.</p>

                <h4 className="mb-0">Why Outsource Photo Sky Change Services To Us?</h4>
                <p className="mb-0"><FaAngleRight /> Panorama stitching services in 360 degrees.</p>
                <p className="mb-0"><FaAngleRight /> We have specialists that are capable of attentively completing even the most challenging sky change assignments.</p>
                <p className="mb-0"><FaAngleRight /> You may select from the various sky, clouds, and photo backdrops from our collection of real estate photographs.</p>
                <p className="mb-0"><FaAngleRight /> We can make any skyline look better for you.</p>
                <p className="mb-0"><FaAngleRight /> We offer services at reasonable prices.</p>
                <p className="mb-0"><FaAngleRight /> We provide personalized Professional Sky Replacement Services that meet your business's demands while delivering excellent results on schedule.</p>
                <p className="mb-0"><FaAngleRight /> You will receive relevant photo backdrops based on your selections.</p>
                <p className="mb-0"><FaAngleRight /> We can improve the sky in a wide range of real estate photographs.</p>
                <p className="mb-0"><FaAngleRight /> We present you with a variety of options in terms of color, cloud state, and backdrop.</p>
                <p className="mb-0"><FaAngleRight /> We present you with a variety of options in terms of color, cloud state, and backdrop.</p>
                <p className="mb-0"><FaAngleRight /> You may save time and money by using existing photographs and submitting them to us for effective sky alteration.</p>
                <p className="mb-0"><FaAngleRight /> We give you a wide range of options to choose the clouds, sky, and backdrops.</p>
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

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
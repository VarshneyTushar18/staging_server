import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandPointRight, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "",
  description:
    "",

  openGraph: {
    title: "",
    description:
      "",
    url: "",
    siteName: "",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "",
  },

  alternates: {
    canonical:
      "",
  },
};

const pageHeaderData = {
  title: "Real Estate 360 Degree Virtual Tours",
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
        link: "#",
        img: "/images/services/service-inner/portfolio/real-estate-360-degree-virtual-tours-services.jpg",
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

export default function RealEstate360DegreeVirtualTours() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Real Estate 360 Degree Virtual Tours" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/portfolio/real-estate-360-degree-virtual-tours-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Do you want to attract more consumers and persuade them to buy your homes as a real estate agent? If that's so, you might consider using Tech2Globe to create a <strong>360 virtual tour real estate</strong>. We can virtually transport your real estate property to the consumer, allowing them to view and navigate it without having to be physically present. Customers will see the entire property in one image and get a more in-depth look and feel for it. Tech2Globe is a company that specializes in creating <strong>360 virtual tour real estate</strong>. Our picture editors are skilled at stitching together many photographs to create a three-dimensional representation of real estate listings. It will assist your possible buyer in navigating the property with ease, gaining better knowledge, and making rapid selections.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Services</h2>
                <p>Once we get the customer's images, we will create a <strong>360 virtual tour real estate</strong> of the property. We have been in this business for years and have catered to their specific requirements. Here are some of the services we offer as part of our 360-degree virtual tour development for real estate:</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-12">
                    <h4>Cropping A 3D Image Of Real Estate</h4>
                    <p>Before putting the photographs together, the most crucial step in creating a <strong>360 virtual tour real estate</strong> is to choose the right image and crop it. We may crop photographs based on their specifications, size, and other factors. Cropping the image is necessary if the pixel distribution is not uniform. It also helps in the removal of unwanted portions to improve the visual quality of the virtual tour.</p>

                    <h4>Alignment Of 3D Photos In Real Estate</h4>
                    <p>You must alter the image to accurately position it to stitch/blend with other photographs while working on a <strong>360 virtual tour real estate</strong>. It will also aid in maintaining the layout's uniformity. Our professionals can correctly align the photos and remove any faults that may develop. They can identify and repair mismatched pictures—this helps in the removal of any visible structural issues during the 360-degree tours of the structure.</p>

                    <h4>360-Degree Panorama Stitching/Real Estate Image Stitching</h4>
                    <p>If processed correctly, a 360-degree panorama photograph may precisely depict the clear view of your real estate property. Our picture editors painstakingly trim and match the photographs before stitching them together to produce a virtual 360-degree property tour. We have trained experts who can carefully mix the details while ensuring no areas overlap within the panorama image. As a leading provider of real estate <strong>360 or 180-degree spherical editing</strong> services, our experts can carefully mix the details while ensuring no area overlaps within the panorama image.</p>

                    <h4>Photo Enhancement For Real Estate</h4>
                    <p>Even if skilled photographers utilize the most excellent camera, some images may have flaws. Photo enhancement may ensure that the color and exposure of a photograph are perfect. Our photo editors can sharpen, fine-tune, color-correct, repair spots, modify, and resize your photos. It will give the virtual tour its much-needed magical touch.</p>

                    <h4>Image Mapping For Real Estate</h4>
                    <p>Our imagery mapping experts are masters in combining virtual tours with floor plans to provide viewers with a comprehensive assessment in the form of a mapped picture. Your consumers will be able to readily link the structure of the space, its proportions, location, and other aspects of the space to other areas of the property and see how the room fits into the overall housing plan.</p>

                    <h4>Branding Your Business</h4>
                    <p>By combining the photographs after 360 degrees, a virtual tour is formed. Each virtual tour is tagged with the logo or company name and other contact information by our photo editing specalists. It gives the shot a tidy and professional appearance while eliminating copying and deterring photo theft.</p>

                    <h4>Image Optimization For Real Estate</h4>
                    <p>The photographs you combine and provide to make a virtual tour must be compatible with your website. You'll need to hire an image optimization company. In this scenario, picture upgrades can help your virtual tours load faster on your site.</p>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">The Benefits Of Using Tech2Globe</h2>
                <p>Here are the various reasons why you should choose to work with Tech2Globe, the best <strong>  real estate virtual tour company</strong>:</p>

                <p className="mb-0"><FaAngleRight /> High-quality services with a track record of success</p>
                <p className="mb-0"><FaAngleRight /> The most up-to-date image editing and stitching software</p>
                <p className="mb-0"><FaAngleRight /> Packages that are within your budget</p>
                <p className="mb-0"><FaAngleRight /> Large-scale initiatives require scalable services</p>
                <p className="mb-0"><FaAngleRight /> Expert and professional staff with the most up-to-date training</p>
                <p className="mb-0"><FaAngleRight /> Image support in a variety of formats</p>
                <p className="mb-0"><FaAngleRight /> Client Support through a single dedicated point of contact</p>
                <p className="mb-0"><FaAngleRight /> Quick turnaround time, response time, and throughput</p>
                <p><FaAngleRight /> Strict adherence to SLA and NDA ensures 100 percent security and privacy.</p>

                <p>Tech2Globe provides 360-degree<strong> real estate virtual tour services</strong> for various real estate projects, including offices, museums, hotels and resorts, villas, educational institutions, and amusement parks, among others. We also provide a wide range of picture editing services to clients all around the world.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>
      </section >

      <div className="PhotoEditPortfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
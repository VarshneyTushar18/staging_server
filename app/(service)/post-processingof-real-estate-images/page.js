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
  title: "Outsource Real Estate Image Post Processing | Tech2globe",
  description:
    "Outsource Real Estate Image Editing Services to Flatworld Solutions & get access to skilled resources who provide quick, efficient, and affordable services.",

  keywords:
    "real estate image post processing, real estate image post processing services, real estate photo editing services,",

  openGraph: {
    title: "Outsource Real Estate Image Post Processing | Tech2globe",
    description:
      "Outsource Real Estate Image Editing Services to Flatworld Solutions & get access to skilled resources who provide quick, efficient, and affordable services.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/post-processingof-real-estate-images",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Real Estate Image Post Processing | Tech2globe",
    description:
      "Outsource Real Estate Image Editing Services to Flatworld Solutions & get access to skilled resources who provide quick, efficient, and affordable services.",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/post-processingof-real-estate-images",
  },
};

const pageHeaderData = {
  title: "Post-Processing Of Real Estate Images",
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

export default function PostProcessingofRealEstateImages() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Post Processingof Real Estate Images" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-post-processing.jpg" />
              <div className={Style.ContentDiv}>

                <p>The quality of your real estate photography has the power to make or destroy negotiations. Our professionals edit and improve the quality of the photographs as part of Tech2Globe's full range of <strong>Real Estate image editing services</strong>. Our clear and appealing photographs reflect the brilliance of your real estate property, inside and out, from remarkable interiors to striking exteriors. We have the skills and technology to edit a large number of real estate photographs, ensuring that they have a good influence on customers' purchasing decisions and assist you in increasing conversions. Our specialists alter the photographs using powerful photo editing tools such as Adobe Photoshop to meet your unique business needs.</p>

              </div>

              <div className={Style.ContentDiv}>

                <h2>Why Choose Our Services?</h2>

                <p>We are one of the <strong>best Photo Editing Companies for Real Estate</strong> in the market. We've worked with a slew of brands, real estate firms, and photographers. We offer high-quality outcomes by utilizing powerful post-processing techniques and software. For working on the photographs, the experts atTech2Globe employ Adobe Illustrator CS2, Photoshop, Corel Draw, Wacom Tablet, and other cutting-edge software.</p>

                <p>JPEG, CAD drawings, TIFF, DXG, DWF drawing files, PSD, and other formats are all accepted. We provide free job samples so you may assess our abilities and efficiency. Our staff is in continual contact with our clients throughout the process, allowing you to monitor the progress of your project. <strong>Outsource real estate editing services</strong> to us and watch your business grow!</p>

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

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h2 className="mb-3">Our Services</h2>
            <p>At Tech2Globe, we provide a full range of services for <strong>the Post-processing of Real Estate Images</strong> to help real estate brokers bring out the most in their photographs. Our devoted team meets our client's expectations and provides straightforward and cost-effective services within the timeframe specified. You can save time, money, effort, and resources if you outsource <strong>real estate retouching services</strong> to us.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/threesixty.jpg" alt="360 Degree Virtual Tour" width={38} height={38} className="img-fluid" />
              <h4>360 Degree Virtual Tour</h4>
              <p className="mb-0">With the help of AI and intelligent technology, a 360-degree virtual tour may transport your potential clients to the edge of reality. We can assist your clients in developing an interest in real estate.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/photo-enhancement.jpg" alt="Photo Enhancement" width={38} height={38} className="img-fluid" />
              <h4>Photo Enhancement</h4>
              <p className="mb-0">We can help you improve your pictures by eliminating distracting components, boosting the quality and arrangement of the images, and deleting items.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/real-estate-panorma.jpg" alt="Real Estate Panoramas" width={38} height={38} className="img-fluid" />
              <h4>Real Estate Panoramas</h4>
              <p className="mb-0">We can turn your real estate photos into 360-degree panoramic views, giving your customers a better picture of the property.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/image-blending-services.jpg" alt="Image Blending" width={38} height={38} className="img-fluid" />
              <h4>Image Blending</h4>
              <p className="mb-0">We assist in creating well-lit and artistically pleasing real estate shots by using the HDR Real Estate Service of mixing images with different exposures.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/3d-floor-plan-conversion.jpg" alt="3D Floor Plan Conversion" width={38} height={38} className="img-fluid" />
              <h4>3D Floor Plan Conversion</h4>
              <p className="mb-0">We can help you enhance the ROI of your real estate websites by converting your simple floor plans into 2D or 3D graphics.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/image-correction.jpg" alt="Image Correction" width={38} height={38} className="img-fluid" />
              <h4>Image Correction</h4>
              <p className="mb-0">We can make your real estate photos seem perfect and capture the attention of potential buyers.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/color-correction.jpg" alt="Color Correction" width={38} height={38} className="img-fluid" />
              <h4>Color Correction</h4>
              <p className="mb-0">Our real estate imaging professionals can help you properly color correct your real estate pictures or images, from altering color tones to eliminating red-eye effects and adding highlights and shadows.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/image-stitching.jpg" alt="Image Stitching" width={38} height={38} className="img-fluid" />
              <h4>Image Stitching</h4>
              <p className="mb-0">We assist you in effectively selling your properties by delivering outstanding image stitching services that combine various photographs to create a stunning 360-degree perspective of your property.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/image-editing.jpg" alt="Image Editing" width={38} height={38} className="img-fluid" />
              <h4>Image Editing</h4>
              <p className="mb-0">We provide a wide range of real estate picture editing services for meeting the overall needs of your business. Our staff of picture editors has decades of expertise in real estate photo editing and retouching.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/perspective-correction.jpg" alt="Perspective Correction" width={38} height={38} className="img-fluid" />
              <h4>Perspective Correction</h4>
              <p className="mb-0">We have the required experience to deliver high-quality real estate perspective correction services to our clients. While providing top-notch services to clients, we make use of the most cutting-edge equipment and technology.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/sky-change.jpg" alt="Sky Change" width={38} height={38} className="img-fluid" />
              <h4>Sky Change</h4>
              <p className="mb-0">Tech2Globe offers the necessary abilities and experience to give clients quality real estate sky change services that are highly realistic. While providing top-notch sky modification services, we make use of the most up-to-date image editing tools.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/blending-hdr-images.jpg" alt="Blending HDR Images" width={38} height={38} className="img-fluid" />
              <h4>Blending HDR Images</h4>
              <p className="mb-0">We can give you the best quality HDR Real Estate Service for image blending at Tech2Globe. Our specialists employ the most up-to-date and finest picture blending software while providing high-quality services to our clients promptly.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/removal-color-cast.jpg" alt="Removal Of Color Cast" width={38} height={38} className="img-fluid" />
              <h4>Removal Of Color Cast</h4>
              <p className="mb-0">Tech2Globe possesses the necessary abilities and knowledge to provide clients with highly accurate color cast removal services for their real estate photographs. At the same time, we are providing the customer with tailored color cast removal services.</p>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/still-image-inhancement.jpg" alt="Still Image Enhancement" width={38} height={38} className="img-fluid" />
              <h4>Still Image Enhancement</h4>
              <p className="mb-0">At Tech2Globe, we have the necessary talents and technology to deliver quality Real estate image processing services to our clients. While providing clients with the highest quality still picture improvement services, we use the most up-to-date techniques and technology.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/photo-enhancement2.jpg" alt="Photo Enhancement" width={38} height={38} className="img-fluid" />
              <h4>Photo Enhancement</h4>
              <p className="mb-0">We provide a wide range of Real Estate Photo Enhancement services that provides high definition photos and textures to your photos.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <Image src="/images/services/service-inner/floor-plan-conversion.jpg" alt="Floor Plan Conversion" width={38} height={38} className="img-fluid" />
              <h4>Floor Plan Conversion</h4>
              <p className="mb-0">When converting a floor plan, you'll need to utilize computer-aided design software like AutoCAD or another design tool. This technique is widely utilized to create rapid and precise drawings of a home's floor plan, and may be done in batches by FWS' floor plan conversion experts.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
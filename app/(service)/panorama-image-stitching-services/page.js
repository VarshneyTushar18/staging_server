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

export const metadata = {
  title: "Panorama Image Stitching Services | Tech2globe",
  description:
    "Sign up with our panorama image stitching services to give your audience a real time experience of 360-degree panorama view of your products.",
  keywords: "",
  openGraph: {
    title: "Panorama Image Stitching Services | Tech2globe",
    description:
      "Sign up with our panorama image stitching services to give your audience a real time experience of 360-degree panorama view of your products.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/panorama-image-stitching-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panorama Image Stitching Services | Tech2globe",
    description:
      "Sign up with our panorama image stitching services to give your audience a real time experience of 360-degree panorama view of your products.",
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/panorama-image-stitching-services",
  },
};

const pageHeaderData = {
  title: "Panorama Image Stitching Services",
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

export default function PanoramaImageStitching() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Panorama Image Stitching Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-panorama-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>If you're a hotelier, realtor, freelance photographer, or have your studio and want to promote your business or house; the 360-degree Photoshop Image Stitching panoramic experience can significantly impact potential buyers. Panorama stitching, also known as picture stitching, is the process of sewing together a series of regular-sized photographic photographs to create a seamless <strong>360-degree panoramic picture</strong>. Your visitors will be able to browse the site with a 360-degree viewing angle visually, and you will also be able to help them distinguish minor characteristics of the assets.</p>

                <p>Tech2Globe's <strong>Panorama Image Stitching Services</strong> may help you combine many images into a single image, providing the appearance of a flawless photograph. Precision attention to more minor details and skill and hands-on experience with sophisticated picture editing techniques are necessary for panoramic photo editing. Photo stitching may also help restore damaged photos, allowing old, washed-out, ripped, and scratched photographs to be readily restored to their former glory.</p>

                <p>A panoramic photograph of real estate is a <strong>single wide-angle picture</strong> of the property that preserves features. The majority of realtors and property owners lack the equipment necessary to take wide-angle images of their properties. Suppose you are a real estate agent or a firm that deals in property sales or leases and have many images of the property taken from various perspectives. In that case, you should use our real estate panorama image stitching services. An accurate wide-angle picture of your home that is far superior to a panoramic!</p>

                <p>Potential clients must rotate their photographs to see the property from various perspectives and inspect it in detail on the Internet. Panorama picture stitching services necessitate a high level of competence and familiarity with the most up-to-date software technologies. Our editors are both creative and professional when creating HDR panoramas from a variety of low-resolution images.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Excellent Panoramic Photo Stitching Services</h2>

                <p className="mb-0"><FaAngleRight /> Rotation and cropping</p>
                <p className="mb-0"><FaAngleRight /> Stitching in full view</p>
                <p className="mb-0"><FaAngleRight /> The horizontal and vertical pictures were stitched and adjusted.</p>
                <p className="mb-0"><FaAngleRight /> Removing spots, shadows, and other unpleasant items.</p>
                <p className="mb-0"><FaAngleRight /> Fine-tuning curves and levels.</p>
                <p className="mb-0"><FaAngleRight /> Filtering of images</p>
                <p className="mb-0"><FaAngleRight /> Adjusting the brightness and contrast</p>
                <p className="mb-0"><FaAngleRight /> Phasing out switchboards and cables.</p>
                <p className="mb-0"><FaAngleRight /> Correctly wrapping, aligning, and placing</p>
                <p className="mb-0"><FaAngleRight /> Changing the colors</p>
                <p><FaAngleRight /> Increasing the depth of the photographs</p>

                <p>Submit your photographs for panoramic stitching and get a price right away.</p>

                <p>You may efficiently sell items and real estate assets with <strong>360-degree panoramic picture</strong> stitching. Allow your prospects and consumers to rotate your items and get a complete picture of them before scrutinizing them in depth. It provides your potential consumers with a realistic experience.</p>

                <p>We have a team of experts at Tech2Globe that have extensive experience with innovative picture stitching techniques. We can merge numerous photos into a <strong>single wide-angle picture</strong> using our panoramic photo stitching services, resulting in 360° panorama photographs, virtual tours, and more. We provide a wide range of panoramic services to meet your needs.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Creation Process For Panoramas</h4>
                <p>To obtain the best results, the process entails numerous processes and highly sophisticated techniques applied to images given by you.</p>

                <p className="mb-0"><FaAngleRight /> <strong>Stitching In Full View:</strong> For circular stitching, rectilinear stitching, spherical stitching, stereographic stitching, and full-frame stitching, our professionals employ the newest picture stitching tools such as PTGui, AutoStitcher, and Panorama Stitcher.</p>
                <p className="mb-0"><FaAngleRight /> <strong>Horizontal And Vertical Immersive Stitching:</strong> We stitch together many horizontal and vertical photos to generate a richer and more immersive composite image than a single sweep conventional panorama.</p>
                <p className="mb-0"><FaAngleRight /> Rotation and cropping</p>
                <p className="mb-0"><FaAngleRight /> Contrast and Brightness Adjustment</p>
                <p className="mb-0"><FaAngleRight /> Matching, warping, and placement</p>
                <p className="mb-0"><FaAngleRight /> Adjusting the Curve and Level</p>
                <p className="mb-0"><FaAngleRight /> QuickTime Movie Files Conversion</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Tech2Globe For Panoramic Photo Editing Services?</h4>
                <p>At Tech2Globe, we only utilize software that is 100 percent legal. Our designers are highly competent, qualified, and well-versed in the most up-to-date Photoshop techniques. When you <strong>outsource panoramic photo stitching</strong> to us, we offer the quickest response time in the industry. We provide coverage 24*7 and are here anytime you need us. Our <strong>image stitching experts</strong> promise 100% satisfaction.</p>

                <p>We follow stringent project safety activities to ensure that you always have optimum security, from frequent image backup to encryption of all types of connections. We use a flexible price system at Tech2Globe to allow our clients to get cost-effective 360-degree panorama picture stitching based on processing time, amount of photographs, service scope, and other factors. Furthermore, the pricing structure may be customized to meet the needs of unique projects.</p>

                <p>Get in touch with us right away!</p>
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
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
  title: "Image Editing - Photoshop, Editing & Retouching Services | Tech2globe",

  description: "Affordable Freelance Photoshop, Editing & Retouching Services. Hire a freelance Photoshop Designer expert services & get your Photoshop project within 24hr.",

  keywords: [
    "clipping path",
    "clipping paths",
    "clipping path services",
    "clipping path service",
    "image clipping path",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/photoshop-services",
  },

  openGraph: {
    title: "Image Editing - Photoshop, Editing & Retouching Services | Tech2globe",
    description: "Affordable Freelance Photoshop, Editing & Retouching Services. Hire a freelance Photoshop Designer expert services & get your Photoshop project within 24hr.",
    url: "https://www.tech2globe.com/photoshop-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Image Editing - Photoshop, Editing & Retouching Services | Tech2globe",
    description: "Affordable Freelance Photoshop, Editing & Retouching Services. Hire a freelance Photoshop Designer expert services & get your Photoshop project within 24hr.",
  },
};

const pageHeaderData = {
  title: "Photoshop Services",
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

export default function PhotoshopServices() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Photoshop Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-state4.jpg" />
              <div className={Style.ContentDiv}>

                <p>Photoshop services refer to the process of editing images in Photoshop that is used to create dynamic images. Outsourcing Adobe <strong>Photoshop Image Editing Services</strong> is the most excellent option if you have a limited budget or have a short-term necessity. It is because an expert will have a sharp eye for defects and will go to great lengths to guarantee that your image appears fantastic when completed. As a result, you may get the most excellent support without having to hire a crew or invest in expensive editing software.</p>

                <p>Tech2Globe is a Photoshop editing outsourcing firm having pro-Photoshop professionals strive to suit the customer's needs through photography post-production. We never sacrifice the quality; thus, we use only the best retouchers. Clients are highly satisfied with our high-quality services, low costs, excellent customer service, and quick response.</p>


              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Services For Adobe Photoshop</h2>
                <p>When you work with Tech2Globe, you may get print-ready images, save money and time hiring an in-house team, and more. Our creative design team has created thousands of designs, and helped several international customers. Our outsourcing procedures are governed by smooth workflow processes, solid infrastructure, licensed software, and 100 percent data security. At Tech2Globe, we ensure that SLA agreements are followed, and that high-quality output is delivered promptly.</p>
                <h4>Photoshop Photo Compositing</h4>
                <p>
                  We are also experts in various other Photoshop services, such as <strong>Photoshop Photo Compositing</strong>. Our team of image editors can composite photos and combine aspects from many images in an attractive way.
                </p>

                <h4>Restoration Of Photographs</h4>
                <p>
                  We utilize the clone stamp tool, pen tool, brush tool, and other tools to remove dust, scratches, stains, and imperfections.
                </p>

                <h4>Converting Raster To Vector</h4>
                <p>
                  Each picture is drawn and traced to create an illustrator vector file or a user-defined format such as TIFF, GIF, PNG, JPEG, AI, EPS, or PSD.
                </p>

                <h4>Color Correction In Photoshop</h4>
                <p>
                  Excess/insufficient color, white balance, luminance, shadows, reflections, colors and contrast, color temperature, intensity, and other issues are addressed.
                </p>

                <h4>Masking An Image</h4>
                <p>
                  We use natural layer masking, transparency masking, and alpha channel masking techniques to provide a genuine feel. For a three-dimensional look, we also insert shadows.
                </p>

                <h4>Background Removal In Photoshop</h4>
                <p>
                  We remove backgrounds from photographs, resize them, and alter any backdrop to a white or transparent background to ensure Amazon, eBay, and other marketplace image compliance.
                </p>

                <h4>Replacement Of The Background</h4>
                <p>
                  Existing backdrops are removed and replaced with white, translucent, or any solid color background, which is ideal for online e-commerce sales.
                </p>

                <h4>Professional Photoshop Image Enhancement Services</h4>
                <p>
                  Our Photoshop professionals improve your raw photographs professionally by eliminating faults, fixing density, and other factors to guarantee that the modified image appears excellent.
                </p>

                <h4>Cleaning Services For Images</h4>
                <p>
                  Some aspects of a photograph must be altered for it to be utilized professionally, such as red-eye, chronic aberrations, spots, etc. We can accomplish it for you at a reasonable price.
                </p>

                <h4>Creation And Optimization Of Shadows</h4>
                <p>
                  To give your photographs a more natural appearance and feel, we use reflection shadows, natural shadows, drop shadows, and original shadows.
                </p>

                <h4>Retouching In Photoshop</h4>
                <p>
                  We retouch your photos to breathe fresh life into them and guarantee that they capture the viewer.
                </p>

                <h4>Photoshop's Special Effects</h4>
                <p>
                  We apply distinctive effects to your bland and uninteresting photographs to make them stand out.
                </p>

                <h4>Noise Reduction</h4>
                <p>
                  We reduce noise and grains in unclear, grainy, and fuzzy photographs, changing them into images that capture potential clients.
                </p>

                <h4>Image Editing In Pop Art</h4>
                <p>
                  Pop art is the most effective approach for marketers to reach a specific demographic with visually appealing material that portrays the comic-book period in an artistic style. It's a strategy for attracting a particular demographic by appealing to their preferences. So get started by scheduling a trial and see for yourself how we can turn your photograph into an iconic piece of art that will help you sell your business.
                </p>

                <h4>Digital Makeup</h4>
                <p>
                  On personal portraits and model photographs, our digital makeup specialists adjust the skin color tone and texture, improve exposure, and provide other digital makeup services while keeping the appearances natural and authentic.
                </p>

                <h4>Adobe Photoshop Clipping Path Services</h4>
                <p>
                  We use Adobe Photoshop to produce hand-drawn clipping paths (vectors) and give several clipping paths for color correction and picture editing.
                </p>

                <h4>Straightening And Rotating</h4>
                <p>
                  We align, rotate at a 90-degree angle, and fine-tune the rotation angle.
                </p>

                <h4>Cropping An Image</h4>
                <p>
                  According to the client's demands, we clip/crop images from their original size and eliminate any borders or objects.
                </p>

                <h4>Including A Watermark</h4>
                <p>
                  Image editors at Tech2Globe put watermarks or branding on each product image to prevent illegal usage of photos.
                </p>

                <h4>Enhancement Of Beauty And Skin</h4>
                <p>
                  We create shadows, smooth fabric creases, and remove skin imperfections, stains, lens glints, and scratches, among other things.
                </p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p>Tech2Globe is a top Adobe Photoshop service provider serving customers for more than a decade. Clipping path, masking, background removal, translucent background, lighting, and contrast changes, among other things, are among our resources' specialties. Our Adobe <strong>Photoshop Image Editing Services</strong> are available at the most competitive prices in the market.</p>

                <p>We can assist you in acquiring a competitive edge, regardless of your industry vertical or necessity, at the most affordable costs. If you want to <strong>hire Photoshop Experts for Editing Services</strong>, please email us with your specifications, and we will revert within 24 hours.</p>
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
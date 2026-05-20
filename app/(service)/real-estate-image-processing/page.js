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
  title: "Real Estate Image Processing Service",
  description:
    "Capture attention with Tech2Globe’s Real Estate Image Processing Service, turning ordinary property photos into visually compelling real estate assets.",

  openGraph: {
    title: "Real Estate Image Processing Service",
    description:
      "Capture attention with Tech2Globe’s Real Estate Image Processing Service, turning ordinary property photos into visually compelling real estate assets.",
    url: "https://www.tech2globe.com/real-estate-image-processing",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Image Processing Service",
    description:
      "Capture attention with Tech2Globe’s Real Estate Image Processing Service, turning ordinary property photos into visually compelling real estate assets.",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/real-estate-image-processing",
  },
};

const pageHeaderData = {
  title: "Real Estate Image Processing",
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
        img: "/images/services/service-inner/real-estate-main.jpg",
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

export default function RealEstateImageProcessing() {


  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Real Estate Image Processing" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-main.jpg" />
              <div className={Style.ContentDiv}>

                <p>Any good realtor today understands the importance of a visually attractive and well-crafted real estate image. In many circumstances, the customer's attraction to the real estate picture determines the sale and no sale. Maintaining a top-notch website with clear and appealing photographs of your real estate homes means that footfall conversion will be high. On the other hand, real estate photographers confront the same issues that they had decades ago - the exterior environment is not always suitable for capturing a real estate shot. Weather conditions, poor lighting, dust, unfavorable settings, background mismatch, and other environmental elements, all lead to a distorted image result.</p>

                <p>It is why real estate image processing is such an essential aspect of any real estate firm's marketing and sales process. To save money and efforts, it's an excellent idea to outsource real estate photo editing services to a professional company like Tech2Globe, comprising of a skilled team with years of expertise.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h3 className="pt-3">Our Services For Real Estate Image Processing</h3>
                <p>We offer world-class <strong>real estate image processing services</strong> at Tech2Globe. Our network of industry-recognized, highly skilled and experienced image editors with decades of expertise will ensure that your real estate images turn out to increase your revenue by attracting more consumer base to your business.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Image Blending</h5>
                    <hr />
                    <p>Tech2Globe's Image Blending Service may help you produce a variety of exposures in a real estate product image by merging and utilizing the HDR method that makes the images artistically pleasing.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Photo Enhancement</h5>
                    <hr />
                    <p>Still-Image Enhancement Services from Tech2Globe may simultaneously boost visual enhancement, color correction, sharpness, and contrast. By using a still picture enhancement solution for your company's interior and exterior real estate part, you may increase the texture and clarity by a factor of ten.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Remove Color Casts</h5>
                    <hr />
                    <p>To erase any traces of color casting, our picture editing professionals use the most up-to-date image editing tools and procedures. We provide you with finished results for clearer images. Furthermore, our experts remove any existing color tints and imperfections for <strong>real estate home process images</strong> and restore the white balance.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Changes In Perspective Correction</h5>
                    <hr />
                    <p>All of your <strong>digital image processing for real estate</strong> needs are understood and considered by us while working on your project. Our skilled experts provide excellent editing solutions without sacrificing the quality of your real estate product image to repair all forms of linear and textual perspective distortions, whether asymmetrical or irregular geometric.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Sky Replacement</h5>
                    <hr />
                    <p>Our experts will help to get the dull shot to life by changing the background, particularly the gloomy sky. It will be replaced with bright, fresh daylight to improve the visual look of real estate products.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Floor Plan Conversions</h5>
                    <hr />
                    <p>We can turn all of your real estate purchasers' unfavorable visual floor plans into 2D and 3D visuals, allowing you to leave a lasting impact on them. This favorable modification in your real estate photos has the potential to enhance your real estate business's internet queries. With a short turnaround period, Tech2Globe provides superior floor plan conversion services.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Drone Image Editing</h5>
                    <hr />
                    <p>Our Drone Image Editing Service not only process photographs through the camera lens but also has a fully defined infrastructure to produce images captured by multi-copter. This type of service enables us to improve the quality of your real estate photographs by cutting or leveling overgrown lawns, reducing lengthy shadows, and removing unsightly items in front of your buildings, among other things.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>360 Degree Virtual Tour Creation</h5>
                    <hr />
                    <p>We are a professional real estate picture editing business specializing in creating a thorough virtual tour of your real estate company's merchandise through images. Our trained team of editors can stitch together various photographs to create a unique and enchanting experience for your real estate listings.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Converting From Day To Night</h5>
                    <hr />
                    <p>Many markings, dark spots, or even a blob are left behind during the photography of any Real Estate Image, which may make the image seem strange and reduce the value of your real estate in various ways. <strong>Real estate Image Retouching Services</strong> can make your real estate photographs more appealing to potential buyers. For variation in your real estate photographs, our team knows how to produce a stunning natural appearance for both daylight and nighttime.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Image Stitching</h5>
                    <hr />
                    <p>Your real estate photographs are handled through correctly classified channels when you work with us. We have in-house specialists that can make panorama photographs using the most up-to-date stitching techniques available.</p>
                  </div>

                  <div className="col-md-6">
                    <h5>Panoramas Of Real Estate</h5>
                    <hr />
                    <p>Real Estate Images must convey all of your property's most important features to your buyers. With your interpretative lens, our team pledges to provide professional real estate panorama service to ensure that all outstanding elements and corners of your real estate property are effectively displayed to clients. We can turn your real estate photos into a 360-degree panoramic view, giving your consumers a better overall perspective of the property.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Us?</h2>
                <p>Every standard and specialized picture retouching, masking, and enhancement demand is met by our world-class group of digital image editing pros. Our <strong>Real Estate Image Processing Services</strong> have always focused on three things: innovation, client happiness, and high-quality work. It has helped us stand out from the crowd and establish ourselves as a trustworthy partner to a large number of respected real estate firms looking for thousands of photographs to enhance their sales across the world. We've built a solid infrastructure to meet tight deadlines and provide on-time service for high-volume projects.</p>
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
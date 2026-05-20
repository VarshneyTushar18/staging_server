import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Photo Cutout Services | Image Cutout Services | Tech2globe",
  description:
    "Elevate your visuals with Tech2Globe’s top-notch Photo Cutout services. Our skilled team ensures precision in Image Cutout services for stunning and impactful results.",
  keywords: "",
  openGraph: {
    title: "Photo Cutout Services | Image Cutout Services | Tech2globe",
    description:
      "Elevate your visuals with Tech2Globe’s top-notch Photo Cutout services. Our skilled team ensures precision in Image Cutout services for stunning and impactful results.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/photo-cutout-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Cutout Services | Image Cutout Services | Tech2globe",
    description:
      "Elevate your visuals with Tech2Globe’s top-notch Photo Cutout services. Our skilled team ensures precision in Image Cutout services for stunning and impactful results.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/photo-cutout-services",
  },
};

const pageHeaderData = {
  title: "Photo Cutout Services",
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
  { id: 1, name: "Image Clipping", path: "/image-clipping" },
  { id: 2, name: "Photo Cutout Services", path: "/photo-cutout-services" },
  { id: 3, name: "Clipping Path Services", path: "/clipping-path-services" },
  { id: 4, name: "Image Tracing Services", path: "/image-tracing-services" },
  { id: 5, name: "Hair Masking Services", path: "/hair-masking-services" },
  { id: 6, name: "Image Manipulation Services", path: "/image-manipulation-services" },
  { id: 7, name: "Car Image Clipping", path: "/car-image-clipping" },
  { id: 8, name: "Image Masking Services", path: "/image-masking-services" },
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
        img: "/images/services/service-inner/portfolio/image-clipping-photo-cutout-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-photo-cutout-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-photo-cutout-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-clipping-photo-cutout-portfolio-4.jpg",
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

export default function PhotoCutout() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Photo Cutout Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-photo-cutout-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Digital image editing has aided the photography industry's exponential growth and development. Photo editing services such as <strong>Image cutout services</strong> have allowed simple photographs to transform into opulent and professional-looking images. Photo cutout is mainly used to draw viewers' attention to a particular object or distinguish between two things in an image. Tech2Globe is a renowned picture cutout service provider offering the best-in-class image backdrop removal services at affordable prices.</p>

                <p>Thanks to our professional image editors and cutting-edge infrastructure. Our repeated customers are from fashion studios, picture studios, commercial, freelance, amateur photographers, real estate agencies, e-commerce enterprises, vehicle companies, and other businesses.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">The Image Cutout Services We Offer</h2>
                <p>When submitting photos for an ecommerce store, printed media or any other platform, it is important to remove the background. Tech2Globe is a picture editing company that has worked with clients in many different industries. Which is why we can better serve our clients because of our extensive experience in picture editing. Here are some of the most popular Photography cutouts we offer:</p>

                <p className="mb-0"><FaAngleRight /> Product Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> Automobile Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> Food Image Cutout</p>
                <p className="mb-0"><FaAngleRight /> Furniture Image Cutout</p>
                <p className="mb-0"><FaAngleRight /> Fashion Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> e-commerce Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> Real Estate Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> Wildlife Photo Cutout</p>
                <p className="mb-0"><FaAngleRight /> Jewelry Image Cutout</p>
                <p><FaAngleRight /> Travel Image Cutout</p>

                <p>Our services aren't restricted to those listed above and can be tailored to meet the specific needs of our clients.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Should You Hire Us For Image Cutout Services?</h4>
                <p>Tech2Globe, being one of the leading picture editing companies in the world, has increased revenue by receiving high-quality results quickly. Our clients are mostly returning customers, who trust us with their cutouts.</p>

                <p>Our photo editors have the necessary training and expertise to meet a variety of image cutout requests. Our editors have experience with the latest image editing technologies and software, such as Adobe Photoshop CS6, PTGUI Illustrator, Lightroom etc. and image extraction is a service we offer at affordable prices. You can rest assured that all photographs submitted to us will be secure because our experts follow strict workstation data security and confidentiality agreements. We can quickly deliver altered photos through our global distribution network.</p>

                <p>At Tech2globe, we believe in giving our customers the most incredible experience possible and building long-term partnerships through our work. We have quality control measures in place and a track record of delivering high-quality photos with a 98% accuracy rate.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Outsource Photo Cutout Services To Tech2Globe</h4>
                <p>For many years, Tech2Globe has been catering to clients all over the world with high-quality Photography cutout services as well as a variety of additional image editing services. Clients can save a significant amount of time by using our cost-effective services.</p>

                <p>We upload your photos to our secure FTP server, edit them as per your instructions, and deliver the final product within a few days. You can also be assured that all photographs submitted to us will remain secure because we adhere to strict data security procedures. Our ISO-certified procedures ensure that we deliver high-quality results.</p>

                <p>The processes associated with the photo cutout transparent images service don't require much explanation. The focusing process involves removing the backdrop from the whole image and for this hand-drawn procedure, we employ Clipping Path, Images Masking, and other techniques. With the isolation procedure, the image cutout Photoshop operation is prevalent and accurate.</p>

                <p>You've arrived at the right place if you're seeking highly accurate and dependable Photography cutout services.</p>

                <p>Contact us now!</p>

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
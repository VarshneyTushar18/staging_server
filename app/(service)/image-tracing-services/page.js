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
  title: "Best and 100% Quality Image Tracing Service | Tech2gobe ",
  description:
    "If you want to get a manual vector conversion service, take our image tracing service in Illustrator. We are the best image tracing and vector conversion provider",
  keywords:
    "clipping path, clipping paths, clipping path services, clipping path service, image clipping path",
  openGraph: {
    title: "Best and 100% Quality Image Tracing Service | Tech2gobe ",
    description:
      "If you want to get a manual vector conversion service, take our image tracing service in Illustrator. We are the best image tracing and vector conversion provider",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/image-tracing-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best and 100% Quality Image Tracing Service | Tech2gobe ",
    description:
      "If you want to get a manual vector conversion service, take our image tracing service in Illustrator. We are the best image tracing and vector conversion provider",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/image-tracing-services",
  },
};

const pageHeaderData = {
  title: "Image Tracing Services",
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
        img: "/images/services/service-inner/portfolio/image-clipping-image-taracing-services.jpg",
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

export default function ImageTracing() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Tracing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-clipping-image-taracing-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>When photographers take product shots, it is anticipated that only the object in issue is highlighted and nothing else. However, because specific scenarios are not always conducive to obtaining high-quality images that may appear blown up in certain circumstances, an appropriate level of image tracing is required to focus on the object in question. It is mostly true for marketing content, which must be clear of any distracting backdrops or other distortions in the background. Tech2Globe is pretty familiar with this need and offers outstanding picture tracing services to clients from many verticals and sectors. Our picture editors are experts in <strong>Real Estate Image Tracing</strong> and ensure a highly professional result each time. Using our image tracing algorithms, we can produce raster graphics in nearly any file format, along with assuring quick delivery and high-quality final pictures.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Vector Image Tracing Services At Tech2Globe</h2>

                <p><strong>Converting Raster To Vector Experts</strong> at Tech2Globe can help you with the best <strong>Vector conversion service</strong>. We re-image the bitmap graphics into vector images, which you can stretch to any size without losing quality.</p>
                <p><strong>Editing Vector Graphics</strong> Our graphics editors interactively edit and create vector graphics images, including clipping paths, photo manipulation, and more, before sharing them in PDF, EPS, WMF, VML, and SVG formats.</p>
                <p><strong>Path Of Clipping</strong> A closed vector path known as the clipping path which is used to cut 2D pictures, is also implemented by our expert team. After applying the clipping path, we include the component inside the path while omitting the items outside the path.</p>
                <p><strong>Services For Image Masking</strong> Tech2Globe's expert image editors include non-destructive picture masking, which allows us to conceal some sections of an image while highlighting others. Edges, motion, and noise are detected, and you can adjust the masks at any time.</p>
                <p><strong>Services For Color Correction</strong> Our picture editing specialists help our clients achieve success by modifying color tones, enhancing needed areas, removing red-eye effects, and more based on business needs.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">What Is The Need For Image Tracing?</h4>
                <p>You anticipate professional-touch cropping around the edges which highlights all around when uploading items and product photographs to your website. Regardless of the picture or items in the shot, the cropping must be precise, and the image must appeal to the viewers.</p>

                <p>Hand cropping may be challenging at times, and there's a risk that essential details will be lost. As a result, picture tracing is always the ideal option for such tasks. To provide high-quality Vector tracing services, Tech2Globe employs some of the most cutting-edge tools and technology. After that, the traced photos are put on the appropriate background of your choice. We do the needed picture tracing using the most up-to-date licensed software, resulting in flawless photos that you may use on your marketing or advertising strategies.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Us?</h4>
                <p>Nobody can deny the importance of a correctly cropped image when it comes to product promotion. Photographs that are appealing are proven to attract both new and existing clients more effectively than images of ordinary quality. As a result, you'll need a competent picture tracing service provider who can meet your needs and create a stunning set of photographs that you can use in marketing campaigns and online product presentations.</p>

                <p>Below are the most compelling reasons to choose Tech2Globe to provide <strong>Photo tracing services:</strong></p>

                <p className="mb-0"><FaAngleRight /> To provide high-quality services, our picture editors employ the most up-to-date tools and modern photo editing procedures.</p>
                <p className="mb-0"><FaAngleRight /> We use ISO-compliant procedures and conduct frequent audits to ensure that our services are consistent.</p>
                <p className="mb-0"><FaAngleRight /> We provide the most competitive rates in the market.</p>
                <p className="mb-0"><FaAngleRight /> We are capable of offering cutting-edge services since we have a team of skilled and experienced individuals.</p>
                <p className="mb-0"><FaAngleRight /> We use the most current database technology to assure data integrity and total protection of your personal information.</p>
                <p><FaAngleRight /> When Jewelry Image Tracing services are outsourced to us, we give considerable cost savings and time-saving benefits.</p>

                <p>At Tech2Globe, we provide our clients with the best <strong>Vector tracing services</strong> available, all of which are designed to produce the best results at the most affordable pricing. Our experts meticulously produce any photograph that requires image tracing to the minute details using the most up-to-date equipment.Our image tracing experts ensure that no critical elements in the image are lost during the tracing process.</p>

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
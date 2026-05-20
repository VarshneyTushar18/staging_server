import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";

export const metadata = {
  title: "Efficient Bulk Image Conversion Services for Your Business Needs - Tech2Globe",

  description: "Tech2Globe offers efficient bulk image conversion services for all your business needs. Enhance productivity with streamlined processes!",

  alternates: {
    canonical: "https://www.tech2globe.com/bulk-image-conversion",
  },

  openGraph: {
    title:
      "Efficient Bulk Image Conversion Services for Your Business Needs - Tech2Globe",
    description:
      "Tech2Globe offers efficient bulk image conversion services for all your business needs. Enhance productivity with streamlined processes!",
    url: "https://www.tech2globe.com/bulk-image-conversion",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Efficient Bulk Image Conversion Services for Your Business Needs - Tech2Globe",
    description:
      "Tech2Globe offers efficient bulk image conversion services for all your business needs. Enhance productivity with streamlined processes!",
  }
};

const pageHeaderData = {
  title: "Bulk Image Conversion",
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

export default function BulkImageConversion() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Bulk Image Conversion" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/bulk-image-converson.jpg" />
              <div className={Style.ContentDiv}>

                <p>Do you have many picture files that you'd want to organize and convert into a specific format to meet your business's needs? Are you having trouble finding time to execute your bulk image conversion due to high workload? Are you seeking a service that can convert your photographic data into specific formats such as JPEG, GIF, PNG, and Excel, Word, Text, and PDF? Tech2Globe image editing experts are here to help you with all of this. Bulk image conversion services have become increasingly popular in recent years. Because of the freedom of working with photos in numerous formats, editors choose to do so. These formats take up less space on hard drives and other storage devices. Each file format has its benefits that other file formats lack. That is why converting a file into another usable format is the best approach to work on it or gain access to a specific function. However, doing so necessitates knowledge of file conversions and experience with file conversion applications and tools. The most excellent option for professional results is to <strong>Outsource Bulk Image Conversion Services</strong>.</p>
                <p>Tech2Globe is a well-known company offering bulk image conversion services in India and internationally. Also, our experts will assist you in converting your photographs to the desired format you choose. We employ the most advanced and comprehensive bulk image conversion tools and technologies to convert photographs in mass to the appropriate format. In addition, our skilled picture editors have years of expertise dealing with various image types and can easily handle any of your bulk image conversion needs.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Bulk Image Conversion Services</h2>
                <p>Offering a full array of bulk photo conversion services, Tech2Globe is a well-known mass image conversion service provider. Furthermore, our Advanced Batch Image Conversion services have benefited customers from all over the world. Our staff of picture editing professionals understand how to take your photos and convert them to the format you want without sacrificing quality.</p>
                <p>You may concentrate on other critical activities while we handle the time-consuming task of converting your photographs from one format to another. Tech2Globe provides a wide range of image conversion services to businesses of all kinds, as well as individuals:</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> PDF To Text Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> PDF To TIFF Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> JPEG To Text Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> TIFF To PDF Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> TIFF To Word Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Image into Excel format Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Image into database format Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Image into HTML format Conversion</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Image into Word format Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Image into PDF format Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Convert multiple images to JPEG</p>
                    <p className="mb-0"><FaHandPointRight /> Document imaging</p>
                    <p className="mb-0"><FaHandPointRight /> Word to image file Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> PDF into image file Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Excel to image file Conversion</p>
                    <p className="mb-0"><FaHandPointRight /> Convert multiple images to PNG</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Process</h4>
                <p>We can tailor our methods to meet your individual needs, but in general, we follow the steps below:</p>
                <p className="mb-0"><strong>Analysis Of Requirements</strong> After you approach us with your batch image processing needs, our experienced editors will contact you to learn more about your specific needs and to discuss price, timeframes, and workforce requirements, among other things.</p>
                <p className="mb-0"><strong>Initializing the Plan</strong> We will offer you a plan of action when we have achieved an agreement on terms and needs. According to the plan and your needs, you can send us all of your files via a secure FTP connection or you may use a file-sharing service, whatever you prefer.</p>
                <p className="mb-0"><strong>Conversion Process </strong> To make sure there are no errors and that every file is converted to the correct format, we maintain a thorough record of every file during the conversion process.</p>
                <p className="mb-0"><strong>Checking For Quality </strong> To guarantee that all files are converted to the right target format with the best quality, we always double-check all outputs against the specifications and original input files.</p>
                <p><strong>Delivery Of The Final Product</strong> We transfer the modified files to your servers via a secure FTP route or any other sharing solution you like.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Choose Tech2Globe For Bulk Image Conversion Services?</h2>
                <p>As a renowned bulk image conversion firm, we have assisted several people and businesses effectively by converting their picture files into their chosen format. Our Advanced Batch Image Converting services are pretty affordable, and we also provide bulk discounts. In addition, we are an ISO-certified firm that consistently offers the most up-to-date mass image-converting solutions.</p>

                <p>As a top bulk image conversion service provider, we take all precautions to ensure that your data is always secure. We can offer state-of-the-art and reasonably priced services since our crew is knowledgeable enough to use the newest and best bulk picture-converting software.</p>

                <p>Our bulk image conversion services are provided in the highest quality using cutting-edge equipment and methods. By employing efficient and systematic bulk image converting techniques we work to continuously provide high-quality services. Get in touch with us immediately if you seek professional, reliable, and cost-effective bulk image-converting services!</p>
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
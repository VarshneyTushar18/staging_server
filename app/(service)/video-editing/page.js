import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandPointRight, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Free Online Video Editor | Tech2globe",
  description:
    "Create amazing videos with Clipchamp’s easy drag-and-drop video editor that has pro features and designer video templates. No downloads required. Trim, cut or crop any video, add transitions and even edit green screen videos quickly.",
  alternates: {
    canonical: "https://www.tech2globe.com/video-editing",
  },
  openGraph: {
    title: "Free Online Video Editor | Tech2globe",
    description:
      "Create amazing videos with Clipchamp’s easy drag-and-drop video editor that has pro features and designer video templates. No downloads required. Trim, cut or crop any video, add transitions and even edit green screen videos quickly.",
    url: "https://www.tech2globe.com/video-editing",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Video Editor | Tech2globe",
    description:
      "Create amazing videos with Clipchamp’s easy drag-and-drop video editor that has pro features and designer video templates. No downloads required. Trim, cut or crop any video, add transitions and even edit green screen videos quickly.",
  }
};

const pageHeaderData = {
  title: "Video Editing",
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

export default function VideoEditing() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Video Editing" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-state4.jpg" />
              <div className={Style.ContentDiv}>

                <p>The value of video recording in the fields of entertainment, sports, education, and any other unique occasion cannot be overstated. When video recording has made such an incredible impact on our lives, it's no surprise that video editing services have risen to such prominence in the market. Tech2Globe stands out among the various video editing service providers, giving exceptional services at affordable costs.</p>

                <p>Our video editing services can change your raw or bare edited films into something professional, eye-catching, and goal-oriented. Our skilled video editors use the best editing software and techniques to give your films a rich and captivating look. With an excellent video post-production team at Tech2Globe, we provide the finest <strong>video editing services in India</strong> for weddings, corporate films, event clips, product videos catalogs, and YouTube videos.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Who Can Use Our Services?</h4>
                <p>If you are an aspiring or established YouTube celebrity, we are dedicated to providing you with the best <strong>YouTube video editing services</strong>. Or if you want to avail our <strong>wedding video editing services</strong> that can transform any wedding movie into a fairy tale in any cultural environment and at any time of year. We can assist you with selecting the best video, doing color correction and grading, and stabilizing shots filmed with drones.</p>

                <p>Corporates, hospitals, travel agencies, hotels & resorts regularly utilize Tech2Globe's <strong> Professional HD video Editing Services</strong> to make their films seem great. Our team of experts provides professional <strong>corporate video editing</strong> services for business presentations, marketing films, and training videos.</p>

                <p>Our editors have worked on various projects, including wedding video editing, documentary editing, vacation video editing, and home video editing. Our specialists can edit your videos in a customized manner and offer them within the project frame. We also provide highly customized video editing services to content producers, families, and documentary filmmakers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3 pb-3">Our Most Requested Services</h4>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Professional Video Editing</h5>
                    <hr />
                    <p>Extreme sports or adventure photography, such as car racing, skydiving, or catching the cheetah rushing, require the most excellent video editors to make every frame meaningful because that is what will set you apart.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Video Editing For Weddings</h5>
                    <hr />
                    <p>Memories should be preserved, and romanticism should be immortalized in a wedding movie. We employ our experience to capture the excitement and pleasure of the couple, the festivities, and the stress of the event. We work with wedding planners, videographers, and even couples to ensure their memories endure a lifetime.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Video Editing Services For Training</h5>
                    <hr />
                    <p>Universities use online videos to teach their students remotely, while businesses use them for training their employees on the job. Whatever the goal, the difference between a good training video and a terrible one is frequently the editing and captioning that goes with it, not the content or the trainer. We are the most incredible video editors in the business when it comes to creating training films for various purposes and audiences.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Commercials And TV Shows Services</h5>
                    <hr />
                    <p>The most common users of video editing services are cable and satellite television. On a local, regional, and national level, the quantity of channels available is staggering. For its broadcasts and ads, every 24-hour station needs professionally edited films. We collaborate with creative directors, art directors, and show producers to edit their films according to the script's requirements and the channel's limitations.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Video Editing For Business Presentations</h5>
                    <hr />
                    <p>We can help you if you are a visionary who wants to express your tale with dynamic graphics rather than monotonous charts. Alternatively, whether you want to create presentations for CD distribution, kiosk playback, or auto-play on your website, we can help you.</p>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Editing Services For Videos</h2>
                <p>We provide multiple video editing services, including:</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Cuts & transitions</p>
                    <p className="mb-0"><FaHandPointRight /> 360-degree video tours</p>
                    <p className="mb-0"><FaHandPointRight /> Color grading</p>
                    <p className="mb-0"><FaHandPointRight /> Audio mixing & adding background score</p>
                    <p className="mb-0"><FaHandPointRight /> Adding animation to videos</p>
                    <p className="mb-0"><FaHandPointRight /> Picture stabilization</p>
                    <p className="mb-0"><FaHandPointRight /> Titles and text overlays</p>
                    <p><FaHandPointRight /> Motion graphics</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Background noise removal</p>
                    <p className="mb-0"><FaHandPointRight /> Adding special effects</p>
                    <p className="mb-0"><FaHandPointRight /> Color correction</p>
                    <p className="mb-0"><FaHandPointRight /> Shot sequencing</p>
                    <p className="mb-0"><FaHandPointRight /> Video cropping and clipping</p>
                    <p className="mb-0"><FaHandPointRight /> Stabilizing drone footage</p>
                    <p className="mb-0"><FaHandPointRight /> Defective pixel correction</p>
                    <p><FaHandPointRight /> Travel video editing service</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Us?</h4>
                <p>We work around the clock to fulfill deadlines and offer economical parallel video editing services. Our video editors have diverse skills that enable them to offer a wide range of <strong>Professional HD Video Editing Services</strong>. We do quality checks at each stage of the video editing process to guarantee that all rules are followed. In addition, we collaborate with the customer to assess and maintain the requirements until the project is completed. Our specialists edit anything from wedding films to explainer animation movies.</p>
                <p>Choose us for high-quality video editing services!</p>
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

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>
    </>
  )
};
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
  title: "Outsource Skin Retouching Services | Tech2globe",
  description:
    "Tech2gobe provides high-quality skin retouching services to clients around the world at cost-effective rates starting at $7/hour. Contact us now!",

  openGraph: {
    title: "Outsource Skin Retouching Services | Tech2globe",
    description:
      "Tech2gobe provides high-quality skin retouching services to clients around the world at cost-effective rates starting at $7/hour. Contact us now!",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/skin-retouching-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Skin Retouching Services | Tech2globe",
    description:
      "Tech2gobe provides high-quality skin retouching services to clients around the world at cost-effective rates starting at $7/hour. Contact us now!",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/skin-retouching-services",
  },
};

const pageHeaderData = {
  title: "Skin Retouching Services",
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

const portfolio = [
  {
    title: "CATALOGUING",
    items: [
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-skin-retouching-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-skin-retouching-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-skin-retouching-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/image-enhancement-skin-retouching-portfolio-4.jpg",
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

export default function SkinRetouching() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Skin Retouching Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/image-enhancement-skin-retouching-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>It's all about catching the ideal moments and keeping the memories for all time in the form of photographs. From a photographer's marketing standpoint, it's critical that every shot taken is flawless and leaves a lasting impact on the viewer. Professional photographers must deliver the outstanding results every time and capture the subject's best attributes in their purest form. Tech2Globe's high-quality <strong>picture skin retouching services</strong> assist such photographers in achieving the most satisfactory outcomes. Closed eyelids, age marks, warts, and other flaws in photographs taken by photographers can stick out and destroy the overall shot. In these circumstances, skin retouching can work wonders for photographers who can use image editing services.</p>

              </div>

              <div className={Style.ContentDiv}>

                <h2 className="pt-3">Our Skin Retouching Services</h2>

                <p>Tech2Globe is a significant <strong>skin retouching service</strong> provider that provides unmatched image retouching services to global clients at extremely low pricing. Portrait picture retouching, photoshop skin retouching, and advanced skin retouching are some of the high-end skin retouching services we provide. To guarantee that the final image looks appealing, we concentrate on minimizing blemishes, erasing any skin markings, fixing colors, and boosting the appearance of skin health.</p>

                <p>With years of expertise in photo editing and retouching, we feel that skin retouching is one of the most significant components of photographs taken for big events and celebrations. Photographers who take photos encounter several challenges, making it incredibly tough for them to provide exceptional images.</p>

                <h4>Retouching Of Scars</h4>
                <p>Is there a client who is conscious about scars? For flawless-looking skin, Tech2Globe may use sophisticated processes to lighten or remove old wound marks using a variety of Photoshop skin editing methods. Our <strong>Scars Retouching Services in India</strong> enable you to get smooth, silky, and attractive skin.</p>

                <h4>Enhancement Of Color</h4>
                <p>Our comprehensive <strong>Skin Color Enhancement Services</strong> improve the overall color of the image and the color of the skin, making it appear healthy and perfect.</p>

                <h4>Retouching Wrinkles</h4>
                <p>Our <strong>Skin Wrinkles Retouching Services</strong> can drastically eliminate wrinkles on a model's face and make the skin appear younger and perfect.</p>

                <h4>Acne Or Blemishes Removal</h4>
                <p>For Tech2Globe, acne blemishes aren't a concern. Blackheads, pimples, age spots, and even pimple scarring marks can be eliminated to achieve a refined yet natural look.</p>

                <h4>Retouching Of The Skin Tone</h4>
                <p>Every skin tone is inherently attractive, and our techniques make the model's skin seem flawless. Our high-end professional skin retouching services correct skin tone for a perfect appearance.</p>

                <h4>Whitening Teeth</h4>
                <p>Tech2Globe can whiten teeth, straighten teeth, and remove braces from photographs.</p>

                <h4>Enhancing Your Eyes</h4>
                <p>Our <strong>Enhancing Eyes Image Editing Services</strong> can make sure that your eyes appear their best in portraits and other photos by employing color boosting methods and eliminating things like under-eye shadows.</p>

                <h4>Smoothing Skin</h4>
                <p>Our experts help you achieve a naturally radiant and healthy complexion by smoothing your skin. We can remove large pores and other slight changes in skin texture without giving the appearance of being artificial or synthetic.</p>

                <h4>Airbrushing</h4>
                <p>To give the model's skin a wonderfully smooth texture, our professionals apply innovative airbrushing procedures.</p>

                <h4>Hair Shine And Detail</h4>
                <p>We employ innovative techniques to bring out the intricacies in your hair and make it shine and appear healthy.</p>

                <h4>Getting Rid Of Redness</h4>
                <p>Correcting skin redness, whether for sunburns or flushing, is one of the most challenging adjustments to do. Tech2Globe's color channel specialists can remove the redness without compromising the remainder of the image's colors and tones.</p>

                <h4>Other Retouching Services For The Skin</h4>
                <p>We are also qualified to provide the following services:</p>

                <p className="mb-0"><FaAngleRight/> Changing your clothes</p>
                <p className="mb-0"><FaAngleRight/> Slimming down</p>
                <p className="mb-0"><FaAngleRight/> Corrections to Color and Exposure</p>
                <p className="mb-0"><FaAngleRight/> Enhancement of color</p>
                <p className="mb-0"><FaAngleRight/> Opening Eyes</p>
                <p className="mb-0"><FaAngleRight/> Enhancement of Makeup</p>
                <p className="mb-0"><FaAngleRight/> Toning of the Skin</p>
                <p className="mb-0"><FaAngleRight/> Hairstyle Modification</p>
                <p><FaAngleRight/> Shine Restoration and Hair Details</p>
                
              </div>

              <div className={Style.ContentDiv}>

                <h2 className="pt-3">Our Photo Retouching Techniques For Skin</h2>
                <p>As a provider of glamor enhancement services, we employ a variety of picture skin retouching procedures. However, there are three main strategies we employ to increase overall picture quality and eliminate image faults.</p>

                <h4>Technique For A Touch-Up Layer</h4>
                <p>When retouching the skin in photos, a primary method may frequently help you reach your goals. The touch-up layer technique is based on this basic idea, and it involves applying a touch-up layer to the skin to cover up undesired areas. It also works great to remove dust and lint, cosmetic flakes, microscopic hair strands, or any stray hair that has popped out of places it shouldn't. Retouching patches of hot spots or blotchy skin, on the other hand, is not possible with this approach.</p>

                <h4>Technique Of Frequency Separation</h4>
                <p>When more is required to obtain attractive, glowing skin, the touch-up layer approach may not be practical, and we may need to use the frequency separation technique instead. It enables us to apply touch-ups without compromising the skin's texture. It's also great for blending or smoothing out makeup that hasn't blended or caked up.</p>

                <h4>ByRo's Method</h4>
                <p>The ByRO method, named after its creator, is an effective treatment for general skin smoothening while preserving its texture.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Outsource Skin Retouching To Tech2Globe</h2>
                <p>Tech2Globe is a full-service <strong>skin retouching agency</strong> that also offers a variety of other picture editing services. We have a staff of expert picture editors skilled in delivering high-quality skin retouching services using modern techniques and cutting-edge technology.</p>

                <p>Our expert editors take your photos to the next level by increasing their overall attractiveness, from blemish removal to complicated image arrangement. We refine and optimize your photographs when you <strong>outsource photo skin retouching services</strong> to us, ensuring that they are as beautiful as possible.</p>
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
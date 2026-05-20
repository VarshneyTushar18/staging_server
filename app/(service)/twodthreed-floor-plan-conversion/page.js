import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "2D to 3D Floor Plan Converter by The 2D3D Floor Plan Company | Tech2globe",
  description: "2D to 3D Floor Plan Converter – Professional, Quick & Unbeatable Price: We do convert 2D plans, images, sketches to 3D floor plans at unbeatable prices.",

  alternates: {
    canonical: "https://www.tech2globe.com/twodthreed-floor-plan-conversion",
  },

  openGraph: {
    title:
      "2D to 3D Floor Plan Converter by The 2D3D Floor Plan Company | Tech2globe",
    description:
      "2D to 3D Floor Plan Converter – Professional, Quick & Unbeatable Price: We do convert 2D plans, images, sketches to 3D floor plans at unbeatable prices.",
    url: "https://www.tech2globe.com/twodthreed-floor-plan-conversion",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "2D to 3D Floor Plan Converter by The 2D3D Floor Plan Company | Tech2globe",
    description:
      "2D to 3D Floor Plan Converter – Professional, Quick & Unbeatable Price: We do convert 2D plans, images, sketches to 3D floor plans at unbeatable prices.",
  }
};

const pageHeaderData = {
  title: "2D/3D Floor Plan Conversions",
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
        img: "/images/services/service-inner/portfolio/real-estate-2D-3D-floor-plan-conversions-portfolio-1.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-2D-3D-floor-plan-conversions-portfolio-2.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-2D-3D-floor-plan-conversions-portfolio-3.jpg",
      },
      {
        title: "",
        link: "",
        img: "/images/services/service-inner/portfolio/real-estate-2D-3D-floor-plan-conversions-portfolio-4.jpg",
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

export default function TwodthreedFloorPlanConversion() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Twodthreed Floor Plan Conversion" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="" imageSrc="/images/services/service-inner/real-estate-2D-3D-floor-plan-conversions-services.jpg" />
              <div className={Style.ContentDiv}>

                <p>Most clients cannot go through the original floor plans and drawings; therefore, including them with your property listing has little relevance. Instead, giving your clients clear and thorough 2D or 3D floor plans would help them comprehend the property better. For example, they may determine the amount of space available and the layout and setting of any room, hallway, or property. In addition, making it easy for the buyer to imagine how the property flows is a sure-fire approach to increase property listing views.</p>

                <p>Tech2Globe's real estate <strong>Floor Plan Conversion Services</strong> allow you to display a precise space layout of your property. With our innovative, dynamic, and fascinating 2D and 3D <strong>Floor Plan Conversion Services</strong>,</p>

                <p>Contact our experts for Floor Plan Conversion Services and receive high-resolution results in a variety of formats.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Floor Plan Conversion Services In 2D And 3D</h4>
                <p>With over 20 years of worldwide IT support expertise, Tech2Globe is a prominent real estate floor plan conversion service provider. Our <strong>2D to 3D Floor Plan Conversion Services</strong> meet the needs of a diverse variety of industries and users. The perfect floor layout may make a massive difference for buyers looking at the property. Floor layouts build confidence in consumers, especially in a world where physical viewing is often seen as uncomfortable or inconvenient. It saves both the buyers and the sellers time. Our floor plan conversion firm also uses layouts that highlight the potential worth of your property and boost its perceived value among purchasers when presenting any area.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Ecommerce SEO Services</h4>
                <p><strong>Remodeling Floor Plans</strong> Our professionals use existing drawings and images to re-create precise, aesthetically appealing copies through various innovative floor plan development and conversion services to help you attract buyers and improve their real estate shopping experience.</p>
                <p><strong>Floor Plan Format Conversion</strong> We extract the relevant information and build a more aesthetically beautiful and compelling duplicate of the floor plan in your desired format, regardless of the original floor plan format you give. We also improve current designs with more creative contributions as part of our <strong>Property Floor Plan Services</strong>.</p>
                <p><strong>Interactive Floor Plans</strong> Our experts can provide you with real estate floor plans so that your buyers can engage with them. With animations, simulations, and enhanced designs, we ensure that it entices and holds the attention of your potential consumers.</p>
                <p><strong>360-Degree Floor Plans</strong> We can generate 360-degree designs and 2D to 3D floor plan conversions. These creatives present a thorough perspective of the property and guarantee that the floor plan answers all of your consumers' inquiries.</p>
                <p><strong>2D Floor Plan Conversion</strong> Tech2Globe's 2D floor plans encompass everything a potential buyer may anticipate from your models. Our professionals can develop 2D floor plan pictures to scale, import, and enhance existing 2D designs or <strong>2D Floor Plan Creation</strong> from scratch. You obtain results tailored to your business demands when you outsource <strong>Floor Plan Conversion Services</strong> to our team. Furthermore, we assist you in attracting buyers by adding a creative touch to the 2D floor plan conversion process, transforming your concepts into a showcase that appeals to the buyer's aesthetic goals. We provide 2D to 3D <strong>Floor Plan Conversion Services</strong> in addition to developing a comprehensible 2D floor plan. It improves your chances of conversion by giving your consumers a better property viewing experience.</p>
                <p><strong>3D Floor Plan Conversion</strong> Our <strong>3D Floor Plan Conversion Services</strong> produce a realistic depiction that allows purchasers to study a property's model without having to visit it in person. We create high-quality 3D floor plans that provide customers with a clear picture of the layout and a pleasant impression of the space and its size. We provide <strong>3D Floor Plan Creation</strong> for a wide variety of properties. At the same time, all of our 3D floor layouts are adaptable. You may input your choices, and our designers will incorporate them into the model, resulting in a faultless representation of your idea.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Us?</h4>
                <p>For 3D and 2D <strong>Floor Plan Conversion Services</strong>, we engage the most outstanding image editors and CAD designers who can handle all sorts of drawings, pictures, outlines, and CAD files, including handmade, printed, and digital files. We work on a wide range of architecture projects, including residential, apartment, office, workshop, industrial, and large-scale infrastructure projects. As a result, our designers have received extensive training in the newest tools, including Autodesk Revit, RoomSketcher, AutoCAD, SolidWorks, and others.</p>
                <p>We work with manual, printed, and digital drawings, sketches, outlines, pictures, and CAD files. If you use proper scale and floor layouts, you'll never have to worry about marketing faulty goods or information. JPEG, DWG, and PDF formats are available for our high-resolution 2D and 3D floor designs. Even for massive projects, the quickest response times are guaranteed. Our prices do not reflect our higher service quality, making them the most cost-effective option. Reasonable customization leads to customer happiness and successful project completion; therefore, we keep you informed at all times.</p>
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

      <div className="PhotoEditPortfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};
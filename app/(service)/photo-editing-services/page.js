import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Photo Editing Services | Image Editing Services - Tech2Globe",
  description:
    "Tech2Globe provides top-notch photo editing services. Elevate your images with our expert image editing solutions tailored to your needs.",
  keywords: [
    "photo editing services",
    "image editing services",
    "professional photo editing",
    "image retouching"
  ],
  openGraph: {
    title: "Photo Editing Services | Image Editing Services - Tech2Globe",
    description:
      "Tech2Globe provides top-notch photo editing services. Elevate your images with our expert image editing solutions tailored to your needs.",
    url: "https://www.tech2globe.com/photo-editing-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Editing Services | Image Editing Services - Tech2Globe",
    description:
      "Tech2Globe provides top-notch photo editing services. Elevate your images with our expert image editing solutions tailored to your needs."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/photo-editing-services"
  }
};

const pageHeaderData = {
    title: "Photo Editing",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Post Processing Real Estate Images", path: "/post-processing-of-real-estate-images" },
    { id: 2, name: "Photo Manipulation Services", path: "/photo-manipulation-services" },
    { id: 3, name: "Image Clipping Services", path: "/image-clipping-services" },
    { id: 4, name: "Photo Enhancement Services", path: "/photo-enhancement-services" },
    { id: 5, name: "Photo Masking Process", path: "/photoshop-image-masking-service" },
    { id: 6, name: "Image Editing Packages", path: "/image-editing-packages" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
];


export default function PhotoEditingServices() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Photo Editing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Photo Editing Services" imageSrc="/images/services/graphics-design-banner-1.jpg" />
                            <div className={Style.ContentDiv}>
                                <h4 className="pb-3">An Editing Image that express more</h4>
                                <p>Tech2Globe offers wide variety of image editing services to fulfill your all image editing needs. We have a team of skilled and experienced professionals, they give one-stop solution for complete your all photo editing needs under an affordable price for different sectors. We started from very few skilled and professionals photo editors and now we have a very huge team of professional’s photo editors for completing client’s demand for real estate image editing, wedding image editing, modelling/fashion image editing and much more.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="pb-3">Image Editing Services – The Best</h3>
                                <strong>Post Processing Real Estate Images</strong>
                                <p>With the help of our experts we assure best quality and furnished form of a photo.</p>
                                <strong>Photo Manipulation Services</strong>
                                <p>Photo manipulation services helps to make changes in saturation, contrast, color, brightness and much more.</p>
                                <strong>Image Clipping Services</strong>
                                <p>Basically means cropping the main image and pasting it on the desired background.</p>
                                <strong>Photo Enhancement Services</strong>
                                <p>Team to provide our clients for enhancing and retouching the image.</p>
                                <strong>Photo Masking Services</strong>
                                <p>It is used with clipping path technique to eliminate the background of complex image.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className="pb-3">Why Tech2Globe for professional photo editing?</h4>
                                <ul>
                                    <li>100% privacy protection for all projects</li>
                                    <li>Effective and efficient services</li>
                                    <li>Skilled & Professional Photo Editors</li>
                                    <li>Password Access Files for eliminate fraudeurs</li>
                                    <li>Affordable Price</li>
                                </ul>
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

            <ClientSlider testimonials={testimonials} />

        </>
    )
};
import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";



export const metadata = {
  title: "E-commerce Website Testing Services |Web Testing Services - Tech2globe",
  description:
    "At Tech2globe, we leverage comprehensive testing frameworks and advanced technologies to deliver unparalleled E-commerce website and mobile application testing services.",

  openGraph: {
    title: "E-commerce Website Testing Services |Web Testing Services - Tech2globe",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "At Tech2globe, we leverage comprehensive testing frameworks and advanced technologies to deliver unparalleled E-commerce website and mobile application testing services.",
    url: "https://www.tech2globe.com/ecommerce-testing-services",
  },

  twitter: {
    card: "summary_large_image",
    title: "E-commerce Website Testing Services |Web Testing Services - Tech2globe",
    description:
      "At Tech2globe, we leverage comprehensive testing frameworks and advanced technologies to deliver unparalleled E-commerce website and mobile application testing services.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/ecommerce-testing-services",
  },
};

const pageHeaderData = {
  title: "Photo Enhancement Services",
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



export default function PhotoEnhancement() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Photo Enhancement Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <img src="images/services/service-inner/tech2globe-enchncemnt.jpg" alt="Photo Enhancement Services" className="img-fluid mb-3"/>
                <h3>Photo Enhancement Services</h3>
                <p>Here we provide our clients with the photo enhancement services. You just have to give us the inputs or raw files and for the rest of the task you can rely on us. We will make the photo look completely transformed from what you gave.</p>

                <p>We will do the cropping, adjust the contrast and background as required which helps in photo enhancement. Retouching the image and making it look absolutely real is our task and our team of professionals put in their best efforts to restore old pictures or raw images to look amazing is what we are best at. And we assure you the prices for restoring and retouching the image are the most reasonable in the industry. We use different software and techniques to enhance the quality of the image.</p>

                <h5>Following are the services that we provide to our clients for enhancing and retouching the image:</h5>
                <hr />
                <h3>Photo Restoration</h3>
                <p>Under this service we provide our clients with a special service, which is, sometimes with the passage of time and weather the color of the photos start fading and sometimes they are even torn up. But you need not panic at this, because here at our company we will restore all your old photos and retouch them with the help of latest photo editing software and techniques. Once we will restore your old photos you yourself will be amaze to see the final result on images.</p>

                <h3>Image Retouching Services</h3>
                <p>Under this service we will retouch the photos in various ways, like adding brightness to the fainted photos, adjusting brightness and contrast, color correction, adding sharpness and perspective correction etc; we can also add a glam touch to the old pictures. We will remove all the blurriness from the photo and make it look absolutely perfect as if it was shot in a photo studio.</p>

                <h3>Conversion of Raw Images</h3>
                <p>Sometimes we just click picture and they turned out to be amazing. But still they are close to being perfect. Here at our company we turn your raw images into some extraordinary images which we are sure you will relish throughout your lives. Converting these raw images into fully finished image is not an easy task but our experts with the help of digital cameras and editing software will make that possible. And our pricing for our services is the most reasonable in the industry.</p>

                <h3>Why Outsource Photo Enhancement To Tech2globe:</h3>
                <p>There are various valid reasons for which you can trust our company and outsource your photo enhancement work to you. We assure you that you will be relaxed once you handover this task to us. Within a limited period of time we will enhance your photos in bulk without sacrificing on quality. We are well equipped with the latest photo editing techniques and a team of well skilled employees, who will give their best to serve you. We assure you that you will be completely satisfied once you see our work.</p>
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

    </>
  )
};

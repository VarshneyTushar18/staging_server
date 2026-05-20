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
  title: "Photo Manipulation Services",
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



export default function PhotoManipulation() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Photo Manipulation Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <img src="images/services/service-inner/tech2globe-manupulation.jpg" alt="Photo Manipulation Services" className="img-fluid mb-3"/>
                <h3>Photo Manipulation Services</h3>
                <p>Photo manipulation, as the name suggests refers to the manipulation of various features in the photo, in the sense making changes in the saturation, contrast, color, brightness, tone and many such aspects of a photo so as to make it look more attractive and fascinating.</p>

                <p>For manipulating the photo we use latest technology and latest photo editing software, and enhance the quality of the old picture and make it as if it was shot in some photo studio. We provide you with this amazing service at very reasonable prices. This retouching and editing will enhance the quality of the old photo, which will surely lead to an increase in your sales. These services attract many people like real estate agents, online websites, photo studios etc. Photo manipulation is a tiring and a time consuming job but here with our team of effective and efficient workers, we will assure you to provide with the best results in a limited period of time.</p>
                <h5>Following are the types of photo manipulation services that we provide:</h5>
                <hr />
                <h3>Photo Color Correction Services</h3>
                <p>As the name implies in this service, we try and correct the color faults in a photo. Sometimes some very special moments are captured in the photos but due to the dull color, the real essence of the picture dies. Under photo color correction we will make you relive those amazing moments again. We will add light and correct the color balance of the photo, through which you and relive and cherish those moments again. We will fix all the flaws in your damaged photo and make it absolutely perfect. We will adjust the color tone, contrast, background light, sharpness, and also resize your photo.</p>

                <h3>Brightness and Contrast Enhancement</h3>
                <p>Under this service, we will adjust the factors like contrast and brightness of your old photos and add life to them. Photos look attractive when there is a balance with the background, with perfect brightness and contrast, but if this feature is missing they ruin the whole essence of the photo and make the photo look shabby. We will enhance your old photo with the help of latest photo editing software and adjust their brightness and contrast as required.</p>

                <h3>Why Outsource Photo Manipulation To Tech2globe:</h3>
                <p>Here at Tech2Globe we value your time and money, so we provide you with the best photo manipulation at reasonable prices. We can enhance your photos in bulk as we have a skilled team, who are experts at photo enhancement, and with the help of latest technology your photos will be enhanced to such an extent that it will surely lure your customers. Reliability is what we provide to our customers, they can rely on us because we provide our customers with the best services. We will adjust all the features such as color, brightness, contrast etc. and we provide you with best outcome.</p>
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

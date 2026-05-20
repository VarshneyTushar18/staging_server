import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title:
    "Real estate image editing services | Post processing of real estate images",
  description:
    "Outsource your real estate photo editing, retouching, and post-processing needs to Tech2Globe, a professional photo retouching service provider.",
  keywords: [
    "real estate image editing",
    "outsource real estate image editing",
    "real estate post processing services",
    "post processing of real estate images"
  ],
  openGraph: {
    title:
      "Real estate image editing services | Post processing of real estate images",
    description:
      "Outsource your real estate photo editing, retouching, and post-processing needs to Tech2Globe, a professional photo retouching service provider.",
    url: "https://www.tech2globe.com/post-processing-of-real-estate-images",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Real estate image editing services | Post processing of real estate images",
    description:
      "Outsource your real estate photo editing, retouching, and post-processing needs to Tech2Globe, a professional photo retouching service provider."
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/post-processing-of-real-estate-images"
  }
};

const pageHeaderData = {
  title: "Post Processing of Real Estate Images",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Post Processing Real Estate Images", path: "/post-processing-of-real-estate-images" },
  { id: 2, name: "Photo Manipulation Services", path: "/photo-manipulation-services" },
  { id: 3, name: "Image Clipping Servicess", path: "/image-clipping-services" },
  { id: 4, name: "Photo Enhancement Services", path: "/photo-enhancement-services" },
  { id: 5, name: "Photo Masking Process", path: "/photoshop-image-masking-service" },
  { id: 6, name: "Image Editing Packages", path: "/photo-enhancement-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function SeleniumTesting() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Post Processing of Real Estate Images" />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <Image src="/images/services/service-inner/tech2globe-real-estate.jpg" alt="Post Processing of Real Estate Images" width="1000" height="500" className="img-fluid pb-3" />
              <div className={Style.ContentDiv}>
                <h4>Post Processing of Real Estate Images</h4>
                <p>Real estate is an upcoming business. Here at our company we provide our clients with the post processing of real estate images. In real estate business, it is important to make the images look attractive and perfect so that the buyers feel attracted towards it. Here at our company we make it an easier task for the brokers. They can focus on their main business while on the other hand we can focus on our task of post processing the real estate images. Though post processing of images is a time consuming task but with the help of our team of experts we assure best quality and furnished form of a photo. This will be an added advantage for your business, and due to rich the rise in your income is assured. <strong>We always deliver high quality work on time to our Clients at reasonable prices.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Kinds of services that we provide to our clients are:</h4>
                <h6>Still Image Enhancement</h6>
                <p>Under this feature we will try and enhance the quality of the image to its best. We edit still images and enhance it to look attractive. We will adjust settings like the sharpness, contrast, brightness etc, but in the end will provide you with the best picture.</p>
                <h6>HDR Image Blending Services</h6>
                <p>Under this feature, we will properly blend the colour, exposure and contrast of the picture according to the background settings. We will try and provide you with best possible images of various aspects of real estate.</p>
                <h6>Sky Change Services</h6>
                <p>Under this service we replace dull sky with bright blue sky on day time images and add dark night skies on twilight images that match best with the photo look. The sky change service can add life to the picture by adding an appropriate background to it.</p>
                <h6>Perspective Correction Changes</h6>
                <p>Sometimes even though the brightness, sharpness and contrast of the image are up to the mark but still it does not look perfect. It is due to some geometrical errors in the image. With perspective correction changes, you will get the image in proper symmetry. Perspective correction changes will only affect the geometrical and symmetrical aspect of the image without hampering the quality of the image.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Outsource Post Processing of Real Estate Images to Tech2Globe:</h4>
                <p>With our team of experts, who have years of experience in this field, we offer you to outsource post processing of real estate images to Tech2Globe. All you have to do is just give us the raw photos and we will do the rest of the job of processing into alluring and attractive pictures. By which customers will feel attracted and wish to buy them. We provide you our service of post processing of real estate photos at reasonable prices. We use latest and updated technology, which will definitely enhance the quality of your pictures. You yourself will not to recognise the transformed version of your old photos.</p>
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

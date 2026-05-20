import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Image Editing Packages | Image editing services | images editing",
  description:
    "Tech2Globe offers image editing packages outsourcing. We have experienced image editors who can transform your dull pictures & highly proficient in handling imaging software.",

  keywords:
    "Image Editing Packages, product image editing services, image editing services outsourcing, ecommerce image editing services, image editing services in usa",

  openGraph: {
    title: "Image Editing Packages | Image editing services | images editing",
    description:
      "Tech2Globe offers image editing packages outsourcing. We have experienced image editors who can transform your dull pictures & highly proficient in handling imaging software.",
    url: "https://www.tech2globe.com/image-editing-packages",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Image Editing Packages | Image editing services | images editing",
    description:
      "Tech2Globe offers image editing packages outsourcing. We have experienced image editors who can transform your dull pictures & highly proficient in handling imaging software.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/image-editing-packages",
  },
};

const pageHeaderData = {
  title: "Image Editing Packages",
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
  { heading: "Resources", links: resources }
];

export default function ImageEditingPackages() {

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Image Editing Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>

                <div class="table-responsive">
                  <table class="table table-striped amazone-services">
                    <thead>
                      <tr>
                        <th width="50" class="price-head">Real Estate Service</th>
                        <th width="50">Prices starts from</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BASIC</td>
                        <td>$ 1.00 per image</td>
                      </tr>
                      <tr>
                        <td>HDR</td>
                        <td>$ 1.50 per image</td>
                      </tr>
                      <tr>
                        <td>VIRTUAL STAGING</td>
                        <td>$ 4.00 per image</td>
                      </tr>
                      <tr>
                        <td>DAY-NIGHT CONVERSION</td>
                        <td>$ 4.00 per image</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th width="50" class="price-head">Image Clipping Service</th>
                        <th width="50">Prices starts from</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BASIC</td>
                        <td>$ 1.00 per image</td>
                      </tr>
                      <tr>
                        <td>COMPLEX</td>
                        <td>$ 2.00 per image</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th width="50" class="price-head">Modelling / Headshots Service</th>
                        <th width="50">Prices starts from</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BASIC</td>
                        <td>$ 2.00 per image</td>
                      </tr>
                      <tr>
                        <td>COMPLEX</td>
                        <td>$ 5.00 per image</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

      <section className="our-customers-parent container text-center pb-5 d-flex justify-content-center align-items-center flex-column">
        <div className="row">
          <h2 className="text pb-5 fw-1">Our <span className="text-danger">Customers</span></h2>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-1.jpg" alt="Tulimed Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-2.jpg" alt="Mid West Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-3.jpg" alt="Magic Opener Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-4.jpg" alt="hop water logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-5.jpg" alt="teliaoils logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-6.jpg" alt="Leaato Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-7.jpg" alt="Greenyi Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-8.jpg" alt="Tastee Treasures Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-9.jpg" alt="Jucos Logo" /></div>
          </div>
        </div>
      </section>


    </>
  )
};
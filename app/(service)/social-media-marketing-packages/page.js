import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Social Media Marketing Packages & Pricing for Your Brand Growth",
  description: "Best Social Media Marketing Packages to unlock your brand’s potential. Boost engagement, drive traffic, and elevate your online presence. Free proposal and plan included.",
  keywords: [
    "Social Media Marketing Packages",
    "SMM Packages",
    "SMM Prices",
    "SMM Pricing",
    "Social Media Marketing Pricing",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/social-media-marketing-packages",
  },
  openGraph: {
    title: "Social Media Marketing Packages & Pricing for Your Brand Growth",
    description: "Get the best social media package for your business. Packages include social media content posting, blogging, videos, and more. Get set up and running in just 3 days.",
    url: "https://www.tech2globe.com/social-media-marketing-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Packages & Pricing for Your Brand Growth",
    description: "Get the best social media package for your business. Packages include content posting, blogging, videos, and more. Get started in just 3 days.",
  },
};

const pageHeaderData = {
  title: "Social Media Marketing Packages & Pricing",
  backgroundImage: "/images/services/pack-banner.jpg",
  shortBanner: true
};


export default function SocialMediaMarketingPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Guest Posting Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <p className="mb-5">If you want to conquer the digital world, our top-of-the-line Social Media Marketing packages are the best in the business. At Tech2Globe, we are proud to offer top-quality Social Media Marketing (SMM) solutions that place your brand at the front of the pack. With our carefully crafted Social Media Marketing packages, your online presence for your business will rise to new heights while reaching an enormous and active audience across a variety of social media platforms. The team we have assembled is proficient in the techniques of SMM, making sure that your message reaches the appropriate audience in the proper moment and in the most effective manner. Hence, stop wasting time and money on poor results and take advantage of your potential with our custom Social Media Marketing Packages. Increase your brand's visibility, participation, and conversions using our revolutionary SMM packages now.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div class="table-responsive">
                  <table class="table table-striped packages-table">
                    <thead>
                      <tr>
                        <th class="path-th main-th" width="16.66%">
                          <h2>Activity
                          </h2>
                        </th>
                        <th class="path-th grey" width="16.66%">
                          <h3>Startup
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="16.66%">
                          <h3>
                            Medium
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="16.66%">
                          <h3>
                            Growth
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>
                            Custom
                          </h3>
                        </th>
                        <th class="path-th grey" width="16.66%">
                          <h3>CONTACT</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Budget Required</h3>
                        </td>
                        <td>Upto $2,000</td>
                        <td>$2,000 - $4,000</td>
                        <td>$4,000 - $10,000</td>
                        <td>Above $10,000</td>
                        <td rowspan="4">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Account Management</h3>
                        </td>
                        <td>Upto 2</td>
                        <td>Upto 3</td>
                        <td>Upto 5</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Creation</h3>
                        </td>
                        <td>Upto 2</td>
                        <td>Upto 5</td>
                        <td>Upto 8</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Products/Pages</h3>
                        </td>
                        <td>5</td>
                        <td>10</td>
                        <td>25</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Initial Review and Analysis</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Business Goals</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="6">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Audience Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Advertisement Support</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Banner Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Structure Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Facebook Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Business Manager Set Up</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="14">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Pixel Installation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Remarketing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Creation of Automated Rules</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Campaign Monitoring</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Catalogue Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Dynamic Ads Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Instant Experience Ads Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ads Placement Customization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Tabs Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>A/B Testing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Carousel and Collection Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Traffic Monitoring</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Analytics Report Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Instagram Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Audience Research</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="3">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ads Creatives &amp; Design</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ads Monitoring &amp; Management</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">LinkedIn Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Manager Account Set Up</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="4">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>LinkedIn Insight Tag Installation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Creation Of Custom Conversion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ads Monitoring</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">YouTube Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Youtube Ads Account Set Up</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="9">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Audience Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Skippable In-Stream Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Non-Skippable In-Stream Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Bumper Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Discovery Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Youtube Video Sequence Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>A/B Testing Of Targeting</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Remarketing Video Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Twitter Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Twitter Ads Account Set Up</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                        <td rowspan="10">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Audience Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Tweet Engagement Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Or GIF View Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Awareness Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Conversion Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>In-stream Video View Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follower Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>App Install Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Remarketing Video Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> - </td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Reporting</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Progress Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td rowspan="2">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Activity Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="2">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >


    </>
  )
};
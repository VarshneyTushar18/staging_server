import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Guest Posting Services | Guest Posting Packages | Tech2Globe",
  description: "Tech2Globe offers guest posting packages for small and medium businesses worldwide. Improve your site authority, credibility, and organic traffic today.",
  keywords: [
    "guest post packages",
    "guest posting package",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/guest-posting-packages",
  },
  openGraph: {
    title: "Guest Posting Services | Guest Posting Packages | Tech2Globe",
    description: "Tech2Globe offers guest posting packages for small and medium businesses worldwide. Improve your site authority, credibility, and organic traffic today.",
    url: "https://www.tech2globe.com/guest-posting-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Posting Services | Guest Posting Packages | Tech2Globe",
    description: "Tech2Globe offers guest posting packages for small and medium businesses worldwide. Improve your site authority, credibility, and organic traffic today.",
  },
};

const pageHeaderData = {
  title: "Guest Posting Packages",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

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

export default function GuestPostingPackages() {

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
                <div class="table-responsive">
                  <div class="table-responsive">
                    <table class="table table-striped packages-table">
                      <thead>
                        <tr>
                          <th class="path-th main-th" width="16.66%">
                            <h3>Guest Posting Packages</h3>
                          </th>
                          <th class="path-th grey" width="16.66%">
                            <h3>Startup
                            </h3>
                            <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                          </th>
                          <th class="path-th red" width="16.66%">
                            <h3>Medium
                            </h3>
                            <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                          </th>
                          <th class="path-th dark-grey" width="16.66%">
                            <h3>Growth
                            </h3>
                            <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                          </th>
                          <th class="path-th dark-grey" width="16.66%">
                            <h3>Custom
                            </h3>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="td-left">
                            <h3>High Domain Authority Sites</h3>
                          </td>
                          <td>DA 15-25</td>
                          <td>DA 25-40</td>
                          <td>DA 40-60</td>
                          <td rowspan="9">
                            <a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>High quality content written</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Genuine Website Guranteed</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Relevant to your niche</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Do follow link</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Get quality traffic</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Increase user engagement</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Increase Brand awareness</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Develop your authority</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Turnaround time 1-3 Week</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="full-row" colspan="5">Email &amp; Phone Support</td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Customer support</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                        <tr>
                          <td class="td-left">
                            <h3>Email, Chat, Phone</h3>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                          <td>
                            <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >

      <ClientSlider testimonials={testimonials} />


    </>
  )
};
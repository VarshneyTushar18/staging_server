import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";


export const metadata = {
  title: "Amazon EBC services | Amazon Enhanced Brand Content | Tech2Globe",
  description:
    "Hire Amazon EBC services by Tech2Globe to use correct pricing strategies to expand your rankings, conversions, and income. Adding EBC to your page has a larger number of advantages.",
  keywords: "",

  openGraph: {
    title: "Amazon EBC services | Amazon Enhanced Brand Content | Tech2Globe",
    description:
      "Hire Amazon EBC services by Tech2Globe to use correct pricing strategies to expand your rankings, conversions, and income. Adding EBC to your page has a larger number of advantages.",
    url: "https://www.tech2globe.com/amazon-ebc-services",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazon EBC services | Amazon Enhanced Brand Content | Tech2Globe",
    description:
      "Hire Amazon EBC services by Tech2Globe to use correct pricing strategies to expand your rankings, conversions, and income. Adding EBC to your page has a larger number of advantages.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/amazon-ebc-services",
  },
};

const pageHeaderData = {
  title: "Amazon EBC",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Nopcommerce Development", path: "/nop-commerce-development-services" },
  { id: 2, name: "Volusion Development", path: "/volusion-development-services" },
  { id: 3, name: "3Dcart Development", path: "/3dcart-development-services" },
  { id: 4, name: "Open Cart Development", path: "/open-cart-development-services" },
  { id: 5, name: "Amazon Webstore Design & Development", path: "/amazon-webstore-design-development-services" },
  { id: 6, name: "eBay Store Design", path: "/ebay-store-design-services" },
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


export default function AmazonEbc() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Amazon Ebc Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Amazon Ebc Services" imageSrc="/images/services/graphics-design-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p> Amazon Enhanced Brand Content permits the brand registered sellers to make a powerful product description comprising of fresh text placements and enhanced brands. These days, Amazon EBC is a greater amount of a basic than an exciting feature. Adding EBC to your product detail page has a larger number of advantages than simply expanding the visual item of the listing. The seller can improve the listings and present the prospective purchasers all the significant data, highlights, advantages with the goal that the purchaser can become acquainted with about the product and afterward changed over to make a buy. Building brand awareness assumes a significant job and thus leads getting more sales. The best advantage the dealer can get by Tech2Globe is that it very well may be utilized to address the normal client questions by giving the significant product details therefore assists with driving fast buy choices. One of the most basic steps for a successful seller is to hire Amazon EBC services by Tech2Globe to use correct pricing strategies to expand your rankings, conversions, and income.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Advantages of Amazon Enhanced Brand Content</h4>
                <p>The reason for Amazon EBC is to give more data than the standard listing with the objective of inspiring the buyer to buy. Tech2Globe content masters can assist you with exploiting EBC by creating important product information through the introduction of a unique brand story, enhanced pictures and more content positions. The enhanced brand content that we produce strives to expand transformation rates by:</p>
                <ul>
                  <li>Engaging the reader with a convincing perspective on how the products will their life</li>
                  <li>Driving traffic to your listing by keeping customers engaged with your listing longer, along these lines boosting rankings, per Amazon&apos;s algorithm</li>
                  <li>Increasing conversion rates</li>
                  <li>Providing an increasingly intensive description for your client, lessening chances for confusions, returns and negative reviews</li>
                </ul>
              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Lift Sales with Tech2Globe Enriched Amazon A+ Product Detail Pages</h4>
                <p>Tech2Globe is a rumored name in the e-commerce field offering some value-added services to retailers no matter how you look at it. We have a committed team of content writers focusing in writing Amazon A+ product descriptions. You can use the mastery of these assets to connect with your target audience and improve your online sales. Our specialists not just compose connecting with and detailed Amazon A+ content for you yet in addition propose outwardly appealing brands that would get you better conversion rates.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">How Tech2Globe can help you?</h4>
                <p>Drive your brand affinity with Tech2Globe Amazon enhanced brand content which permits the registered sellers to showcase the suggestion of their products through enhanced pictures and advanced web content. Merging enhanced brand content with your product detail pages will in the end bring about higher and ideal transformation rates, invigorated traffic and exponential sales when planned successfully.</p>
                <p>We, at Tech2Globe, dispense an accomplished workforce with an educated group of project managers, consultants, content designers and advertisers in order to grow ideally enhanced brand content for your Amazon marketplace. The major Amazon enhanced brand content services at Tech2Globe are:</p>
                <ul>
                  <li><strong>AmazonCustomized Creative Briefing –</strong> Effective understanding of your business destinations and target audience through a careful instruction’s technique and conference with your imaginative administrators for close coordination. When it identifies with amazon advance cataloguing, we do a profound understanding of your marketplace&apos;s style rules, site traffic, serious contemplations and financial plans to continue further.</li>
                  <li><strong>Content Strategy and Direction –</strong> Tech2Globe assign a committed group with a project manager to deal with your inventive account while intently working with the customers to distinguish broad features you wish to feature for your products. Enhancing your brand story through alluring themes then turns into a simple task.</li>
                  <li><strong>Design and Implementation –</strong> We commit hours to convey explicit templates for your brand, while dealing with the enhanced brand content for your Amazon marketplace and giving brief criticisms to your lead generation.</li>
                  <li><strong>Specialized Amazon content –</strong> Tech2Globe will in general work in Amazon enhanced brand content, Amazon A+ content just as A+ improved content marketing, devoted for your Amazon Marketplace.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Tech2Globe?</h4>
                <p>Tech2Globe is one of the best Amazon partner organization or Amazon specialist provider. With many years of understanding, we give result-arranged Amazon A+ content services. As you read above through Amazon Enhanced Brand Content, the dealer can expand their sales and make their product remarkable. Our Amazon EBC designer will depict product data as it connecting with purchasers more towards your product and read the content till last. Tech2Globe are composing engaging content as well as apply phenomenal pictures that would assist with making the better conversion.</p>
                <p>Talk to us to enhance amazon rich content today for Amazon A+ Listing (EBC) Service and upgrade and enlighten your business quickly.</p>
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

      <ClientSlider testimonials={testimonials} />

    </>
  )
};

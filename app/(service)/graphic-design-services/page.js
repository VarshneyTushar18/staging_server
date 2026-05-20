import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";

export const metadata = {
  title: "Graphic Designing Agency | Graphic Design Services Company - Tech2globe",
  description:
    "Tech2globe provides professional graphic design services. Graphic Designing plays a vital role in promoting the brand better with visuals that attract. We offer affordable professional graphic design services to agencies all around the world.",
  keywords:
    "graphic design services, professional graphic designing, creative design agency, graphic designing company, Tech2Globe",
  openGraph: {
    title: "Graphic Designing Agency | Graphic Design Services Company - Tech2globe",
    description:
      "Tech2globe provides professional graphic design services. Graphic Designing plays a vital role in promoting the brand better with visuals that attract. We offer affordable professional graphic design services to agencies all around the world.",
    url: "https://www.tech2globe.com/graphic-design-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Designing Agency | Graphic Design Services Company - Tech2globe",
    description:
      "Tech2globe provides professional graphic design services. Graphic Designing plays a vital role in promoting the brand better with visuals that attract. We offer affordable professional graphic design services to agencies all around the world."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/graphic-design-services"
  }
};

const pageHeaderData = {
  title: "Graphic Design Services Company",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "UI/UX Design Services", path: "/ui-ux-design-services" },
  { id: 2, name: "Front End Designing", path: "/front-end-development-company" },
  { id: 3, name: "Responsive Web Designing", path: "/responsive-web-design" },
  { id: 4, name: "Graphic Design", path: "/graphic-design-services" },
  { id: 5, name: "Corporate Branding", path: "/corporate-branding" },
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


export default function GraphicDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Graphic Design Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Graphic Design Services" imageSrc="/images/services/graphics-design-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Graphic design is a necessary part of every company, that is just as true for the image of your company as it is for your advertisement. When it comes to innovative forms of <strong>graphic design services</strong>, we know that people have different mindsets. Some are pleased with the basic set of options, while most others are searching for more customized services. Not all businesses are willing to give you innovative offers, but with Tech2Globe a <strong>Graphic Design services company</strong>, you can get the best support.</p>
                <p>Our team is here to provide you with full support for the graphic design tables. Not only can these consist around the online market, but they can also work in the offline version. You should catch up with us, whether you are looking to design brochures or logos.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tech2Globe Offers Professional Graphic Design Services</h4>
                <hr />
                <p><strong>Logo designing</strong> the heart of the identity of your company is your logo. We produce exclusive designs that are easily identifiable and consistent with your online as well as offline marketing. Make sure that the logo provides the brand with the best impression of the organization. Our team is here to make sure that your logo does more than just look amazing. Tech2Globe is available to make sure that your logo is perfect for your ads.</p>
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/brochure.png" width={55} height={55} alt="Brochure Design" />
                      <div className="context">
                        <h5>Brochure Design</h5>
                        <p>In the modern era, brochures are usually considered the old medium, but they are just as significant. We agree that there is nothing else like a beautiful brochure design. Tech2Globe has worked to develop brochures on a hundred projects. We design creative brochures that are a critical component of your marketing toolkit.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/flyer.png" width={55} height={55} alt="Flyer Design" />
                      <div className="context">
                        <h5>Flyer Design</h5>
                        <p>To bring the company to the target audience, Tech2Globe offers the best and quality flyer design services. At affordable rates, we provide premium and high-quality flyer designs. Tech2Globe has a team of artistic graphic designers who are highly skilled and creative.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/packaging-design.png" width={55} height={55} alt="Packaging Design" />
                      <div className="context">
                        <h5>Packaging Design</h5>
                        <p>Does not matter how unique your product is if your brand and its packaging are bland and mediocre, your customers will simply choose another one. We assure you that a product visually stands out from its rivals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/newsletter.png" width={55} height={55} alt="	" />
                      <div className="context">
                        <h5>Newsletter Designing</h5>
                        <p>If you want to communicate with your subscribers, newsletter templates may be helpful for you. Newsletters are supposed to be a useful Internet marketing tool these days. We have a team of professional graphics and website designers who offer services according to your specifications to build newsletters. They have considerable experience and skills in email design.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/business-card.png" width={55} height={55} alt="Custom Business Card Designs" />
                      <div className="context">
                        <h5>Custom Business Card Designs</h5>
                        <p>Your first impression may have been outstanding, but a business card sticks around even after a meeting. That should have been breathtaking. Our highly trained designers are going to build customized business cards you&apos;re going to love, guaranteed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Process of graphic design We Follow</h4>
                <p className="mb-0"><FaHandPointRight /> To understand your business needs, we will collaborate with you</p>
                <p className="mb-0"><FaHandPointRight /> Evaluating the company brand or other relevant underlying messages quickly</p>
                <p className="mb-0"><FaHandPointRight /> Our team will work together to discuss the best designs that represent the importance of your company or product</p>
                <p className="mb-0"><FaHandPointRight /> We build and furnish prototype designs for your approval</p>
                <p className="mb-0"><FaHandPointRight /> It will be made and improved into the final format after your approval</p>
                <p><FaHandPointRight /> It will submit in the format you want</p>
              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Tech2Globe for Graphic design service?</h4>
                <p>You obtain the assurance of having the best in terms of quality, innovation, and price by choosing Tech2Globe. Our <strong>designing agency Delhi</strong> differentiators have made us India&apos;s top outsourcing company for graphic design. The benefits to Tech2Globe of offshoring graphic design include –</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Cost-effective Services</h5>
                    <hr />
                    <p>Competitive pricing rates result in graphic designs that affordably price. Select what&apos;s best for you and just pay for what you need.</p>

                    <h5>High-quality Service</h5>
                    <hr />
                    <p>Tech2Globe, a leading graphic design company, <strong>offers graphic design services</strong> that cover all of your business requirements.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Experienced Graphic Designers</h5>
                    <hr />
                    <p>Talented <strong>graphic designers India</strong> work on your account exclusively. We also provide our team with web design and web development-coordinated integrated graphic design services.</p>

                    <h5>High-quality Graphic Design Tool</h5>
                    <hr />
                    <p>We are using the latest software for graphic design, including Photoshop, Adobe Illustrator, CorelDraw, Freehand, etc.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Begin Your New Project with Us</h4>
                <p>You can get <strong>graphic & creative design services</strong> from our team if you are searching for the best web services or essential printing support. In working with you, we look forward to providing you with some luxurious offers within your existing budget plans.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">We Expertise in All Major Technologies</h2>

                  <p ><FaHandPointRight /> <Link href="cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development</Link></p>
                  <p ><FaHandPointRight /> <Link href="nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development </Link></p>
                  <p ><FaHandPointRight /> <Link href="joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                  <p ><FaHandPointRight /> <Link href="drupal-development" className="text-decoration-none fw-normal">Drupal Development</Link></p>
                  <p ><FaHandPointRight /> <Link href="responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design</Link></p>
                  <p ><FaHandPointRight /> <Link href="mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design</Link></p>
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

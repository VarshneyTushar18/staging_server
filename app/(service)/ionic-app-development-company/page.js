import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Ionic App Development Services | Ionic Development Company - Tech2Globe",
  description:
    "Tech2globe is top-rated Ionic Development Company which will help you build future-ready mobile applications with Ionic development services.",

  alternates: {
    canonical: "https://www.tech2globe.com/ionic-app-development-company",
  },

  openGraph: {
    title: "Ionic App Development Services | Ionic Development Company - Tech2Globe",
    description:
      "Tech2globe is top-rated Ionic Development Company which will help you build future-ready mobile applications with Ionic development services.",
    url: "https://www.tech2globe.com/ionic-app-development-company",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ionic App Development Services | Ionic Development Company - Tech2Globe",
    description:
      "Tech2globe is top-rated Ionic Development Company which will help you build future-ready mobile applications with Ionic development services.",
  },
};

const pageHeaderData = {
  title: "Ionic App Development Company",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Android App", path: "/android-application-development-services" },
  { id: 2, name: "iPhone App", path: "/iphone-app-development-services" },
  { id: 3, name: "iPads App", path: "/ipad-app-development-company" },
  { id: 4, name: "React Native App", path: "/react-native-app-development" },
  { id: 5, name: "Ionic App", path: "/ionic-app-development-company" },
  { id: 6, name: "Flutter App", path: "/product-data-entry-services" },
  { id: 7, name: "Kotlin App", path: "/flutter-app-development-services" },
  { id: 8, name: "PhoneGap App", path: "/phonegap-app-development-service" },
  { id: 9, name: "Xamarin App", path: "/xamarin-mobile-app-development" },
  { id: 10, name: "Hybrid App", path: "/hybrid-mobile-app-development" },
  { id: 11, name: "Mobile App Designing", path: "/mobile-application-design-services" },
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


export default function IonicAppDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Ionic App Development Company" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Ionic App Development Company" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is a leading <strong>Ionic application development company</strong> in India that has developers with extensive industry expertise and outstanding commitment to contributing to the quickly changing tech world. They are well known for developing premium UI interactive and excellent hybrid applications. Without reducing the performance and rich user experience of the app, Tech2Globe allows you to create mobile apps.</p>

                <p>For small to medium-sized enterprises from different industries around the world, we at Tech2Globe develop cost-effective and high-performing <strong>Ionic app development services</strong>. Our developers provide Ionic mobile solutions that perfectly combine your mobile app needs with AngularJS, HTML5, CSS, and Managed services, making your app powerful and crash-free.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>Why Ionic For Mobile App Development?</h4>
                      <hr />
                      <p className="mb-0"><strong>Optimizing Efficiency</strong></p>
                      <p>The development of Ionic apps is mostly performance directed. It includes processors, utilities, and critical resources for code sharing and performance optimization of specific applications.</p>

                      <p className="mb-0"><strong>Excellent Layouts</strong></p>
                      <p>Tech2Globe is known as the best Ionic framework application development company. Ionic developers focus more on the app's presentation and user experience. Ionic frameworks have multiple animations, movements, and different design elements for this purpose.</p>

                      <p className="mb-0"><strong>CLI Ionic</strong></p>
                      <p>The unique benefit of the creation of ionic apps is to design, build, test, and use a single command to deploy the ionic app. This ionic command line makes the resources and tools for app development more efficient.</p>

                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Services</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/app-dev.png" width={55} height={55} alt="Ionic UI Design" />
                      <div className="context">
                        <h5>Ionic UI Design</h5>
                        <p>The fact that Ionic has highly customizable themes and components is a known fact. Tech2Globe leverages these themes and features to create mobile apps with an attractive UI. In making the most compelling and engaging user interface for mobile applications, our creative developers are nothing less than artists.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/computer.png" width={55} height={55} alt="Native & Hybrid App Development" />
                      <div className="context">
                        <h5>Native & Hybrid App Development</h5>
                        <p>Tech2Globe, known as the best<strong> Ionic app development company in India's</strong> for mobile app development company for Ionic, develops both native and hybrid mobile apps integrated with all major mobile platforms such as iOS, Android, and Windows. To make the apps interactive, our developers deliver the most acceptable mobile GUI.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/enterprise-app.png" width={55} height={55} alt="Integration of Ionic App" />
                      <div className="context">
                        <h5>Integration of Ionic App</h5>
                        <p>By integrating apps with smartwatches, geo-location devices, AR/VR devices, and other smart devices, Tech2Globe offers Ionic app integration services at a higher level. The integration of the Ionic app is done under the customer's need for effective execution and user experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/consulting-icon-new.png" width={55} height={55} alt="Support and Consulting" />
                      <div className="context">
                        <h5>Support and Consulting</h5>
                        <p><strong>Hire Ionic developers</strong> from us to help you through the process whether you're having technical difficulties or need professional advice.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technology We Build With Ionic</h4>
                <p>Hire Ionic developers that transform your concept into an app that works outstandingly on several platforms, is user-friendly, feature-rich, and runs smoothly. We have the right kind of professionals at Tech2Globe to support you with the creation of your hybrid Ionic app.</p>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaAngleRight /> Entertainment</p>
                    <p className="mb-0"><FaAngleRight /> Sports</p>
                    <p className="mb-0"><FaAngleRight /> Social</p>
                    <p className="mb-0"><FaAngleRight /> Banking</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaAngleRight /> Lifestyle</p>
                    <p className="mb-0"><FaAngleRight /> Educational</p>
                    <p className="mb-0"><FaAngleRight /> Retail</p>
                    <p className="mb-0"><FaAngleRight /> Construction</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technology We Are Using</h4>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaAngleRight /> Microsoft.net</p>
                    <p className="mb-0"><FaAngleRight /> iOS</p>
                    <p className="mb-0"><FaAngleRight /> Android</p>
                    <p className="mb-0"><FaAngleRight /> PHP</p>
                    <p className="mb-0"><FaAngleRight /> Angular JS</p>
                    <p className="mb-0"><FaAngleRight /> Laravel</p>
                    <p className="mb-0"><FaAngleRight /> Hybrid</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Reason to Hire Ionic App Developers from Tech2Globe</h4>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Innovative method and rationale</strong></p>
                    <p>Tech2Globe's developers are capable of designing ionic applications with a creative and logical approach. We ensure that the ionic app is delivering on time with attractive designs and high performance.</p>
                    <p className="mb-0"><strong>Experts of Technical Ability</strong></p>
                    <p>In addition to the technological skills, our professionals also have soft skills that are very useful for customer interaction. We explain your questions quickly and effectively through these improved communication skills.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Troubleshooters</strong></p>
                    <p>Our experts are problem-solving experts who help them solve the problems if there are any in the app.</p>
                    <p className="mb-0"><strong>Spirit of Team</strong></p>
                    <p>In collaboration with the team members, our developers work to create impressive ionic applications with the necessary reliability and versatility.</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Think to hire Tech2Globe?</h4>
                <p>We empower businesses based on their unique needs with flexible engagement models. At reasonable prices, our strength lies in top-class technology and consulting services.</p>
              </div>



              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design</Link></p>
                <p><FaAngleRight /> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>

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

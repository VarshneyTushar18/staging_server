import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Top Hybrid Mobile App Development Company - Tech2Globe",
  description:
    "Tech2Globe: Your top choice for hybrid mobile app development. Exceptional quality, innovation, and reliability. Elevate your app today!",
  keywords:
    "hybrid mobile app development, cross platform app development, mobile app developers, Tech2Globe",
  openGraph: {
    title: "Top Hybrid Mobile App Development Company - Tech2Globe",
    description:
      "Tech2Globe: Your top choice for hybrid mobile app development. Exceptional quality, innovation, and reliability. Elevate your app today!",
    url: "https://www.tech2globe.com/cross-platform-mobile-app-development",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Hybrid Mobile App Development Company - Tech2Globe",
    description:
      "Tech2Globe: Your top choice for hybrid mobile app development. Exceptional quality, innovation, and reliability. Elevate your app today!"
  },
  alternates: {
    canonical: "https://www.tech2globe.com/cross-platform-mobile-app-development"
  },
};

const pageHeaderData = {
  title: "Cross-Platform Mobile App Development",
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


export default function CrossPlatformMobileAppDevelopment() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you can expect to save around 40–50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy are concerns, you can outsource confidently — we ensure security, privacy, and confidentiality at every level of our processes."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe possess long-term viability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are fully focused on stable, sustainable growth."
        }
      },
      {
        "@type": "Question",
        "name": "What modes of payment do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once the project is completed and you are satisfied with the results, you can pay via wire transfer or by check."
        }
      },
      {
        "@type": "Question",
        "name": "How can I benefit by working with Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Tech2Globe, we ensure your project is completed on schedule, within budget, and in accordance with international quality standards."
        }
      }
    ]
  };

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Cross Platform Mobile App Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Cross Platform Mobile App Development" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Cross Platform Mobile Application Creation is one of the most challenging ideals currently in the <strong>hybrid app development company </strong>in the mobile application development industry. For their mobile apps, all companies prefer to have Cross-Platform Application creation. The key reason behind this is that cross-platform application is the best medium for different platforms to produce the highest quality applications and still have cost-effective solutions.</p>
                <p>Our proficient <strong>Cross-platform mobile application</strong> developers at Tech2Globe have extensive experience in designing outstanding mobile apps using Titanium. To take advantage of the strong competition in the industry, we can also optimize or update your current iOS, Android, and Blackberry apps to other operating systems.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of Cross-Platform Mobile App Development</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Reusability of Code</h6>
                    <p>Developers of cross-platform mobile applications don&apos;t need to write special code for various platforms. On all platforms, one code can be modified and used.</p>

                    <h6>Faster and easier Development</h6>
                    <p>Cross-platform development lets you increase the speed on various platforms of creating an app. Developers are spared from the burden of rewriting the code from scratch each time by reusing the codebase.</p>

                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Reduced costs of development</h6>
                    <p>Because of the high expenses involved in software growth, many companies don&apos;t like developing apps. Cross-platform development of mobile applications, however, is comparatively less expensive since only a single code base is used to create the apps.</p>

                    <h6>Wider Scope of Audiences</h6>
                    <p>Since the app is deployed in several app stores at a time, businesses can sell it in numerous locations and reach a wider audience at once.</p>

                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Using a wide range of top technologies</h4>
                <p>What is crucial is to ensure that the application looks attractive on any platform and operates the same way when creating cross-platform applications. This is whereby selecting the best technology stack for cross-platform app growth, we make the real difference count.</p>
                <p className="mb-0"><FaHandPointRight /> PhoneGap</p>
                <p className="mb-0"><FaHandPointRight /> Xamarin</p>
                <p className="mb-0"><FaHandPointRight /> Flutter</p>
                <p className="mb-0"><FaHandPointRight /> Ionic</p>
                <p><FaHandPointRight /> React Native</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe offers Services for Cross-Platform Mobile App Development.</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Cross-Platform App Consulting</h6>
                    <p>Our team of experienced developers understands that your company needs to provide strategic consultation on developing apps across platforms for a consistent experience.</p>

                    <h6>Cross-Platform App UI/UX</h6>
                    <p>UI/UX to securely connect across platforms and ensure that with easy-to-use features, the application looks appealing.</p>

                    <h6>Cross-Platform App Development</h6>
                    <p>We develop custom cross-platform apps that take advantage of platform-specific features to optimize touch, gesture, and native look and feel.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Cross-Platform App Migration</h6>
                    <p>To move the app from one platform to cross-platform, we have experience across various platforms, eliminating all complexities.</p>

                    <h6>Cross-Platform App Support</h6>
                    <p>We provide full support and maintenance for cross-platform apps to ensure stable and high performance.</p>

                    <h6>Cross-Platform App Upgrade</h6>
                    <p>Upgrade services to ensure the latest developments in the development of cross-platforms is handled by your app.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe&apos;s Expertise</h4>
                <p>With the combination of external mobile devices and multiple smartphone platforms, we have gained experience using the same IDE, language, and APIs to build multi-platform software development solutions for both Android and iOS devices at the price of one codebase.</p>
                <p>The different cross-platform services we supply are:</p>
                <p className="mb-0"><FaHandPointRight /> Calendar Apps</p>
                <p className="mb-0"><FaHandPointRight /> Classified Apps</p>
                <p className="mb-0"><FaHandPointRight /> Enterprise Apps</p>
                <p className="mb-0"><FaHandPointRight /> On-Demand Apps</p>
                <p className="mb-0"><FaHandPointRight /> Social Network Apps</p>
                <p className="mb-0"><FaHandPointRight /> E-commerce Apps</p>
                <p className="mb-0"><FaHandPointRight /> Cross-Platform Desktop Apps</p>
                <p className="mb-0"><FaHandPointRight /> Business Applications</p>
                <p><FaHandPointRight /> Location-based Applications</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>With dedicated <strong>cross-platform mobile applications</strong> for all your business needs, Tech2Globe is a leading cross-platform mobile development services provider. We also have custom cross-platform creation of mobile applications.</p>
                <p>Tech2Globe has a certified team of experienced mobile application developers and is a leading e-commerce web development company. Our <strong>Cross-Platform mobile app developers</strong> have developed skills in the creation of different websites for e-commerce. They are well aware of popular business dynamics for platforms and come up with the best solution possible.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Looking for a skilled Cross Platform App Developer?</h4>
                <p>At Tech2Globe, we deliver and ensure that it is bug-free with multi-performance cross-platform mobile app development services and hybrid applications.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Technologies</h2>
                <ul>
                  <li>Cake PHP Development</li>
                  <li>Nopcommerce Development </li>
                  <li>Joomla Development</li>
                  <li>Drupal Development</li>
                  <li>Responsive Web Design</li>
                  <li>Mailchimp Template Design</li>
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

      </section >

      <ClientSlider testimonials={testimonials} />

    </>
  )
};

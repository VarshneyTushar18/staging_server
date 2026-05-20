import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Style from "./style.module.css";

export const metadata = {
  title: "Tech2Globe Awards, Certifications & Global Partnerships",
  description:
    "Explore Tech2Globe’s global awards, industry certifications, and strategic partnerships. Recognized for excellence, innovation, and trusted collaborations worldwide.",

  openGraph: {
    title: "Tech2Globe Awards, Certifications & Global Partnerships",
    description:
      "Explore Tech2Globe’s global awards, industry certifications, and strategic partnerships. Recognized for excellence, innovation, and trusted collaborations worldwide.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/our-partnerships",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech2Globe Awards, Certifications & Global Partnerships",
    description:
      "Explore Tech2Globe’s global awards, industry certifications, and strategic partnerships. Recognized for excellence, innovation, and trusted collaborations worldwide.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/our-partnerships",
  },
};

const pageHeaderData = {
  title: "Our Partnerships",
  description:
    "Tech2Globe collaborate with top talent to deliver exceptional value and drive mutual success in a competitive digital landscape.",
  buttonText: "Contact us",
  buttonLink: "/contact-us/",
  backgroundImage: "/images/services/skyscraper.jpg", // your banner image
};

const cards = [
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/topsesos-best-in-search.png",
    alt: "TopSEOs Best in Search Award",
    category: "Digital Marketing",
    title: "TopSEOs Best in Search Award",
    desc: `Tech2Globe is honored to receive the TopSEOs Best in Search Award,
    recognizing our SEO and digital marketing excellence. This achievement
    reflects our proven strategies, innovation, and commitment to driving
    visibility, rankings, and sustainable growth.`,
  },
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/the_manifest_most_reviewed_it_services_company.png",
    alt: "Most Review data entry company",
    category: "Data Management",
    title: "Most Review Data Entry Company",
    desc: `Tech2Globe is proud to be named the Most Reviewed Data Entry Company,
    reflecting client trust and satisfaction. This honor showcases our
    commitment to delivering accurate, secure, and efficient data solutions that
    streamline operations and drive smarter decisions.`,
  },
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/the_manifest_most_reviewed_it_services_company.png",
    alt: "Most Review IT company",
    category: "Software",
    title: "Most Review IT company",
    desc: `Tech2Globe is honored to be recognized as the Most Reviewed IT Company,
    reflecting global client trust and satisfaction. With 14+ years of
    excellence, we deliver innovative IT, e-commerce, and digital marketing
    solutions that empower businesses to scale globally.`,
  },
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/the_manifest_most_reviewed_legal_outsoucring_company.png",
    alt: "Most Review Legal Outsourcing",
    category: "Data Management",
    title: "Most Review Legal Outsourcing",
    desc: `Tech2Globe is delighted to be awarded as the Most Reviewed Legal Outsourcing
    Service Provider, reflecting global client trust. This honor highlights our
    dedication to delivering accurate, cost-effective, and timely legal support
    that empowers firms and businesses.`,
  },
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/the_manifest_most_reviewed_medical_billing_company.png",
    alt: "Most Review Medical billing",
    category: "Data Management",
    title: "Most Review Medical Billing",
    desc: `Tech2Globe is proud to be recognized as the Most Reviewed Medical Billing
    Service Provider, reflecting client trust and satisfaction. This achievement
    highlights our commitment to accuracy, transparency, and efficiency, helping
    providers streamline billing and enhance patient care.`,
  },
  {
    badgeLabel: "Awards",
    badgeType: "type1",
    image: "/images/our-partnerships/t2g-certificate-gp-global.jpg",
    alt: "Go Global Awards",
    category: "Software",
    title: "Go Global Awards",
    desc: `Tech2Globe is honored to receive the Go Global Award, recognizing our
    excellence in IT, e-commerce, and digital marketing worldwide. With 14+
    years of expertise, we remain committed to driving digital transformation
    and empowering businesses to expand globally.`,
  },

  // -------- TYPE 2 (Certification) --------
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/Nanaimo-Chamber-Certificate.jpg",
    alt: "Nanaimo Chamber Certificate",
    category: "Software",
    title: "Nanaimo Chamber Certificate",
    desc: `We are a not-for-profit organization comprised of businesses, professionals,
    residents and community groups working collectively to ensure a healthy
    business base and positive socio-economic structure that benefits everyone
    in Nanaimo.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/t2g-certificate.jpg",
    alt: "ISO Standard Certification",
    category: "Quality",
    title: "ISO Standard Certification",
    desc: `ISO, the International Organization for Standardization, brings global
    experts together to agree on the best way of doing things – for anything
    from making a product to managing a process.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/best-msme-partnership.png",
    alt: "INDIA 5000 BEST MSME AWARDS",
    category: "Software",
    title: "INDIA 5000 BEST MSME AWARDS",
    desc: `Tech2Globe is honored to receive the India 5000 Best MSME Award, celebrating
    excellence and innovation. This prestigious recognition reflects our
    commitment to quality, customer satisfaction, and global service delivery,
    empowering businesses with reliable IT and digital solutions.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/flipkart-ads.jpg",
    alt: "FLIPKART ADS Seller Service Provider",
    category: "Ecommerce",
    title: "FLIPKART ADS Seller Service Provider",
    desc: `We help sellers grow on Flipkart through smart, targeted advertising. From
    setting up Product Listing Ads to optimizing campaigns for better ROI, we
    boost your product visibility and drive sales.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/dmca-protected-partnership.png",
    alt: "DMCA Certificate",
    category: "Protected",
    title: "DMCA Certificate",
    desc: `Tech2Globe is proud to be a DMCA Certified Company, upholding top standards
    of digital compliance and content protection. This certification reflects
    our commitment to safeguarding intellectual property, ensuring data
    security, and delivering globally trusted services.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/awards-2.jpg",
    alt: "Payoneer Service Provider",
    category: "Finance",
    title: "Payoneer Service Provider",
    desc: `As a trusted Payoneer Service Provider, we help freelancers, businesses, and
    e-commerce sellers manage international payments with ease.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/awards-3.jpg",
    alt: "Shopify Solution Partner",
    category: "Ecommerce",
    title: "Shopify Solution Partner",
    desc: `As a certified Shopify Service Provider, we build powerful, user-friendly
    e-commerce stores with setup, customization, and optimization services.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/ebay-partnership.png",
    alt: "EBAY Service Provider",
    category: "Ecommerce",
    title: "EBAY Service Provider",
    desc: `We help sellers thrive on eBay with expert support in store setup, listing,
    SEO, and order management—driving visibility and sales.`,
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/awards-5.jpg",
    alt: "Amazon Advertising Service Provider",
    category: "Ecommerce",
    title: "Amazon Advertising Service Provider",
    desc: `Provides expertise to help you grow your sales through headline search ad
    campaigns using targeted keywords and optimized bids.`,
    link: "https://sellercentral.amazon.com/gspn/provider-details/Advertising Optimization/e624d8bb-038f-4e19-97bf-0f949769944b",
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/amazon-ads-partnership.png",
    alt: "Amazon Ads Partner",
    category: "Ecommerce",
    title: "Amazon Ads Partner",
    desc: `Partnering with an Amazon Ads expert helps grow your business with stronger
    campaigns, better visibility, and measurable results.`,
    link: "https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.avtf7f2gc5uogpmaup4z625xr/Tech2globe?sref_=user",
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "/images/our-partnerships/amazone-seller.jpg",
    alt: "Amazon SPN Seller Service Provider",
    category: "Ecommerce",
    title: "Amazon SPN Seller Service Provider",
    desc: `A network of qualified third-party service providers that help sellers launch,
    manage, and grow their Amazon businesses.`,
    link: "https://sellercentral.amazon.com/gspn/provider-details/Advertising Optimization/e624d8bb-038f-4e19-97bf-0f949769944b",
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/indiasoft-partnership.png",
    alt: "Certificate of Indiasoft Participation",
    category: "Software",
    title: "Certificate of Indiasoft Participation",
    desc: `Tech2Globe is proud to receive the Certificate of Participation at Indiasoft,
    showcasing our global presence and digital innovation.`,
    link: "https://www.indiasoft.org/exhibitors-26/tech2globe-web-solutions-llp/",
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/alberni-valley-partnership.png",
    alt: "Alberni Valley Chamber of Commerce",
    category: "Software",
    title: "Alberni Valley Chamber of Commerce",
    desc: `The Alberni Valley Chamber of Commerce advocates for local businesses through
    events, networking, and resources.`,
    link: "https://www.albernichamber.ca/directory/tech2globe-web-solutions-inc",
  },
  {
    badgeLabel: "Certification",
    badgeType: "type2",
    image: "images/our-partnerships/esc-partnership.png",
    alt: "ESC Member",
    category: "Software",
    title: "ESC Member",
    desc: `As a member of the E-Commerce Sellers' Community (ESC), we collaborate,
    learn, and stay connected with industry trends.`,
    link: "https://www.escindia.in/membership-certifica/tech2globe-web-solutions-llp/",
  },

  // -------- TYPE 3 (Featured In) --------
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/nopCommerce-partnership.png",
    alt: "NopCommerce Solutions Partner",
    category: "Software",
    title: "NopCommerce Solutions Partner",
    desc: `We provide secure, scalable NopCommerce solutions including theme
    customization, plugins, optimization, and migration.`,
  },
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/clutch-partnership.png",
    alt: "CLUTCH Service Provider",
    category: "Business",
    title: "CLUTCH Service Provider",
    desc: `We help businesses optimize Clutch profiles, manage reviews, and boost
    credibility for more qualified leads.`,
    link: "https://clutch.co/profile/tech2globe-web-solutions",
  },
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/good-firms-partnership.png",
    alt: "Good Firms",
    category: "Business",
    title: "Good Firms",
    desc: `GoodFirms is a global review platform connecting companies with trusted IT
    and marketing service providers.`,
    link: "https://www.goodfirms.co/company/tech2globe-web-solutions-llp",
  },
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/design-rush-partnership.png",
    alt: "DesignRush",
    category: "Business",
    title: "DesignRush",
    desc: `DesignRush connects brands with top agencies in digital marketing, design,
    app development, branding, and more.`,
    link: "https://www.designrush.com/agency/profile/tech2globe",
  },
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/trustpilot-partnership.png",
    alt: "TrustPilot",
    category: "Business",
    title: "TrustPilot",
    desc: `Trustpilot helps businesses collect and showcase verified customer reviews to
    build trust and credibility.`,
    link: "https://www.trustpilot.com/review/tech2globe.com",
  },
  {
    badgeLabel: "Featured In",
    badgeType: "type3",
    image: "images/our-partnerships/upcity-partnership.png",
    alt: "UpCity",
    category: "Business",
    title: "UpCity",
    desc: `UpCity connects businesses with trusted service providers using data-driven
    insights and reviews.`,
    link: "https://upcity.com/profiles/tech2globe-canada",
  },

  // -------- TYPE 4 (Partnership) --------
  {
    badgeLabel: "Partnership",
    badgeType: "type4",
    image: "images/our-partnerships/litextension-partnership.png",
    alt: "LitExtention",
    category: "Software",
    title: "LitExtention",
    desc: `Transfer your store data securely with LitExtension's automated eCommerce
    migration service supporting 140+ platforms.`,
    link: "https://litextension.com/partner.html",
  },
  {
    badgeLabel: "Partnership",
    badgeType: "type4",
    image: "images/our-partnerships/gorgias.png",
    alt: "Gorgias",
    category: "Software",
    title: "Gorgias",
    desc: `Gorgias empowers eCommerce brands with AI-powered customer experience tools
    that scale support efficiently.`,
    link: "https://agencies.gorgias.com/tech2globe-web-solutions",
  },
];


export default function Partnerships() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Partnerships" parentName="Company" />


      <section className="partnerships-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4 text-center">
                Powering Success Through Strategic Collaborations
              </h2>

              <div className="pt-cardgrid row">

                {cards.map((card, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={Style.PtCard}>
                      <span className={`${Style.BadgeLabel} ${Style[card.badgeType]}`}>
                        {card.badgeLabel}
                      </span>
                      <img
                        src={card.image}
                        alt={card.alt}
                        width="100%"
                        className="img-fluid"
                      />
                      <div className={Style.Category}>{card.category}</div>
                      <h3>{card.title}</h3>
                      <div className={Style.Desc}>{card.desc}</div>
                      {card.link && (
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.LinkBtn}
                        >
                          View More
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


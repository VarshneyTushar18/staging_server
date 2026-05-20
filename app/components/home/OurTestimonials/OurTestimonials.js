"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./OurTestimonials.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
    {
        name: "Raphael Colon-Vonarx",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe Web Solutions created an effective landing page and a successful Google Ads campaign. The team is dedicated to the client&apos;s requests, and internal stakeholders are particularly impressed with the service provider&apos;s listening skills and technical expertise.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/295387"
    },
    {
        name: "Marketing Director, Aranyamx",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe Web Solutions LLP&apos;s support has boosted the client&apos;s sales, online visibility, impression, and clicks. The team provides regular updates and is quick to implement feedback and client input. They provide valuable suggestions and guidance to further improve the client&apos;s marketing efforts.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/180152"
    },
    {
        name: "Christopher Rannard, Aventious",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Thanks to Tech2Globe Web Solutions&apos; help, the client has acquired nearly 3,000 followers on Facebook within the first month. The team&apos;s organized approach and efficient execution have ensured a smooth, stress-free engagement. What stands out about the team is their flexibility to making changes.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/331118"
    },
    {
        name: "Richard Planca, Aquamore Finance",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "The client is delighted with Tech2Globe Web Solutions&apos; work. The team is responsive, and their output is of high quality. They listen to needs, bring great ideas to the table, and offer recommendations that align perfectly with the client&apos;s values and goals. The team also communicates promptly.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/330958"
    },
    {
        name: "Rebecca Chang, Absco Industries",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "Tech2Globe Web Solutions successfully resolved the suspension of the client&apos;s Google Ads account, and the client saw improvements in their cost per conversion. The professional team delivered on time, maintained transparent communication, promptly responded to needs, and actively sought feedback.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/330311"
    },
    {
        name: "Leandro Russo, IT4W",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "The client is happy with Tech2Globe Web Solutions’ work. The team provides useful real-time feedback about their progress. They’re reliable at meeting deadlines and setting realistic expectations. Moreover, their members are updated about evolving technologies, resulting in a fruitful engagement.",
        companyLogo: "/images/CLUTCH-ROUND-LOGO.png",
        companyName: "Clutch",
        link: "https://clutch.co/go-to-review/982b71e8-9a2d-42c9-822f-6a7c8458914b/320043"
    },
    {
        name: "Priya Jaiswal",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "I was looking for the software development service and based on the past work, I had chosen Tech2Globe. I am overwhelmed with their productive service. The team is supportive and understand the meaning of quality and deadlines very well thank you for your support and keep progressing.",
        companyLogo: "/images/google-icon.png",
        companyName: "Google",
        link: "https://g.co/kgs/HW6oQ8V"
    },
    {
        name: "Samdeep Singh",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Fantastic experience! So professional and knowledgeable. They really helped us out by working with our budget and designing our site perfectly tailored to our needs. They are very cooperative and concerned about every single query.",
        companyLogo: "/images/google-icon.png",
        companyName: "Google",
        link: "https://g.co/kgs/APfiPCG"
    },
    {
        name: "Kumar Abhi",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe was recommended by one of my friend as she already incorporated with Tech2Globe for ecommerce. The team has done a tremendous work to revamp my website and further digital marketing work. The traffic improved a lot and achieved conversions. I personally thank Ritu and the team for great services and work.",
        companyLogo: "/images/google-icon.png",
        companyName: "Google",
        link: "https://g.co/kgs/ec89tf2"
    },
    {
        name: "Shubhmeet Jaggi",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe is really a good image editing services provider. Highly recommend to all who is looking for Image editing services. I recently looking for an image editing company to do some retouching work on our property images to make it more eye catching & then I would really like to thanks to Tech2Globe team for quality work.",
        companyLogo: "/images/google-icon.png",
        companyName: "Google",
        link: "https://g.co/kgs/Dd1oevx"
    },
    {
        name: "Ananya Gupta",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "I recently had the pleasure of utilizing Tech2globe&apos;s Amazon account management services, and I must say, I am thoroughly impressed. Their professionalism, expertise, and commitment to delivering exceptional results have left me highly satisfied with the overall experience. From the moment I engaged with Tech2globe, their team demonstrated a deep understanding of Amazon&apos;s platform and a comprehensive knowledge of the intricacies involved in managing an account effectively. They exhibited great attention to detail, ensuring that my Amazon account was optimized for maximum performance and profitability.",
        companyLogo: "/images/TRUSTPILOT-ROUND-LOGO.png",
        companyName: "Trustpilot",
        link: "https://trstp.lt/h6mGk_DYvv"
    },
    {
        name: "Balbir Klaire",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "With their ecommerce services, we were able to increase the sales by approx 70%. Their strategies for PPC campaigns were very effective. They also have good expertise with product copywriting and EBC content. It helped us highlight the features of our product very efficiently.",
        companyLogo: "/images/TRUSTPILOT-ROUND-LOGO.png",
        companyName: "Trustpilot",
        link: "https://trstp.lt/GvmN3pQMKj"
    },
    {
        name: "Linda Griggs",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "From the beginning, Tech2globe proposal was very different than other companies in terms of the project structure and competitive pricing. I even looked at the website they had created, and after that, I knew that Tech2Globe was the perfect company for me. They worked with me and allowed me to bring in my thoughts and collaborated my ideas with theirs. It has been a fantastic partnership with Tech2Globe.",
        companyLogo: "/images/TRUSTPILOT-ROUND-LOGO.png",
        companyName: "Trustpilot",
        link: "https://trstp.lt/q68fmJmAiz"
    },
    {
        name: "Aarti Aggarwal",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "Excellent team & very helpful management to sort out the things. I acquire their E-Commerce services of Amazon.in to handle my seller account. I am quite happy with their services.",
        companyLogo: "/images/TRUSTPILOT-ROUND-LOGO.png",
        companyName: "Trustpilot",
        link: "https://trstp.lt/7PE-pjgBO4"
    },
    {
        name: "Jim Cook",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe delivers high-quality resources who maintain superior performance to ensure compliance with legal standards. The team was engaged and responsive to execute project changes and other challenges effectively. They facilitated a streamlined transition to establish a valuable partnership.",
        companyLogo: "/images/TRUSTPILOT-ROUND-LOGO.png",
        companyName: "Trustpilot",
        link: "https://trstp.lt/4nfPSJwAg-"
    },
    {
        name: "Christopher Rannard",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "We hired Tech2Globe to build high quality links to our site in order to improve our rankings for a number of important pages of our site.Tech2Globe service has helped us gain higher ranks, gain more traffic and grow our sales and business. Hiring them was a good investment and we plan to do it again.Communication was very clear. We knew exactly what was happening at each stage of the project. Timeliness was excellent.The Director is very knowledgeable on SEO as well as being very straightforward and honest, which is not always the case in the SEO world. Tech2Globe always delivered what they promised on time.",
        companyLogo: "/images/DR-ROUND-LOGO.png",
        companyName: "Designrush",
        link: "https://www.designrush.com/agency/profile/tech2globe#reviews"
    },
    {
        name: "Hardy Desai",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Tech2Globe, a professional document processing service provider, recently collaborated with our market and advertising company to streamline their document management procedures. Tech2Globe demonstrated their proficiency and commitment to client satisfaction by customizing their services to address the unique requirements of the client&apos;s business.Their team of experts diligently handled the sorting, digitization, and processing of a significant volume of documents, ensuring swift turnaround times and exceptional attention to detail. Through Tech2Globe&apos;s reliable and secure platform, we experienced increased productivity and peace of mind, as our files were not only easily accessible but also protected.As a result of Tech2Globe&apos;s outstanding performance and dedication, our market and advertising company highly recommends their services for organizations looking to optimize their document management processes. Tech2Globe proved to be an invaluable partner, delivering a comprehensive and efficient solution to their client&apos;s document processing needs.",
        companyLogo: "/images/DR-ROUND-LOGO.png",
        companyName: "Designrush",
        link: "https://www.designrush.com/agency/profile/tech2globe#reviews"
    },
    {
        name: "Rebecca Chang",
        avatar: "/images/female-avatar.png",
        stars: 5,
        text: "We partnered with Tech2globe to implement IoT Device Data Analytics for our manufacturing operations, and the experience has been exceptional. They provided us with powerful analytics tools and insights that have transformed how we monitor and optimize our processes. The team was knowledgeable, responsive, and proactive in helping us set up and customize the analytics to suit our specific needs.Thanks to their solution, we&apos;ve gained real-time visibility into our production data, which has led to significant improvements in efficiency and reduced downtime. Their expertise and dedication made the whole process smooth and efficient, and we&apos;ve already seen a noticeable impact on our bottom line. I highly recommend Tech2globe to any manufacturing business looking to leverage IoT data for better decision-making and operational performance.",
        companyLogo: "/images/DR-ROUND-LOGO.png",
        companyName: "Designrush",
        link: "https://www.designrush.com/agency/profile/tech2globe#reviews"
    },
    {
        name: "Aaron Gyure",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "We closed a number of deals through the increase in traffic to these specific blog posts. One of our posts went from unranked for the keyword to #3 gaining over 100 clicks per month to that article. Traffic to the site is up over 50% since we started.Workflow was great. We wanted to be hands off to focus on the rest of the marketing operations and they did a great job of that while still keeping us updated.The quality of their links is one of the best I&apos;ve seen. Tech2globe Web Solutions was well above what they promised and it was exciting to see them come in every month.",
        companyLogo: "/images/DR-ROUND-LOGO.png",
        companyName: "Designrush",
        link: "https://www.designrush.com/agency/profile/tech2globe#reviews"
    },
    {
        name: "Michael Petersen",
        avatar: "/images/male-avatar.png",
        stars: 5,
        text: "Our ongoing collaboration with Tech2globle Web Solutions has proven highly satisfactory, with the site redesign progressing at a remarkable 50% completion. Their ability to maintain exceptional quality while working efficiently is commendable. Additionally, their attention to detail, strong communication, and prompt responsiveness make them a reliable partner.",
        companyLogo: "/images/DR-ROUND-LOGO.png",
        companyName: "Designrush",
        link: "https://www.designrush.com/agency/profile/tech2globe#reviews"
    }
];

export default function OurTestimonials() {
    return (
        <section className={styles.ourTestimonials}>
            <div className={`${styles.bgShape1} ${styles.bounceY}`} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="sub-title text-uppercase">OUR TESTIMONIALS</p>
                        <h2 className="title">
                            What They&apos;re Talking About <strong>Company</strong>
                        </h2>
                        <Link href="/testimonial" className="button-red mt-2" aria-label="View all testimonials">
                            VIEW ALL
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: { slidesPerView: 1, slidesPerGroup: 1, pagination:false},
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                1200: { slidesPerView: 2, slidesPerGroup: 2 },
                            }}
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.testimonialHeader}>
                                            <div className={styles.avatar}>
                                                <Image width={55} height={55} src={t.avatar} alt={t.name} className="img-fluid" loading="lazy" />
                                            </div>
                                            <div>
                                                <div className={styles.name}>{t.name}</div>
                                                <div className={styles.stars}>
                                                    {Array.from({ length: t.stars }).map((_, i) => (
                                                        <FontAwesomeIcon icon={faStar} key={i} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.testimonialText}>{t.text}</div>
                                        <div className={styles.testimonialFooter}>
                                            <Image width={50} height={50} src={t.companyLogo} alt={`${t.company} Logo`} className={styles.companyLogo} />
                                            <Link href={t.link} target="_blank" rel="noopener noreferrer" className={styles.postedOnLink}>
                                                Read On <span className={styles.company}>{t.companyName}</span>
                                            </Link>
                                        </div>
                                        <Image src="/images/quotes.webp" width={58} height={42} alt="Quote" className={`${styles.quoteIcon} img-fluid`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

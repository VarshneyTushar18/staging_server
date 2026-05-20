import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight, FaArrowRight } from "react-icons/fa";

export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "summary_large_image",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "Image Clipping Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const usefulLinks = [
    { id: 1, name: "Post Processing Real Estate Images", path: "/post-processing-of-real-estate-images" },
    { id: 2, name: "Photo Manipulation Services", path: "/photo-manipulation-services" },
    { id: 3, name: "Image Clipping Services", path: "/image-clipping-services" },
    { id: 4, name: "Photo Enhancement Services", path: "/photo-enhancement-services" },
    { id: 5, name: "Photo Masking Process", path: "/photoshop-image-masking-service" },
    { id: 6, name: "Image Editing Packages", path: "/image-editing-packages" },
];


const sidebarSections = [
    { heading: "Resources", links: usefulLinks },
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


const faqs = [
    {
        id: "One",
        question: "What is image clipping?",
        answer: `
        When you take a picture or process a video digitally, clipping occurs when the intensity in some parts of the picture isn't within the range of the lowest and highest values that can be shown. In this case, the signal is clipping in the image domain.
      `,
    },
    {
        id: "Two",
        question: "Why outsource image clipping services?",
        answer: `
        By outsourcing image clipping services you can gain better image quality, a more efficient workflow, and more brand consistency. Also, it will save you time, money, and resources in the long run. As a result, you get the time to focus on more important business tasks and projects.
      `,
    },
    {
        id: "Three",
        question: "What file formats do clipping services accept?",
        answer: `
        There is a wide variety of file formats that are supported by the majority of clipping path service providers. These formats include JPEG, PNG, PSD, and TIFF.
      `,
    },
    {
        id: "Four",
        question: "How much does it cost?",
        answer: `
        Generally, it depends upon the complexity of the images and various other factors. However, when charging by the hour, the typical charge should be somewhere between $25 and $150.
      `,
    },
];

export default function ImageClippingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Image Clipping Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <img src="/images/services/service-inner/tech2globe-clipping-1.jpg" alt="image clipping services" className="img-fluid" />

                            <div className={Style.ContentDiv}>

                                <p>Professional <strong>image clipping services</strong> for precise background removal, photo enhancement, and object extraction. Elevate your visuals with expert editing.</p>

                                <h2 className="mb-3">Outsource Image Clipping Services for Flawless Visuals</h2>

                                <p><strong>Outsource image clipping services</strong> to get a perfectly cropped main image pasted on a desired background without tampering with the main cropped and placing it properly on the new background. The new feature of image clipping is in great demand these days. As with this photo editing service you can make your image look attractive.</p>

                                <p>In the image clipping service, we will make sure that the main image looks perfect and beautiful from each dimension. Image clipping is gradually becoming very popular as it attracts more buyers for eCommerce websites. Buyers can have an unblemished image of the product they want to buy, which will surely give a hike in the sales of the eCommerce websites. This service is not only for eCommerce websites but also for magazines, newspapers, etc. The prices for this service are very reasonable, and we assure you that with the help of our team of experts and the latest technology that we have, we will provide you with the best results. You just have to provide us with the photograph and we will transform that into a flawless image.</p>

                                <h4 className="mb-2">Background Removal Services</h4>

                                <p>As the name suggests, under this, we provide our customers with the removal of unwanted backgrounds from an image that is quite close to a “picture perfect” photo. With our <strong>photo image clipping service</strong>, we will make all such images of yours look apt and eye-catching. We will remove the unwanted background from the photo. Sometimes, you will find some spots not in the main picture but in the background; the background is too dull, and sometimes it turns out to be hazy; the solution to all these problems is with us. Contact us and we will solve it for you at very reasonable rates.</p>

                                <h4>Image Masking Services</h4>

                                <p>Image masking suggests that we will retouch the image by masking a part of the image which will enhance the quality of the picture. Our <strong>image clipping services</strong> are well equipped with the latest technology and a skilled team which will provide you with photo masking service. This feature helps in improving the final quality of the image. With the help of image masking, we will hide or mask the sharp margins in the photo, and provide you with the transformed and best quality image.</p>

                                <h2>Top-Rated Photo Clipping Service in the USA for Perfect Image Editing</h2>
                                <p>When clients opt for our <strong>photo image clipping service</strong>, they not only get better image editing, but they also get a visual edge in their fields.</p>

                                <ol>
                                    <li>Quality: To improve the quality of your work, we go one step further than what your camera can do. In short, this is why we can improve the quality of your eCommerce photos and product photos.</li>

                                    <li>Fast Delivery: We know you're a busy professional who likes to get things done on time, and so do we. So, we work hard to meet even the tightest deadlines so that you get your money's worth.</li>

                                    <li>Great Care: We know that getting your order to you quickly is important, but we also carefolly edit the images we work on to make sure that clipping paths are used correctly. We want to make sure that the picture we make is perfect and interesting.</li>

                                    <li>Price: We are the best place to go if you want a cheap clipping path service that can still give you high-quality images. There are different packages to make sure it's flexible for you and as affordable as it can be.</li>
                                </ol>

                                <p>Along with our high-quality work, we're also proud of how quickly and efficiently we deliver. Our streamlined process makes sure that clients have a smooth experience. They can send us images, tell us how they want them edited, and get the edited images within the time frames they set. Because we are both good at what we do and quick, businesses in the USA trust us when they need a <strong>photo clipping service</strong>.</p>

                                <h2>Expert Outsource Image Clipping Services for Precise and Professional Results</h2>
                                <p>Image clipping is not an easy task as it requires a lot of time. Here at Tech2Globe, our customers are our priority. We provide our customers with an image-clipping service. We will edit your old and raw photos in such a way that you will feel fascinated by them. By choosing to <strong>outsource image clipping services</strong> to us, we will edit your photos in such a way that they will surely appeal to your senses. We guarantee you satisfactory work delivered on time and at reasonable prices. By this, you can save your precious time and energy and devote it to other work. At Tech2Globe, we value our customers and their demands, and hence we work accordingly to provide them with the desired results.</p>

                                <h2>Comprehensive Photo Image Clipping Service for Perfect Precision</h2>
                                <p>Our <strong>photo clipping service</strong> stands out because we are always committed to providing the highest quality work. We are always dedicated to being precise, whether we are picking out products for e-commerce sites, improving images for ad campaigns, or making complicated cutouts for graphic design projects. The result is images that not only meet but also go beyond industry standards, making your content look better.</p>

                                <p>Our services are flexible and meet the needs of clients from a wide range of industries. We make our <strong>photo image clipping service</strong> fit the needs of each project, whether it's <a href="digital-marketing-services" className="text-decoration-underline fw-bold">digital marketing</a> or <a href="graphic-design-services" className="text-decoration-underline fw-bold">graphic design</a>, fashion and product photography, or something else. As professionals in the field, we know how important it is to deliver images that fit with our client's style.</p>


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

            <FaqSection faqs={faqs} />



        </>
    )
};
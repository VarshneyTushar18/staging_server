import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Our Team | Digital Marketing Agency - Tech2Globe",
  description:
    "Meet our expert team at Tech2Globe, a leading digital marketing agency. Trusted professionals dedicated to your business growth and success.",

  openGraph: {
    title: "Our Team | Digital Marketing Agency - Tech2Globe",
    description:
      "Meet our expert team at Tech2Globe, a leading digital marketing agency. Trusted professionals dedicated to your business growth and success.",
    url: "https://www.tech2globe.com/our-team",
    type: "website",
    siteName: "Tech2Globe",
  },

  twitter: {
    title: "Our Team | Digital Marketing Agency - Tech2Globe",
    description:
      "Meet our expert team at Tech2Globe, a leading digital marketing agency. Trusted professionals dedicated to your business growth and success.",
    card: "summary_large_image",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/our-team",
  },
};

const pageHeaderData = {
  title: "Our Team",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const leadership = [
  {
    name: "Harpreet Singh Sethi",
    designation: "CEO & Founder",
    image: "/images/team/HarpreetSinghSethi-pic.png",
  },
  {
    name: "Sarabjeet Singh",
    designation: "Director of Operations",
    image: "/images/team/SarabjeetSingh-pic.png",
  },
  {
    name: "Sahil Verma",
    designation: "Sales Director",
    image: "/images/team/SahilVerma-pic.png",
  },
];

const pillars = [
  // {
  //   name: "Shivendra Tiwari",
  //   designation: "Assistant Vice President",
  //   department: "Technology",
  //   image: "/images/team/ShivendraTiwari-Pic.jpg",
  // },
  {
    name: "Prateek Sharma",
    designation: "Service Delivery Manager",
    department: "Ecommerce",
    image: "/images/team/PrateekSharma-pic.png",
  },
  // {
  //   name: "Devender Rathore",
  //   designation: "Operations Manager",
  //   department: "Operations",
  //   image: "/images/team/DevenderRathore-pic.png",
  // },
  // {
  //   name: "Garima Mahajan",
  //   designation: "Digital Marketing Manager",
  //   department: "Digital Marketing",
  //   image: "/images/team/GarimaMahajan-pic.png",
  // },
  {
    name: "Megha Anand",
    designation: "HR Manager",
    department: "Human Resource",
    image: "/images/team/MeghaAnand-pic.png",
  },
  {
    name: "Mohit Bansal",
    designation: "Sr. Team Developer",
    department: "Ecommerce",
    image: "/images/team/MohitBansal-Pic.jpg",
  },
  {
    name: "Gaurav Kumar Tyagi",
    designation: "IT Manager",
    department: "IT",
    image: "/images/team/gaurav-tyagi.jpg",
  },
  // {
  //   name: "Manoj Kumar Sharma",
  //   designation: "Sr. Project Manager",
  //   department: "Data Management",
  //   image: "/images/team/ManojKumarSharma-Pic.jpg",
  // },
  {
    name: "Paritosh Singh",
    designation: "Project Coordinator",
    department: "Data Management",
    image: "/images/team/ParitoshSingh-pic.png",
  },
  {
    name: "Sorabh Nigam",
    designation: "Team Leader",
    department: "Data Management",
    image: "/images/team/SorabhNigam.jpg",
  },
  {
    name: "Ritu Nawariya",
    designation: "Assistant Manager",
    department: "Ecommerce",
    image: "/images/team/ritu.jpg",
  },
  {
    name: "Hidayat Hashmi",
    designation: "PPC Manager",
    department: "Ecommerce",
    image: "/images/team/HidayatHashmi-pic.png",
  },
  {
    name: "Manisha Kashyap",
    designation: "Subject Matter Expert",
    department: "Ecommerce",
    image: "/images/team/ManishaKashyap-pic.png",
  },
  {
    name: "Mohd. Rehan Khan",
    designation: "Project Coordinator",
    department: "Data Management",
    image: "/images/team/MohdRehan-pic.png",
  },
  {
    name: "Pankaj Lohani",
    designation: "Assistant Manager",
    department: "Ecommerce",
    image: "/images/team/PankajLohani-pic.png",
  },
  {
    name: "Raman Singh",
    designation: "Team Developer",
    department: "Data Management",
    image: "/images/team/RamanSingh-pic.png",
  },
  {
    name: "Sahil Kumar",
    designation: "Senior Executive",
    department: "Data Management",
    image: "/images/team/SahilKumar-pic.png",
  },
  {
    name: "Vijay Kumar Roy",
    designation: "Team Lead",
    department: "Data Management",
    image: "/images/team/VijayKumarRoy-pic.png",
  },
  // {
  //   name: "Harvinder Singh",
  //   designation: "Team Lead",
  //   department: "Graphics",
  //   image: "/images/team/HarvinderSingh-pic.png",
  // },
  {
    name: "David Mboyo",
    designation: "Team Leader/QA (French)",
    department: "Data Management",
    image: "/images/team/DavidMboyo-pic.png",
  }
];

// -------------------------
// Reusable Component
// -------------------------
const TeamCard = ({ name, designation, department, image }) => (
  <div className="team-main-outer">
    <div className={Style.TeamCard}>
      <div className="team-content">
        <figure>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="img-fluid"
          />
        </figure>

        <div className="text-center py-3">
          <span className="fw-bolder ot-name d-block">{name}</span>
          <span className="ot-designation d-block py-2">{designation}</span>
          {department && <small className="d-block">{department}</small>}
        </div>
      </div>
    </div>
  </div>
);

export default function OurTeam() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="About Us"
        pageName="Our Team"
      />
      <section className={Style.PageContent}>
        <div className="container">

          {/* Leadership */}
          <div className="text-center">
            <h2 className="pb-5 text-danger fw-bold">Leadership</h2>
          </div>

          <div className="row justify-content-center">
            {leadership.map((member, i) => (
              <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <TeamCard {...member} />
              </div>
            ))}
          </div>

          {/* Pillars */}
          <div className="text-center">
            <h2 className="py-5 text-danger fw-bold">Our Pillars</h2>
          </div>

          <div className="row justify-content-center">
            {pillars.map((member, i) => (
              <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <TeamCard {...member} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="py-3 text-danger fw-bold">Our Strength</h2>
            <Image src="/images/team/our-strength.jpg" width={1920} height={1080} alt="Our Strength" className="img-fluid" />
          </div>

        </div>
      </section>
    </>
  );
}

import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import MilesmakerCard from "@/app/components/milesmakercard/milesmakercard";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
  title: "5 YEARS CREW | Online Marketing Agency - Tech2Globe",
  description:
    "Join the 5 Years Crew at Tech2Globe, an online marketing agency. Experience expert strategies, innovation, and growth for your business.",
  openGraph: {
    title: "5 YEARS CREW | Online Marketing Agency - Tech2Globe",
    description:
      "Join the 5 Years Crew at Tech2Globe, an online marketing agency. Experience expert strategies, innovation, and growth for your business.",
    url: "https://www.tech2globe.com/5years-milemakers",
    siteName: "Tech2Globe",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/5years-milemakers",
  },
};

const pageHeaderData = {
  title: "5 Years Crew",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const MilesmakerMembers = [
  {
    id: 1,
    name: "Sarabjeet Singh",
    designation: "Director Of Operations",
    image: "/images/team/SarabjeetSingh-pic.png",
    shortDesc:
      "It’s been a total roller coaster journey for me with all the highs and lows that we came across throughout these 8 years. One thing that I have explored with these experiences is my enthusiasm to jump into multiple activities in the office. Being from a technical background, I started as a software developer, but here at Tech2Globe, I am more into managing people, and this eventually became my forte. During Covid, we were able to manage the company and all the employees as a whole with no layoffs or salary deductions.",
    fullDesc:
      "It’s been a total roller coaster journey for me with all the highs and lows that we came across throughout these 8 years. One thing that I have explored with these experiences is my enthusiasm to jump into multiple activities in the office. Being from a technical background, I started as a software developer, but here at Tech2Globe, I am more into managing people, and this eventually became my forte. During Covid, we were able to manage the company and all the employees as a whole with no layoffs or salary deductions. This was something we have learnt throughout our journey, that is, prioritising our people over anything. We started with a team of 5, which has now been expanded to 250+ people strength, and this is not going to stop here, same as our enthusiasm from the very first day. I am glad to be a part of a team who are supportive, stand for each other in all situations, and work towards a common objective."
  },
  {
    id: 2,
    name: "Sahil Verma",
    designation: "Sales Director",
    image: "/images/team/SahilVerma-pic.png",
    shortDesc:
      "I have been a part of Tech2Globe for almost 6.8 years now and it has been a fantastic place to work and grow both personally and professionally. I started as an Associate in the Sales & Marketing Division and have now progressed to the role of VP Sales. Tech2Globe is a rewarding company to work for, offering a positive work environment and numerous employee benefits. I want to express my gratitude to the senior management for their ongoing support and opportunities for advancement. I chose to work at a company .",
    fullDesc:
      "I have been a part of Tech2Globe for almost 6.8 years now and it has been a fantastic place to work and grow both personally and professionally. I started as an Associate in the Sales & Marketing Division and have now progressed to the role of VP Sales. Tech2Globe is a rewarding company to work for, offering a positive work environment and numerous employee benefits. I want to express my gratitude to the senior management for their ongoing support and opportunities for advancement. I chose to work at a company with growth potential, and I have been fortunate to experience growth alongside the company. Years, I have spent at Tech2Globe have been extremely challenging, exciting, and fruitful, and I have grown tremendously as a professional. I hope to continue my successful career with Tech2Globe for many years to come. Many thanks to Tech2Globe."
  },
  {
    id: 3,
    name: "Garima Mahajan",
    designation: "Digital Marketing Manager",
    image: "/images/team/GarimaMahajan-pic.png",
    shortDesc:
      "It has been a remarkable journey working with great minds at Tech2Globe. I joined here as an SEO expert 7 years ago, and if I talk about the growth, I have been promoted to digital marketing manager. This success would not have been possible without the support and guidance of the management team. I am grateful for the opportunities and challenges that have helped me grow both personally and professionally here at Tech2Globe.",
    fullDesc:
      "It has been a remarkable journey working with great minds at Tech2Globe. I joined here as an SEO expert 7 years ago, and if I talk about the growth, I have been promoted to digital marketing manager. This success would not have been possible without the support and guidance of the management team. I am grateful for the opportunities and challenges that have helped me grow both personally and professionally here at Tech2Globe."
  },
  {
    id: 4,
    name: "Devender Rathore",
    designation: "Sr. Assistant Manager - Operations",
    image: "/images/team/DevenderRathore-pic.png",
    shortDesc:
      "I have had a very positive experience working at Tech2Globe. I began my career with the company as a junior executive and have since been promoted to the position of senior assistant manager of operations. Throughout my seven-plus years with the company, I have been a part of various lines of business and have experienced both ups and down. Despite having over 12 years of experience in total, the past seven years at Tech2Globe have been particularly instrumental in my overall growth and development.",
    fullDesc:
      "I have had a very positive experience working at Tech2Globe. I began my career with the company as a junior executive and have since been promoted to the position of senior assistant manager of operations. Throughout my seven-plus years with the company, I have been a part of various lines of business and have experienced both ups and down. Despite having over 12 years of experience in total, the past seven years at Tech2Globe have been particularly instrumental in my overall growth and development. I have been able to hone my skills in various areas such as customer service, project management, and operations. I have also been able to develop my leadership skills by leading teams and managing projects along with communication and interpersonal skills by interacting with customers and colleagues."
  },
  {
    id: 5,
    name: "Pankaj Lohani",
    designation: "Sr. Team Lead - Ecommerce",
    image: "/images/team/PankajLohani-pic.png",
    shortDesc:
      "These 6 years with Tech2Globe have taught me numerous things, and I am more than grateful for it. The management identified my skills and supported me throughout to perfect them. Opportunities and challenges were abundant in these years, which eventually shaped my professional skills and made me what I am today.",
    fullDesc:
      "These 6 years with Tech2Globe have taught me numerous things, and I am more than grateful for it. The management identified my skills and supported me throughout to perfect them. Opportunities and challenges were abundant in these years, which eventually shaped my professional skills and made me what I am today. Being persistent and creative in my approach, along with being a team player to work collaboratively with my colleagues, have been a major part of my learnings here."
  },
  {
    id: 6,
    name: "Vijay Kumar Roy",
    designation: "Team Lead - Data Management",
    image: "/images/team/VijayKumarRoy-pic.png",
    shortDesc:
      "I began my journey at Tech2Globe as a Junior Executive in the Data Management Team. After two years of diligent work, I gained a deep understanding of the company's services and processes. Recognizing the opportunities provided by Tech2Globe, I applied for the Internal Job Posting (IJP) and successfully secured a promotion to Team Developer.",
    fullDesc:
      "I began my journey at Tech2Globe as a Junior Executive in the Data Management Team. After two years of diligent work, I gained a deep understanding of the company's services and processes. Recognizing the opportunities provided by Tech2Globe, I applied for the Internal Job Posting (IJP) and successfully secured a promotion to Team Developer. This marked a significant milestone in my career development."
  },
  {
    id: 7,
    name: "Raman Singh",
    designation: "Team Developer - Data Management",
    image: "/images/team/RamanSingh-pic.png",
    shortDesc:
      "Working with Tech2Globe has been a fantastic experience for me. My prior experience as an MIS executive has been incredibly valuable in enabling me to secure opportunities to work on major projects and teams. I have gained many new skills and techniques, and have been able to progress to the role of Team Developer within the same team. My knowledge and experience have allowed me to assist the team in achieving their goals and objectives, and I have built strong relationships with my colleagues.",
    fullDesc:
      "Working with Tech2Globe has been a fantastic experience for me. My prior experience as an MIS executive has been incredibly valuable in enabling me to secure opportunities to work on major projects and teams. I have gained many new skills and techniques, and have been able to progress to the role of Team Developer within the same team. My knowledge and experience have allowed me to assist the team in achieving their goals and objectives, and I have built strong relationships with my colleagues. Overall, it has been a wonderful journey, and I am excited to continue growing and developing my skills and knowledge in the future."
  },
  {
    id: 8,
    name: "Sorabh Nigam",
    designation: "Team Leader - Data Management",
    image: "/images/team/SorabhNigam.jpg",
    shortDesc:
      "Initially, I joined as a Junior executive in the Data Management Team. After 2 years of working with the company and my team, I got a thorough understanding of the services and the process it follows. Tech2Globe offers ample opportunities for those who grab it, and so was the case for me. I applied for the IJP and got promoted to Team Developer. This didn’t stop here only. With the support of my seniors and mentors, I am now the Team Leader managing 20 people in my team. These 5 years of tenure have been the most exciting and fruitful in my professional life.",
    fullDesc:
      "Initially, I joined as a Junior executive in the Data Management Team. After 2 years of working with the company and my team, I got a thorough understanding of the services and the process it follows. Tech2Globe offers ample opportunities for those who grab it, and so was the case for me. I applied for the IJP and got promoted to Team Developer. This didn’t stop here only. With the support of my seniors and mentors, I am now the Team Leader managing 20 people in my team. These 5 years of tenure have been the most exciting and fruitful in my professional life."
  },
  {
    id: 9,
    name: "Sahil Kumar",
    designation: "Senior Process Executive - Data Management",
    image: "/images/team/SahilKumar-pic.png",
    shortDesc:
      "I am very proud to be part of Tech2Globe. I have been working here for the past five years in a data management team where I have been able to identify my skills and use them to the best of my ability. From a fresher to now a senior process executive, it’s been a great experience. I have also been a part of some of the premium projects. The best part of working here is that I am able to learn something new every day. I am constantly challenged to think outside the box and come up with innovative solutions.",
    fullDesc:
      "I am very proud to be part of Tech2Globe. I have been working here for the past five years in a data management team where I have been able to identify my skills and use them to the best of my ability. From a fresher to now a senior process executive, it’s been a great experience. I have also been a part of some of the premium projects. The best part of working here is that I am able to learn something new every day. I am constantly challenged to think outside the box and come up with innovative solutions."
  },
  {
    id: 10,
    name: "Mohd. Rehan Khan",
    designation: "Project Coordinator - Data Management",
    image: "/images/team/MohdRehan-pic.png",
    shortDesc:
      "Starting my career as a Project Coordinator at Tech2Globe marked the beginning of an exciting professional journey. Through hard work and an unwavering drive to grow, I earned a promotion to Senior Project Coordinator in just two years. Over the past five years, this dynamic organization has provided countless opportunities for learning, collaboration, and innovation. I'm proud of the milestones achieved so far and eagerly anticipate the challenges and successes that lie ahead.",
    fullDesc:
      "Starting my career as a Project Coordinator at Tech2Globe marked the beginning of an exciting professional journey. Through hard work and an unwavering drive to grow, I earned a promotion to Senior Project Coordinator in just two years. Over the past five years, this dynamic organization has provided countless opportunities for learning, collaboration, and innovation. I'm proud of the milestones achieved so far and eagerly anticipate the challenges and successes that lie ahead. Here's to pushing boundaries and achieving even greater heights!"
  },
  {
    id: 11,
    name: "Manoj Kumar Sharma",
    designation: "Sr. Project Manager - Data Management",
    image: "/images/team/ManojKumarSharma-Pic.jpg",
    shortDesc:
      "My journey of five years at Tech2Globe Web Solutions has been nothing short of transformative. I joined the organization as a Project Coordinator, eager to learn and contribute. Over the years, I had the privilege of working on diverse projects that challenged me and helped me grow both personally and professionally.",
    fullDesc:
      "My journey of five years at Tech2Globe Web Solutions has been nothing short of transformative. I joined the organization as a Project Coordinator, eager to learn and contribute. Over the years, I had the privilege of working on diverse projects that challenged me and helped me grow both personally and professionally. With consistent effort, guidance from mentors, and the support of an incredible team, I progressed to higher roles and responsibilities. This journey has been a testament to the value of hard work, collaboration, and adaptability. Leading teams and ensuring successful service delivery has been fulfilling, and I am grateful for the opportunities to make a meaningful impact. Tech2Globe has truly been a platform for growth, and I look forward to contributing to its success in the years ahead."
  },
  {
    id: 12,
    name: "Dilip Kumar",
    designation: "Sr. Process Executive",
    image: "/images/team/dilip-profile.jpg",
    shortDesc:
      "My 5-year journey as a Process Executive at Tech2Globe has been both enriching and rewarding. I honed my skills in process optimization, data management, and consistently meeting targets and deadlines. Collaborating with cross-functional teams, I contributed to streamlining workflows and enhancing efficiency.",
    fullDesc:
      "My 5-year journey as a Process Executive at Tech2Globe has been both enriching and rewarding. I honed my skills in process optimization, data management, and consistently meeting targets and deadlines. Collaborating with cross-functional teams, I contributed to streamlining workflows and enhancing efficiency. This role allowed me to grow professionally, adapt to evolving technologies, and deliver quality results, making me a valuable asset to the organization."
  },
  {
    id: 13,
    name: "Paritosh Singh",
    designation: "Project Coordinator",
    image: "/images/team/ParitoshSingh-pic.png",
    shortDesc:
      "My five-year journey at Tech2Globe Web Solutions has been truly transformative. Keen to learn and add value, and over time I have had the opportunity to work on a wide range of projects that stretched my capabilities and supported my growth both personally and professionally.",
    fullDesc:
      "My five-year journey at Tech2Globe Web Solutions has been truly transformative. Keen to learn and add value, and over time I have had the opportunity to work on a wide range of projects that stretched my capabilities and supported my growth both personally and professionally."
  },
];

export default function YearsMilemakers() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb
        parentName="About Us"
        pageName="5Years milemakers"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-danger text-center pb-5">5 Years Milemakers</h2>
            </div>
          </div>

          <div className="row">
            {MilesmakerMembers.map((m) => (
              <MilesmakerCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
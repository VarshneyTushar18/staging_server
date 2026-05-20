import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Fragment } from "react";
import "./custom.css";

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Career - Online Marketing & IT Consulting Career - Tech2Globe",
  description:
    "Explore rewarding careers in online marketing and IT consulting with Tech2Globe.",
  alternates: {
    canonical: "https://www.tech2globe.com/career",
  },
};

const resources = [
  { id: 1, name: "About Tech2Globe", path: "/about-us" },
  { id: 2, name: "Infrastructure", path: "/infrastructure" },
  { id: 3, name: "Values", path: "/values" },
  { id: 4, name: "Associations Ascription", path: "/associations-ascription" },
  { id: 5, name: "Clients", path: "/clients" },
  { id: 6, name: "CSR Initiatives", path: "/csr-initiatives" },
  { id: 7, name: "Our Team", path: "/our-team" },
  { id: 8, name: "Life@Tech2globe", path: "/life-at-tech2globe" },
  { id: 9, name: "Career", path: "/career" },
];

const sidebarSections = [{ heading: "Resources", links: resources }];


const pageHeaderData = {
  title: "Careers At Tech2Globe",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

async function getJobs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/career/jobs`, {
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export default async function Career() {
  const jobs = await getJobs();

  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb parentName="About Us" pageName="Career" />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">

            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <Link href="/scam-alert" className="text-decoration-underline">
                  Scam Alert
                </Link>

                <h2 className="text-danger mt-3">Careers at Tech2Globe</h2>
                <hr />

                <p>
                  <strong>“Grow as we grow”</strong> Are you in search of doing
                  exciting work in an environment you’re going to love?
                </p>

                <h4>Contact HR Department</h4>

                <p className="mb-0">
                  <FaPhoneAlt />{" "}
                  <Link
                    className="text-decoration-underline"
                    href="tel:+91-9871102889"
                  >
                    +91-9871102889
                  </Link>
                </p>

                <p>
                  <FaEnvelope />{" "}
                  <Link
                    className="text-decoration-underline"
                    href="mailto:career@tech2globe.com"
                  >
                    career@tech2globe.com
                  </Link>
                </p>
              </div>

              <div>
                <table className="table table-striped table-bordered table-hover career-page">

                  <thead>
                    <tr>
                      <th>Vacancy For</th>
                      <th>Work Experience</th>
                      <th>Number Of Positions</th>
                      <th>Apply Now</th>
                    </tr>
                  </thead>

                  <tbody>

                    {jobs.map((job) => (
                      <Fragment key={job.id}>
                        <tr>
                          <td>{job.title}</td>
                          <td>{job.experience}</td>
                          <td>{job.positions}</td>

                          <td className="text-center">
                            <button
                              className="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#job_${job.id}`}
                            >
                              Apply Now
                            </button>
                          </td>
                        </tr>

                        <tr className="collapse" id={`job_${job.id}`}>
                          <td colSpan="4">

                            <table className="table table-bordered">
                              <tbody>

                                <tr>
                                  <th className="bg-light w-50">Location</th>
                                  <td>{job.location}</td>
                                </tr>

                                <tr>
                                  <th className="bg-light">Qualification</th>
                                  <td>{job.qualification}</td>
                                </tr>

                                <tr>
                                  <th className="bg-light">Work Experience</th>
                                  <td>{job.experience}</td>
                                </tr>

                                <tr>
                                  <th className="bg-light">Salary</th>
                                  <td>{job.salary}</td>
                                </tr>

                                <tr>
                                  <th className="bg-light">Required Skills/Experience</th>
                                  <td>{job.skills}</td>
                                </tr>

                                <tr>
                                  <th className="bg-light">Job Responsibilities</th>
                                  <td>{job.responsibilities}</td>
                                </tr>

                                <tr>
                                  <td colSpan="2">
                                    <Link
                                      href={`/career-form?jid=${job.id}`}
                                      className="btn btn-success"
                                    >
                                      Apply Now
                                    </Link>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </Fragment>
                    ))}

                  </tbody>

                </table>
              </div>

            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
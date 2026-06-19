// app/components/CaseStudiesSection.jsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Style from "./ServiceCaseStudy.module.css";

export default function CaseStudiesService({ caseStudies }) {
  
  return (
    <section
      className="container cartFeature portfolio inner-pagE-Content case-studies py-5"
      id="casestudies"
    >
      <div className="row">
        <div className="col-md-12 col-sm-12 portfolio-column text-center">
          <h2 className="main-heading text-danger fw-bold py-3 mb-0">
            Case <span>Studies</span>
          </h2>
        </div>
      </div>

      <div className="row amazon-caseStudyContainer1">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <div className={Style.CaseStudyCard}>
              <Link
                href={study.docLink}
                className={Style.cardArrowLink}
                aria-label={`Read case study: ${study.title}`}
              >
                <FaArrowRight className={Style.cardArrowIcon} />
              </Link>
              <div className={Style.cardContent}>
                <h4 className={Style.CaseStudyCardTitle}>{study.title}</h4>
                <div className={Style.imageWrapper}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={250}
                    className={Style.cardImage}
                  />
                </div>
                <p className={Style.CaseStudyCardDesc}>{study.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

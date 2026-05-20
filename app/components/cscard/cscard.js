import Style from "./cscard.module.css";
import Link from "next/link";

export default function CaseStudiesCard({ item, category }) {
  const categoryClass =
    typeof category === "string" && category.trim() !== ""
      ? category.toLowerCase().replace(/\s+/g, "-")
      : null;

  return (
    <div
      className={`${Style.CaseStudyCard} CaseStudyCard h-100 d-flex flex-column ${
        categoryClass ? categoryClass : ""
      }`}
    >
      {/* TITLE */}
      <div className={`${Style.CardTop} CardTop`}>
        <h4>{item.title}</h4>
      </div>

      {/* DESCRIPTION */}
      <div className={`${Style.CardBody} flex-grow-1`}>
        <p>
          {(item.short_description || item.description || "")
            .slice(0, 120)
            .trim()}
          {(item.short_description || item.description || "").length > 120
            ? "..."
            : ""}
        </p>
      </div>

      {/* FOOTER */}
      <div className={Style.CardFooter}>
        <Link href={`/case-studies/${item.slug || ""}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
import Style from "./cscard.module.css";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/** Resolve DB / Cloudinary / relative upload paths to a usable URL. */
function getFeaturedImage(item) {
  const image = item?.featured_image || "";
  if (!image) return "";

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/uploads")) {
    return `${API}${image}`;
  }

  if (image.startsWith("/")) {
    return image;
  }

  return `${API}/${image.replace(/^\.\//, "")}`;
}

export default function CaseStudiesCard({ item, category }) {
  const categoryClass =
    typeof category === "string" && category.trim() !== ""
      ? category.toLowerCase().replace(/\s+/g, "-")
      : null;

  const featuredImage = getFeaturedImage(item);
  const topStyle = featuredImage
    ? {
        backgroundImage: `url(${featuredImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <div
      className={`${Style.CaseStudyCard} CaseStudyCard h-100 d-flex flex-column ${
        categoryClass ? categoryClass : ""
      }`}
    >
      {/* TITLE — featured_image from DB when present; else CSS category banner */}
      <div className={`${Style.CardTop} CardTop`} style={topStyle}>
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

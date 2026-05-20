import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import CaseStudiesCard from "@/app/components/cscard/cscard";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
export const dynamic = "force-dynamic";



// import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const resources = [
  { id: 1, name: "Portfolio", path: "/portfolio" },
  { id: 2, name: "Testimonial", path: "/testimonial" },
];
const sidebarSections = [{ heading: "Resources", links: resources }];

// ===== DYNAMIC METADATA =====
  export async function generateMetadata({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return {
      title: "Case Study | Tech2Globe",
      description: "Browse our case studies",
    };
  }

  try {
    const res = await fetch(`${API}/api/case-studies/${slug}`, {
      cache: "no-store",
    });
    const json = await res.json();
    const data = json?.data;

    return {
      title: data?.title
        ? `${data.title} | Tech2Globe Case Study`
        : "Case Study | Tech2Globe",
      description: data?.short_description || "Browse our case studies.",
      alternates: {
        canonical: `https://www.tech2globe.com/case-studies/${slug}`,
      },
    };
  } catch {
    return { title: "Case Study | Tech2Globe" };
  }
}

// ===== PAGE =====
export default async function CaseStudySingle({ params }) {
  const { slug } = await params;

  let data = null;

  // ── Fetch single case study ──
  try {
    const res = await fetch(`${API}/api/case-studies/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return <p style={{ padding: "40px" }}>Case study not found.</p>;
    }

    const json = await res.json();
    data = json?.data || null;
  } catch (err) {
    console.error("Fetch error:", err);
    return <p style={{ padding: "40px" }}>Something went wrong.</p>;
  }

  if (!data) {
    return <p style={{ padding: "40px" }}>Case study not found.</p>;
  }

  // ── Fetch related & other studies ──
  let relatedStudies = [];
  let otherStudies = [];

  try {
    const allRes = await fetch(`${API}/api/case-studies`, {
      cache: "no-store",
    });

    const allJson = await allRes.json();
    const allGroups = allJson?.data || [];

    const others = [];

    allGroups.forEach((group) => {
      const isCurrentCategory = group.items?.some((item) => item.slug === slug);

      if (isCurrentCategory) {
        // RELATED (same category)
        relatedStudies = (group.items || [])
          .filter((item) => item.slug !== slug)
          .slice(0, 3)
          .map((item) => ({
            ...item,
            categoryName: group.title,
          }));
      } else {
        // OTHER (different categories)
        (group.items || []).forEach((item) => {
          if (others.length < 3) {
            others.push({
              ...item,
              categoryName: group.title,
            });
          }
        });
      }
    });

    otherStudies = others;
  } catch (err) {
    console.error("Related fetch error:", err);
  }

  // ── Format CKEditor content safely ──
  const formattedContent = (data.content || "")
    .replace(
      /<figure[^>]*class="[^"]*table[^"]*"[^>]*>/gi,
      '<div class="table-responsive">',
    )
    .replace(/<\/figure>/gi, "</div>")
    .replace(
      /<table/gi,
      '<table class="table table-bordered table-striped table-hover"',
    )
    .replace(/<img/gi, '<img class="img-fluid" ')
    .replace(/<tr>\s*(<td>\s*<\/td>\s*)+<\/tr>/gi, "");

  const safeContent = formattedContent;

  return (
    <>
      <Breadcrumb
        parentName="Resources"
        pageName={data.title || "Case Study"}
      />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 case-study-single">
              <h1 className={Style.Title}>{data.title}</h1>

             

              

              <div className={Style.ContentWrapper}>
                {formattedContent ? (
                  <div dangerouslySetInnerHTML={{ __html: safeContent }} />
                ) : (
                  <p>No content available.</p>
                )}
              </div>

              {data.featured_image && (
                <div className="mt-4">
                  <img
                    src={data.featured_image}
                    alt={data.title}
                    className="img-fluid"
                  />
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-3">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

        {/* RELATED */}
        <div className="container pt-5">
          <h2 className="text-center pb-4">More Case Studies</h2>

          {relatedStudies.length > 0 ? (
            <>
              <div className="row g-4">
                {relatedStudies.map((item, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 d-flex"
                    key={item.id ?? item.slug ?? i}
                  >
                    <CaseStudiesCard
                      item={item}
                      category={item.categoryName || ""}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Link href="/case-studies" className="btn btn-danger">
                  More Case Studies <FaAngleDoubleRight />
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center">No related case studies available.</p>
          )}
        </div>

        {/* OTHER */}
        <div className="container pt-5">
          <h2 className="text-center pb-4">Explore Other Case Studies</h2>

          {otherStudies.length > 0 ? (
            <>
              <div className="row g-4">
                {otherStudies.map((item, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 d-flex"
                    key={item.id ?? item.slug ?? i}
                  >
                    <CaseStudiesCard
                      item={item}
                      category={item.categoryName || ""}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Link href="/case-studies" className="btn btn-danger">
                  More Case Studies <FaAngleDoubleRight />
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center">No other case studies available.</p>
          )}
        </div>
      </section>
    </>
  );
}

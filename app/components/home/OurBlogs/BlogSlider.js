"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Style from "./OurBlogs.module.css";
import { blogPostHref, stripHtml } from "@/lib/blogUtils";

export default function BlogSlider({ posts }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center my-5">
                <p>No blog posts available at the moment.</p>
                <Link href="/blogs" className={Style.readMore}>
                    View blog
                </Link>
            </div>
        );
    }

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                600: { slidesPerView: 2, slidesPerGroup: 2 },
                1000: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className={Style.recentBlogsContainer}
        >
            {posts.map((post) => {
                const href = blogPostHref(post);
                const titleHtml = post.title?.rendered || "";
                const excerpt = stripHtml(post.excerpt?.rendered || "");
                const image = post.featured_image || "";
                const readMoreLabel = `Read more about ${stripHtml(titleHtml)}`;

                return (
                    <SwiperSlide key={post.id}>
                        <div className={Style.blogCard}>
                            <div
                                className={`${Style.blogImage} d-flex justify-content-center align-items-center`}
                                style={
                                    image
                                        ? {
                                              backgroundImage: `url(${image})`,
                                              backgroundSize: "cover",
                                              backgroundPosition: "center",
                                          }
                                        : undefined
                                }
                            >
                                <div
                                    className={Style.blogTitle}
                                    dangerouslySetInnerHTML={{ __html: titleHtml }}
                                />
                            </div>
                            <div className={Style.blogContent}>
                                <p className={`${Style.blogExcerpt} m-0`}>{excerpt}</p>
                            </div>
                            <div className={Style.blogCardFooter}>
                                <Link
                                    href={href}
                                    className={Style.readMore}
                                    aria-label={readMoreLabel}
                                    title={readMoreLabel}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

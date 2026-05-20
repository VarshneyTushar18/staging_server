"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Style from "./OurBlogs.module.css";

export default function BlogSlider({ posts }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center my-5">
                <p>No blog posts available at the moment.</p>
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
                const excerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, "");
                const readMoreDescription = `Click to read more about "${post.title.rendered}"`;

                return (
                    <SwiperSlide key={post.id}>
                        <div className={Style.blogCard}>
                            <div
                                className={`${Style.blogImage} d-flex justify-content-center align-items-center`}
                            >
                                <div
                                    className={Style.blogTitle}
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                            </div>
                            <div className={Style.blogContent}>
                                <p className={`${Style.blogExcerpt} m-0`}>{excerpt}</p>
                            </div>
                            <div className={Style.blogCardFooter}>
                                <a
                                    href={post.link}
                                    className={Style.readMore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Read more about ${post.title.rendered}`}
                                    title={readMoreDescription}
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

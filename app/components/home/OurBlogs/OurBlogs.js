import BlogSlider from "./BlogSlider";
import Style from "./OurBlogs.module.css";
import { fetchBlogPosts } from "@/lib/blogApi";

export default async function OurBlogs() {
    let posts = [];
    try {
        const result = await fetchBlogPosts({ perPage: 6 });
        posts = result.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    return (
        <section className={Style.IndustriesServe}>
            <div className="container m-auto" data-aos="fade-up" data-aos-duration="800">
                <div className="title-section text-center m-auto">
                    <p className="sub-title text-uppercase">FROM THE BLOG</p>
                    <h2 className="title">Latest Insights and Updates</h2>
                    <p>
                        Never miss an update and catch up with Tech2Globe in the blog & news
                        section, including latest industry trends, our guides, tips & tricks,
                        featured articles, CEO anecdotes and many more.
                    </p>
                </div>
                <BlogSlider posts={posts} />
            </div>
        </section>
    );
}

import Style from "./blogs.module.css";

export default function BlogsLayout({ children }) {
  return <div className={Style.blogRoute}>{children}</div>;
}

import Link from "next/link";
import Style from "./ServiceSidebar.module.css";
import ServiceForm from "../ServiceForm/ServiceForm";

export default function ServiceSidebar({ sections }) {
  return (
    <>
      {
        sections.map((section, index) => (
          <div key={index} className={Style.SidebarCard}>
            <div className={Style.Section}>
              <h4 className={Style.SidebarTitle}>{section.heading}</h4>
              <ul className={Style.Listing}>
                {section.links.map((item) => (
                  <li key={item.id} className={Style.ListItem}>
                    <Link href={item.path} className={Style.SidebarLink}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      }
      <div className={Style.SidebarCard}>
        <div className={Style.Section}>
          <h4 className={Style.SidebarTitle}>Contact Us</h4>
          <ServiceForm />
        </div>
      </div>

    </>
  );
}

import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import './custom.css';
import EventSlider from "@/app/components/EventSlider/EventSlider";

export const metadata = {
  title: "Life@Tech2Globe: Social and cultural events",
  description:
    "Folks who only work and never play are very dull indeed. Be it Diwali, Christmas, New Year, or Holi, we celebrate every holiday as a team in Tech2globe.",
  alternates: {
    canonical: "https://www.tech2globe.com/life-at-tech2globe",
  },
  openGraph: {
    title: "Life@Tech2Globe: Social and cultural events",
    description:
      "Celebrating festivals and events together at Tech2Globe builds a vibrant workplace culture.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/life-at-tech2globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life@Tech2Globe: Social and cultural events",
    description:
      "Discover the vibrant culture and celebrations at Tech2Globe.",
  },
};


export default function LifeAtTech2Globe() {
  return (
    <>
      <div className="banner-outer inner-banner banner-2">
        <div className="container-fluid">
          <div className="row py-5 flex-column justify-content-center align-items-center">
            <div className="col-md-4">
              <h1 className="text-center text-white">Life @ Tech2Globe</h1>
            </div>
            <div className="col-md-8">
              <p className="text-light text-center">At Tech2Globe, everything begins with our employees. We take cares with our
                employees who take cares of our customers in most ideal manner. Being a piece of Tech2Globe offer chances to
                new learning and ability upgrade. Go along with us, to discover numerous minutes when how you can make
                differential experience for customer and yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb
        parentName="About Us"
        pageName="Life@Tech2Globe"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <EventSlider/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

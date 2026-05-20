import Image from "next/image";
import Style from "./servicebanner.module.css"; 
export default function ServiceBanner({ pageName, imageSrc }) {

const bannerImage =
    imageSrc || "/images/services/service-inner/data-management-banner-1.jpg";
    
    return (
        <>
            <div className={`${Style.BannerContainer} row mb-4 position-relative`}>
                <div className="col-12">
                    <Image
                        src={bannerImage}
                        alt={pageName || "banner"}
                        width={1200}
                        height={330}
                        className="img-fluid w-100 banner-top-z"
                        priority
                    />
                </div>

                <div className={Style.TextBanner}>
                    <h2>{pageName}</h2>
                </div>
            </div>
        </>
    )
}
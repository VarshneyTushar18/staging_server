import Style from "./PageHeader.module.css";

export default function PageHeader({ pageHeaderData }) {

    return (

        pageHeaderData.shortBanner ? <section
            className={`${Style.ShortPageBanner} ${pageHeaderData.overlay ? Style.Overlay : ""}`}
            style={{
                backgroundImage: `linear-gradient(#00000075, #00000095), url(${pageHeaderData.backgroundImage})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Left Column - Text */}
                    <div className="col-md-12">
                        <div className={Style.PageContent}>
                            <h1 className="text-center text-white">{pageHeaderData.title}</h1>
                        </div>
                    </div>

                    {/* Right Column - Image Placeholder (if needed later) */}
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
            : <section
                className={`${Style.PageBanner} ${pageHeaderData.overlay ? Style.Overlay : ""}`}
                style={{
                    backgroundImage: `linear-gradient(#00000075, #00000075), url(${pageHeaderData.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container">
                    <div className="row">
                        {/* Left Column - Text */}
                        <div className="col-md-9">
                            <div className={Style.PageContent}>
                                <h1 className="text-white">{pageHeaderData.title}</h1>
                                <p>{pageHeaderData.description}</p>
                                <div className="ws-btnblock">
                                    <a
                                        href={pageHeaderData.buttonLink}
                                        className="button-red mt-2 mx-0"
                                    >
                                        {pageHeaderData.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image Placeholder (if needed later) */}
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>



    );
}

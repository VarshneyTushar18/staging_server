import { FaArrowRight } from "react-icons/fa";
import Style from "./faqs.module.css";
export default function FaqSection({ faqs }) {
    // FAQ data stored in an array

    return (
        <>
            <section className="FaqSection pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-page-heading-2">
                                <h2 className="pb-3 text-danger text-center">Frequently Asked Questions</h2>
                            </div>
                        </div>

                        <div className="col-md-12 inner-pages-faqs-a">
                            <div id="faq" className="row" role="tablist" aria-multiselectable="true">
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="col-lg-6">
                                        <div className={Style.Panel}>
                                            <div className={`${Style.PanelHeading} d-flex`} role="tab" id={`question${faq.id}`}>
                                                <div className={Style.FaqIcon}>
                                                    <FaArrowRight />
                                                </div>
                                                <h3 className={Style.PanelTitle}>
                                                    <a
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-parent="#faq"
                                                        href={`#answer${faq.id}`}
                                                        aria-expanded="false"
                                                        aria-controls={`answer${faq.id}`}
                                                    >
                                                        {faq.question}
                                                    </a>
                                                </h3>
                                            </div>
                                            <div
                                                id={`answer${faq.id}`}
                                                className="panel-collapse collapse"
                                                role="tabpanel"
                                                aria-labelledby={`question${faq.id}`}
                                            >
                                                <div className={Style.PanelBody}>
                                                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

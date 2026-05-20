"use client";
import { useState } from "react";

export default function FaqSection({ faqs }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="row pt-5 pb-5">
            <div className="container">
                <h2 className="mb-4">Frequently Asked Questions</h2>

                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item mb-2" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${
                                        activeIndex === index ? "" : "collapsed"
                                    }`}
                                    onClick={() => toggle(index)}
                                >
                                    {faq.question}
                                </button>
                            </h2>

                            <div
                                className={`accordion-collapse collapse ${
                                    activeIndex === index ? "show" : ""
                                }`}
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
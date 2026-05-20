"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "./custom.css";

export default function MilesmakerCard({ member }) {
    const modalId = `modal-${member.id}`;

    return (
        <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                    {/* Image */}
                    <div>
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="MilesImage rounded-circle object-fit-cover mb-3"
                        />
                    </div>

                    {/* Content */}
                    <div className="user-content">
                        <h4 className="text-capitalize user-name fw-bold text-danger">{member.name}</h4>

                        <p className="text-muted small text-capitalize mb-2">
                            — {member.designation}
                        </p>

                        <div className="small">
                            <FaQuoteLeft className="text-warning fs-6" />
                        </div>

                        <p className="text-muted my-3">{member.shortDesc}</p>

                        <div className="text-start">
                            <button
                                className="btn btn-danger btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={`#${modalId}`}
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id={modalId}
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">

                        {/* Modal Header */}
                        <div className="modal-header">
                            <button type="button" className="close bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="fw-bold fs-1 text-white">×</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body bg-light">
                            <div className="card shadow-sm border-0">
                                <div className="card-body text-center">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                        className="MilesImage rounded-circle object-fit-cover mb-3"
                                    />

                                    <h3 className="text-capitalize user-name fw-bold mb-3">{member.name}</h3>

                                    <p className=" text-capitalize text-muted small blockquote-footer">{member.designation}</p>

                                    <div className="small text-start">
                                        <FaQuoteLeft className="text-warning fs-5" />
                                    </div>

                                    <p className="text-muted my-3 text-start">{member.fullDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <button
                                className="btn btn-danger bg-white text-dark float-left"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
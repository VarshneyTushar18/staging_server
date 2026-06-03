import "./custom.css";

const ClientPortfolio = ({ clients }) => {
    return (
        <section className="ClientPortfolio">
            <div className="cp-bg">
                <div className="container">
                    <div className="cp-header">
                        <h2 className="cp-title">International Client Portfolio</h2>
                    </div>

                    <div className="cp-grid">
                        {clients.map((item, idx) => (
                            <div className="cp-card" key={idx}>
                                <div className="cp-card-top">
                                    <div
                                        className="cp-logo"
                                        style={{ background: item.gradient }}
                                    >
                                        <span className="cp-initials">
                                            {item.initials}
                                        </span>
                                    </div>

                                    <div className="cp-identity">
                                        <h3 className="cp-client-name">
                                            {item.client}
                                        </h3>

                                        <span className="cp-country-badge">
                                            {item.country}
                                        </span>
                                    </div>
                                </div>

                                <div className="cp-divider"></div>

                                <div className="cp-card-body">
                                    <p className="cp-project-label">
                                        Project
                                    </p>

                                    <p className="cp-project-name">
                                        {item.project}
                                    </p>

                                    <span className="cp-category-tag">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="cp-result-box">
                                    <span className="cp-result-icon">📈</span>

                                    <div>
                                        <p className="cp-result-value">
                                            {item.result}
                                        </p>

                                        <p className="cp-result-sub">
                                            {item.resultSub}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientPortfolio;
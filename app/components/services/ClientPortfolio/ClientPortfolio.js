import "./custom.css";

const COUNTRY_CODES = {
    USA: "US",
    US: "US",
    UK: "GB",
    GB: "GB",
    Canada: "CA",
    CA: "CA",
    Germany: "DE",
    DE: "DE",
    Italy: "IT",
    IT: "IT",
    Ireland: "IE",
    IE: "IE",
    Japan: "JP",
    JP: "JP",
    Australia: "AU",
    AU: "AU",
    Netherlands: "NL",
    NL: "NL",
    Singapore: "SG",
    SG: "SG",
    France: "FR",
    FR: "FR",
    Denmark: "DK",
    DK: "DK",
    Russia: "RU",
    RU: "RU",
    Vietnam: "VN",
    VN: "VN",
    "South Korea": "KR",
    KR: "KR",
    Sweden: "SE",
    SE: "SE",
    Mexico: "MX",
    MX: "MX",
    UAE: "AE",
    AE: "AE",
    Austria: "AT",
    AT: "AT",
    Ghana: "GH",
    GH: "GH",
    Nigeria: "NG",
    NG: "NG",
    China: "CN",
    CN: "CN",
    Brazil: "BR",
    BR: "BR",
    India: "IN",
    IN: "IN",
};

const getCountryCode = (country) => {
    if (!country) return null;

    const mapped = COUNTRY_CODES[country];
    if (mapped) return mapped;

    if (/^[A-Za-z]{2}$/.test(country)) {
        return country.toUpperCase();
    }

    return null;
};

const ClientPortfolio = ({ clients }) => {
    return (
        <section className="ClientPortfolio">
            <div className="cp-bg">
                <div className="container">
                    <div className="cp-header">
                        <h2 className="cp-title">Client Portfolio</h2>
                    </div>

                    <div className="cp-grid">
                        {clients.map((item, idx) => {
                            const countryCode = getCountryCode(item.country);

                            return (
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

                                        {countryCode ? (
                                            <span
                                                className="cp-country-badge"
                                                title={item.country}
                                                aria-label={item.country}
                                            >
                                                <img
                                                    src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
                                                    alt={`${item.country} flag`}
                                                    width={24}
                                                    height={16}
                                                    className="cp-country-flag"
                                                    loading="lazy"
                                                />
                                            </span>
                                        ) : (
                                            <span className="cp-country-badge">
                                                {item.country}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="cp-divider"></div>

                                <div className="cp-card-body">
                                    {/* <p className="cp-project-label">
                                        Project
                                    </p> */}

                                    <p className="cp-project-name">
                                        {item.project}
                                    </p>

                                    <p className="cp-project-desc">
                                        {item.desc}
                                    </p>

                                    <span className="cp-category-tag">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="cp-result-box">
                                    {/* <span className="cp-result-icon">📈</span> */}

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
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientPortfolio;
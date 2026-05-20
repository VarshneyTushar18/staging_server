import Style from "./FunFact.module.css";

export default function FunFact() {
  const counters = [
    { value: "12K+", title: "Successful Projects" },
    { value: "300+", title: "Our Strength" },
    { value: "98%", title: "Customer Satisfaction Score", padding: true },
    { value: "25+", title: "Customer Based Countries" },
    { value: "5+", title: "Global Delivery Locations" },
    { value: "4.5+", title: "Star on Renowned Platforms", padding: true },
  ];

  return (
    <div className={Style.FunFact}>
      <div className={Style.IconLines}></div>
      <div className="container">
        <div className={Style.FunCounter}>
          <div className="row justify-content-between justify-content-lg-center justify-content-xl-between">
            {counters.map((counter, index) => (
              <div
                key={index}
                className={`${Style.CounterBlock} col-lg-4 col-xl-2 col-6`}
              >
                <div className={`${Style.Inner} mx-auto`}
                  style={counter.padding ? { padding: "20px" } : {}}
                >
                  <div className="outer-box">
                    <div className={`${Style.CountBox} counted`}>
                      <span className="count-text" data-speed="3000" data-stop={counter.value}>
                        {counter.value}
                      </span>
                    </div>
                    <h4 className={Style.CounterTitle}>{counter.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function CTASection({ data }) {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-md-12">
        {data.map((cta) => (
          <div className="cta-wrapper" key={cta.title}>
            <div className="row">

              <div className="col-md-8">
                <h2 className="text-white mb-4">{cta.title}</h2>

                {cta.description.map((para) => (
                  <p className="text-white" key={para}>
                    {para}
                  </p>
                ))}

                <div className="btn-block">
                  <Link href={cta.buttonLink} className="button-red mt-2">
                    {cta.buttonText}
                  </Link>
                </div>
              </div>

              <div className="col-md-4"></div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
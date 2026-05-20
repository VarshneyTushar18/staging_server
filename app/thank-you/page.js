import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
    

      <section className="container inner-page-content">
        <div className="row text-center">
          <div className="col-md-12 py-5">
            <div
              style={{
                background: "#65b741",
                width: "55px",
                height: "55px",
                margin: "0 auto 20px",
                display: "grid",
                placeContent: "center",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "39px",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                ✓
              </span>
            </div>

            <h1 className="text-danger">Thank You For Contacting Us</h1>
            <p className="text-center pb-0 mb-1">
              Our team will get back to you within 1 business day.
            </p>
            <p className="text-center">
              Please check your junk e-mail folder and your voicemail box to
              ensure our communication is not blocked.
            </p>

            <div className="col-md-6 offset-md-3 col-sm-12 col-12">
              <div className="alert alert-success text-center">
                If you do not hear from us within 1 business day, please send an
                email to{" "}
                <strong>
                  <a href="mailto:Info@tech2globe.com" className="text-success">
                    Info@tech2globe.com
                  </a>
                </strong>{" "}
                We will attend you at the earliest
              </div>

              <Link
                href="/"
                className="btn btn-danger btn-lg mb-3"
                style={{ backgroundColor: "#bc0101" }}
              >
                Find out more about our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { BOOKING_URL } from "../../constants";
import "./Solution.css";
import SkinCare from "../../assets/images/solutions/skin-care.jpg";

export default function Solutions() {
  return (
    <>
      <section className="py-24 p-4 h-auto bg-muted d-flex flex-column justify-content-center">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="fs-1 fw-bold mb-3">
              Transform Your Skin with Professional, Personalized Care
            </h1>
            <p className="lead text-muted mb-4">
              Hey! I'm Carolina and I have over 18 years of experience in
              skincare, my journey began with my own struggle with acne, which
              led me to study at the Euro Institute of Skin Care in Seattle.
              Combining European and naturopathic techniques with advanced
              medispa procedures, I’ve built a loyal client base in Midland,
              Texas. My expertise and personalized approach ensure that each
              client receives the best care tailored to their unique skin needs.
              <br /><br />
              Get in touch to book your consultation today!
            </p>
            <a
              href={BOOKING_URL}
              className="btn btn-dark fs-4 btn-lg mb-4 w-100"
            >
              Book my consultation now!
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 text-center">
            <img
              src={SkinCare}
              alt="Skin Care Treatment"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
}

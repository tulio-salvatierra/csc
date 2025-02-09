import "./Solution.css";

export default function Solutions() {
  return (
    <>
      <section className="py-24 p-4 h-auto bg-muted d-flex flex-column justify-content-center">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              Transform Your Skin with Professional, Personalized Care
            </h1>
            <p className="lead text-muted fs-3 mb-4">
              With over 18 years of experience in skincare, my journey began
              with my own struggle with acne, which led me to study at the Euro
              Institute of Skin Care in Seattle. Combining European and
              naturopathic techniques with advanced medispa procedures, I’ve
              built a loyal client base in Midland, Texas. My expertise and
              personalized approach ensure that each client receives the best
              care tailored to their unique skin needs.
            </p>
            <a
              href="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c1185t201404101626pu568R8C68u8RJ4Pz98Mr&theme=651&p_mobile=y&p_start=1"
              className="btn btn-dark fs-4 btn-lg mb-4 w-100"

            >
              Book my consultation now!
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 text-center">
            <img
              src="https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Skin Care Treatment"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
}

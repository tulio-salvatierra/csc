import "./../../App.css";

export default function SkinCareClinicLanding() {
  const services = [
    {
      title: "Facial Treatments",
      description: "Customized facials for all skin types",
    },
    {
      title: "Skin Rejuvenation",
      description: "Advanced techniques to restore youthful glow",
    },
    {
      title: "Acne Treatment",
      description: "Effective solutions for clear, healthy skin",
    },
    {
      title: "Dermaplaning",
      description: "Top layer of skin removal to exfoliate and improve texture",
    },
  ];


  return (
    
      <section className="mt-5 h-100 mt-32 mb-32">
        <h2 className="text-center fs-1 fw-bold mb-4">Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6">
              <a href="/services" className="text-decoration-none text-dark">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title fs-2 text-primary d-flex align-items-center hlTitle">
                      {service.title}
                    </h5>
                    <p className="card-text text-muted fs-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
  );
}

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

  const highlights = [
    {
      title: "Expert aesthetician",
      description: "Board-certified professional with over 10 years of experience",
    },
    {
      title: "Cutting-edge Technology",
      description: "State-of-the-art equipment for optimal results",
    },
    {
      title: "Personalized Care",
      description: "Tailored treatments to meet your unique skin needs",
    },
  ];

  return (
    <div className="min-vh-100 bg-light flex justify-content-evenly align-items-center">
      {/* Hero Section */}

      {/* Services Section */}
      <section className="mt-5 h-100" service>
        <h2 className="text-center fs-1 fw-bold mb-4">Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6">
              <a href="/services" className="text-decoration-none text-dark">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fs-2 text-primary d-flex align-items-center hlTitle">
                      <i className="bi bi-stars me-2"></i>
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

      {/* Highlights Section */}
      <section className="mt-5 why">
        <h2 className="text-center fw-bold mb-4 fs-1">Why Choose Us</h2>
        <div className="row text-center g-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold hlTitle fs-2">{highlight.title}</h5>
                <p className="text-muted fs-3">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

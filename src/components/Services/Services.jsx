import React from "react";

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
      title: "Anti-Aging Therapy",
      description: "Reduce fine lines and wrinkles",
    },
  ];

  const highlights = [
    {
      title: "Expert Dermatologists",
      description: "Board-certified professionals with years of experience",
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
    <div className="min-vh-100 bg-light">
      <main className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              Radiant Skin, Confident You
            </h1>
            <p className="lead text-muted mb-4">
              Experience expert skincare treatments tailored to your unique
              needs at our state-of-the-art clinic.
            </p>
            <a href="#consultation" className="btn btn-primary btn-lg">
              Book Consultation
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Skin Care Treatment"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Services Section */}
        <section className="mt-5">
          <h2 className="text-center fw-bold mb-4">Our Services</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-primary d-flex align-items-center">
                      <i className="bi bi-stars me-2"></i>
                      {service.title}
                    </h5>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mt-5">
          <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
          <div className="row text-center g-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="col-md-4">
                <div className="p-3">
                  <h5 className="fw-bold">{highlight.title}</h5>
                  <p className="text-muted">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

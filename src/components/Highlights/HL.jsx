import "./../../App.css";

export default function HL() {
  const highlights = [
    {
      id: 1,
      title: "Expert aesthetician",
      description:
        "Board-certified professional with over 10 years of experience",
    },
    {
      id: 2,
      title: "Cutting-edge Technology",
      description: "State-of-the-art equipment for optimal results",
    },
    {
      id: 3,
      title: "Personalized Care",
      description: "Tailored treatments to meet your unique skin needs",
    },
  ];

  return (
    <section className="mt-32 mb-32 why">
      <h2 className="text-left fw-bold mb-4 fs-1">Why Choose Us</h2>
      <div className="row text-left g-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="col-md-4 bg-black text-white border-2">
            <div className="p-3">
              <h2 className="text-muted fs-1 text-left p-4 text-decoration-underline">{highlight.id}</h2>
              <h5 className="fw-bold hlTitle fs-3 text-white">
                {highlight.title}
              </h5>
              <p className="text-muted fs-3 mt-4">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

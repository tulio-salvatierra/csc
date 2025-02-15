import "./../../App.css";

export default function HL() {


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
   
      <section className="mt-32 mb-32 why">
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

  );
}

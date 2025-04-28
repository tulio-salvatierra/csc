import "./../../App.css";
import CP from "./../../assets/images/servicesComponent/cp.jpeg";
import WAX from "./../../assets/images/servicesComponent/wax.jpg";
import NN from "./../../assets/images/ServicesPageCard/nano.jpg";
import Therapy from "./../../assets/images/servicesComponent/therapy.png";

export default function ServicesComponent() {
  const services = [

    {
      title: "Chemical Peels",
      description: "Exfoliation and skin rejuvenation",
      image: CP,
    },
    {
      title: "Waxing Services",
      description: "Waxing services for face and body",
      image: WAX,
    },
    {
      title: "Nano Needle",
      description: "Non-invasive skin rejuvination treatment",
      image: NN,
    },
    {
      title: "Carboxy Therapy",
      description:
        "A minimally invasive treatment that uses carbon dioxide to improve skin elasticity, reduce cellulite, and enhance circulation.",
      image: Therapy,
    },
  ];

  return (
    <section className="h-100 mt-32 py-24 mb-32">
      <h2 className="text-center fs-1 fw-bold mb-4">Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 p-5">
            <a href="/services" className="text-decoration-none text-dark">
              <div className="card border-0 service-card h-100 p-5 shadow-lg">
                <img
                  src={service.image}
                  className="card-img"
                  alt={service.title}
                />
                <div className="card-body">
                  <h2 className="card-title fs-3 p-0 text-dark d-flex align-items-center hlTitle">
                    {service.title}
                  </h2>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

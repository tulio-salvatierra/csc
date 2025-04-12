import "./../../App.css";
import DP from "./../../assets/images/services/dp.jpg";
import HF from "./../../assets/images/services/hf.jpg";
import MD from "./../../assets/images/services/md.jpg";
import EF from "./../../assets/images/services/ef.jpg";
import CP from "./../../assets/images/services/cp.jpg";
import WAX from "./../../assets/images/services/wax.jpg";
import NN from "./../../assets/images/services/nano.jpg";
import Therapy from "./../../assets/images/services/therapy.jpg";

export default function SkinCareClinicLanding() {
  const services = [
    {
      title: "Dermaplaning",
      description: "Top layer of skin removal to exfoliate and improve texture",
      image: DP,
    },
    {
      title: "Hydrafacial",
      description: "Deep cleansing, exfoliation, and hydration",
      image: HF,
    },
    {
      title: "Microdermabrasion",
      description: "Exfoliation and skin rejuvenation",
      image: MD,
    },
    {
      title: "European facial",
      description: "Deep cleansing, exfoliation, and hydration",
      image: EF,
    },
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

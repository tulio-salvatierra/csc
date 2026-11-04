import { Link } from "react-router-dom";
import "./Services.css";
import SERVICES from "../blog/servicesPageCard";

export default function ServicesComponent() {
  return (
    <section id="home-services" className="home-services" aria-labelledby="home-services-heading">
      <div className="home-services-inner">
        <header className="home-services-heading">
          <div>
            <p className="home-services-eyebrow">Personalized skincare</p>
            <h2 id="home-services-heading">Premium Services</h2>
          </div>
          <p>Explore treatments tailored to your skin, with care and attention at every visit.</p>
        </header>
        <div className="home-services-grid">
          {SERVICES.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="home-service-card">
              <div className="home-service-image">
                <img src={service.icon} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="home-service-content">
                <h3>{service.name}</h3>
                <p>{service.tagline}</p>
                <span className="home-service-details">Explore treatment <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/services" className="home-services-all">View all services <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

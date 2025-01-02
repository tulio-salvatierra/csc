import "./../../App.css";
import { TELEPHONE, EMAIL } from "../../constants";

export default function AboutPage() {
  return (
    <div className="container py-4">
      {/* Our Story Section */}
      <section className="mb-5">
        <h2 className="h4 mb-3 hlTitle">Our Story</h2>
        <p className="text-muted">
          Founded in 2023, our company has been at the forefront of innovation
          in Hydrafacial, Nano Needling,Deep cleansing facial, anti-aging
          facial, face & body waxing, lash & brow tinting, eyelash extensions,
          microdermabrasion, chemical peels.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="mb-5">
        <h2 className="h4 mb-3 hlTitle">Our Team</h2>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div className="col-12 col-md-6 col-lg-4" key={member.name}>
              <div className="card text-center h-100">
                <div className="card-header bg-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto"
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-2">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-5">
        <h2 className="h4 mb-3">Our Mission</h2>
        <blockquote className="blockquote border-start ps-3">
          <p className="text-muted">
            "Our mission is to enhance your natural beauty and boost your
            confidence by providing personalized, results-driven skincare
            treatments and luxurious beauty services. From rejuvenating facials
            to expert lash and brow care, we are dedicated to helping you look
            and feel your best."
          </p>
        </blockquote>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="h4 mb-3">Contact Us</h2>
        <p className="text-muted">
          We'd love to hear from you! Reach out to us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary text-decoration-none"
          >
            info@example.com
          </a>{" "}
          or give us a call at{" "}
          <a
            href={`tel:${TELEPHONE}`}
            className="text-primary text-decoration-none"
          >
            {TELEPHONE}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Carolina Camargo",
    role: "CEO & Founder",
    image: "",
  },
  {
    name: "Kike Vivaldi",
    role: "CTO",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "El gatico",
    role: "Lead Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
];

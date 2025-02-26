import "./../../App.css";
import { TELEPHONE, EMAIL } from "../../constants";
import Caro from "./../../assets/images/about/carolina.jpg";

export default function AboutPage() {
  return (
    <div className="container py-4">
      {/* Our Story Section */}
      <section className="mb-5">
        <h2 className="display-2 mb-3 hlTitle">Our Story</h2>
        <p className="text-muted">
          Growing up, I struggled with acne in my late teens and early 20s, and
          it affected my confidence. But once I started getting professional
          treatments and saw my skin clear up, I felt like a new person—more
          confident and comfortable in my own skin. That experience inspired me
          to help others feel the same. As an esthetician, my goal is simple: to
          give my clients the confidence and self-esteem they deserve by
          providing personalized skincare that truly works. At my studio, every
          treatment is about you—your skin, your journey, and helping you feel
          great in your own skin. Whether it’s acne, aging, or just skin care,
          I’m here to support you every step of the way.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="mb-5">
        <h2 className="mb-3 hlTitle">About me</h2>
        <div className="row g-4 justify-content-center mt-10">
          {teamMembers.map((member) => (
            <div className="col-12 col-md-8 col-lg-8" key={member.name}>
              <div className="card text-center h-100">
                <div className="card-header bg-transparent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" mx-auto"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-muted text-center">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-5 mt-10">
        <h2 className="display-2 mb-3">Our Mission</h2>
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
    </div>
  );
}

const teamMembers = [
  {
    name: "Carolina Alcalá",
    role: "CEO & Founder",
    image: Caro,
  },
];

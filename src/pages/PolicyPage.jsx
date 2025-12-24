import "./../App.css";
import FloatingCallbutton from "../components/floatingCallButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PolicyComponent from "../components/PolicyComponent";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema } from "../components/SEO/StructuredData";

export default function PolicyPage() {
  return (
    <>
      <SEO
        title="Policies & Cancellation - Carolina Skin Centre, Midland TX"
        description="Learn about our cancellation policy, booking terms, and service policies at Carolina Skin Centre in Midland, Texas."
        keywords="cancellation policy, booking policy, skincare policies, Midland TX esthetician policies"
        url="/policies"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Policies", url: "/policies" },
        ]}
      />
      <main className="parent-page">
        <div className="header">
          <Header />
        </div>
        <div className="content">
         <PolicyComponent/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
      <FloatingCallbutton />
    </>
  );
}

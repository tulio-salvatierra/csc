import "./../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PolicyComponent from "../components/PolicyComponent";
import { PAGE_SEO } from "../data/seoMeta";
import SEO from "../components/SEO/SEO";
import { BreadcrumbSchema } from "../components/SEO/StructuredData";

export default function PolicyPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO["/policies"].title}
        description={PAGE_SEO["/policies"].description}
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
          <Header showBookButton={false} />
        </div>
        <div className="content">
         <PolicyComponent/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}

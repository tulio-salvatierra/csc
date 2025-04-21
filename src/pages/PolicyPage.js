import "./../App.css";
import FloatingCallbutton from "../components/floatingCallButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PolicyComponent from "../components/PolicyComponent";

export default function PolicyPage() {
  return (
    <>
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

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FaqSectionFaq1 from "../components/faq/FaqSectionFaq1";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Faq() {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FaqSectionFaq1 />
    </>
  );
}

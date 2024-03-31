import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FooterSectionFooter1 from "../components/Footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Footer() {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FooterSectionFooter1 />
    </>
  );
}

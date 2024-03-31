import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactSectionContacts1 from "../components/contacts/ContactSectionContacts1";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactSectionContacts1 />
    </>
  );
}

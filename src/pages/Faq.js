import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FaqSectionFaq1 from '../components/faq/FaqSectionFaq1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Faq() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FaqSectionFaq1 />
    </React.Fragment>
  );
}


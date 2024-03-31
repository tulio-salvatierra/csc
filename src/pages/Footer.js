import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FooterSectionFooter1 from '../components/footer/FooterSectionFooter1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Footer() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FooterSectionFooter1 />
    </React.Fragment>
  );
}


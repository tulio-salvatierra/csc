import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BrandsSectionLogoClouds1 from '../components/logo-clouds/BrandsSectionLogoClouds1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Brands() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <BrandsSectionLogoClouds1 />
    </React.Fragment>
  );
}


import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServicesSectionBlog1 from '../components/blog/ServicesSectionBlog1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Services() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ServicesSectionBlog1 />
    </React.Fragment>
  );
}


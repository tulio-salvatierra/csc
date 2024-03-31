import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CalltoactionSectionCallToAction1 from '../components/call-to-action/CalltoactionSectionCallToAction1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Calltoaction() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CalltoactionSectionCallToAction1 />
    </React.Fragment>
  );
}


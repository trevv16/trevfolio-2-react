import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume | Trevor's Portfolio</title>
      </Helmet>
      <div></div>
      <Newsletter />
    </>
  );
}

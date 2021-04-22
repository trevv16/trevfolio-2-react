import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Trevor's Portfolio</title>
      </Helmet>
      <div></div>
      <Newsletter />
    </>
  );
}

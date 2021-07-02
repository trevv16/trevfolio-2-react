import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter, Resume } from '../components/index';
import { SITE_NAME, SITE_DESC, SITE_IMG, SITE_URL } from '../Config';
import { getSeo } from '../utils/seo';

export default function HomePage() {
  const title = SITE_NAME;

  return (
    <>
      <Helmet>{getSeo(title, SITE_DESC, SITE_IMG, SITE_URL)}</Helmet>
      <div className='overflow-hidden'></div>
      <Resume />
      <Newsletter />
    </>
  );
}

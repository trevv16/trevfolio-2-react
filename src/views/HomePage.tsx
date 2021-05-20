import React from 'react';
import { Newsletter, Resume, SeoHelmet } from '../components/index';

export default function HomePage() {
  return (
    <>
      <SeoHelmet title="Trevor's Portfolio" description='' image='' image_alt='Trevor Njeru logo' />
      <div className='overflow-hidden'></div>
      <Resume />
      <Newsletter />
    </>
  );
}

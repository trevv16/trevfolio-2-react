import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';

export default function HomePage() {
  const Intro = () => (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          Hi, <span className='bg-indigo-600 text-white p-1 rounded'>Im Trevor</span> . Nice to meet you
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Trevor's Portfolio</title>
      </Helmet>
      <div className='container mx-auto'>
        <Intro />
      </div>
      <Newsletter />
    </>
  );
}

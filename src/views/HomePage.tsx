import React, { useEffect, useState } from 'react';
import { Newsletter, Resume, SeoHelmet } from '../components/index';

export default function HomePage() {
  const Intro = () => (
    <>
      <div className='font-sans max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='-mt-12 my-8 aspect-w-16 aspect-h-6'>
          <img className='object-cover shadow-lg rounded-lg' src='trev-intro.jpg' alt='' />
        </div>
        <div className='text-center'>
          <p className=' text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Hi, <span className='bg-primary text-white px-2 rounded-md'>Im Trevor</span> . Nice to meet you
          </p>
          <p className='max-w-2xl mt-8 mx-auto text-xl text-gray-500'>
            A computer science student based in Charlotte, NC. Enhancing my skills as a full stack developer with a keen
            interest in design.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <SeoHelmet title="Trevor's Portfolio" description='' image='' image_alt='Trevor Njeru logo' />
      <div className='overflow-hidden'></div>
      <div className='container mx-auto'>
        <Intro />
      </div>
      <Resume />
      <Newsletter />
    </>
  );
}

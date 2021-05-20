import React from 'react';

export default function SuspenseFallback(props: any) {
  return (
    <>
      <div className='my-12 transform translate-x-1/3 lg:translate-x-1/2'>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='border-solid animate-spin rounded-full border-blue-400 border-8 h-44 w-44'
        ></div>
      </div>
    </>
  );
}

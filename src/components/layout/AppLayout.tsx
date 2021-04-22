import React, { useState } from 'react';

import { Navigation, Footer } from '../index';

{
  /* eslint-disable max-len  */
}
export default function AppLayout(props: any) {
  return (
    <>
      <Navigation />
      <div id='content'>{props.children}</div>
      <Footer />
    </>
  );
}

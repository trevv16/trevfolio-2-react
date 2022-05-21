import { Helmet } from 'react-helmet-async';
import { Newsletter, Resume } from '../components/index';
import { getSeo } from '../utils/seo';

export default function HomePage() {
  return (
    <>
      <Helmet>{getSeo()}</Helmet>
      <div className='overflow-hidden'></div>
      <Resume />
      <Newsletter />
    </>
  );
}

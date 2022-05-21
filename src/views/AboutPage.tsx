import { CameraIcon } from '@heroicons/react/solid';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';
import { getSeo } from '../utils/seo';

export default function AboutPage() {
  return (
    <>
      <Helmet>{getSeo('About')}</Helmet>
      <div className='overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='mt-1 hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
          <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
            <div>
              <h2 className='font-sans text-base text-primary font-semibold tracking-wide uppercase'>About Me</h2>
              <h3 className='font-sans mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Trevor Njeru
              </h3>
            </div>
          </div>
          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
              </svg>
              <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                <figure>
                  <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                    <img
                      className='rounded-lg shadow-lg object-cover object-center'
                      src='trev-chillin.jpg'
                      alt='Trevor hanging out at the apple store'
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className='mt-3 flex text-sm text-gray-500'>
                    <CameraIcon className='flex-none w-5 h-5 text-gray-400' aria-hidden='true' />
                    <span className='font-sans ml-2'>Photograph by Ronnie Kariuki</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                <p className='font-sans text-lg text-gray-500'>
                  My Name is Trevor Njeru, I am a self-taught full stack developer and senior Computer Science student
                  with a concentration in Human-Computer Interaction, and I am both a Kenyan and American citizen.
                </p>
              </div>
              <div className='font-sans text-lg mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <p>
                  I have lived in North Carolina basically my whole life, but I did experience living and going to
                  school in Kenya for about 2 years. As a result, I have a focus on learning skills for an international
                  marketplace.
                </p>
                <p>
                  {
                    'I am very comfortable with core computer science concepts like logic, data structures & algorithms, security fundamentals, and software architecture.'
                  }
                </p>
                <p>With my full stack skills, I have built projects using:</p>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Python</li>
                  <li>AWS Services</li>
                  <li>CI/CD</li>
                </ul>
                <p>
                  As well I have experience working in an Agile environment using dev tools like Git, Github Actions,
                  AWS, Heroku, and UI skills with Figma, and multiple Adobe CC programs.
                </p>
                <h3>Career Goals</h3>
                <p>
                  My career objective is to become a well-sought after software engineer in my field, utilizing my HCI
                  skills in a software architecture role to make a social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';
import { BookOpenIcon } from '@heroicons/react/outline';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaAws } from 'react-icons/fa';
import { SiKubernetes, SiLinux, SiMicrosoftazure } from 'react-icons/si';

export default function ResumePage() {
  const Header = () => {
    return (
      <>
        <div className='lg:relative'>
          <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
            <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
                <span className='block xl:inline'>Trevor Njeru</span>{' '}
                <span className='mt-2 block text-indigo-600 text-3xl'>Developer</span>
              </h1>
              <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='/projects'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    View Projects
                  </a>
                </div>
                <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                  <a
                    href='/contact'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
            <img
              className='absolute inset-0 w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
              alt=''
            />
          </div>
        </div>
      </>
    );
  };

  const Education = () => {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 sm:py-24 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Education
              </p>
              <p className='max-w-xl mt-5 text-xl text-gray-500'>
                Start building for free, then add a site plan to go live. Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Certifications = () => {
    const certifications = [
      {
        name: 'AWS Cloud Practitioner',
        cert_from: 'Amazon Web Services',
        date: 'Date',
        skill: 'AWS',
        skill_icon: 'aws',
        email: 'janecooper@example.com',
        cert_link: '#',
        cert_info_link: '#'
      },
      {
        name: 'AWS Solutions Architect',
        cert_from: 'Amazon Web Services',
        date: 'Date',
        skill: 'AWS',
        skill_icon: 'aws',
        email: 'janecooper@example.com',
        cert_link: '#',
        cert_info_link: '#'
      },
      {
        name: 'Kubernetes App Developer',
        cert_from: 'Cloud Native Computing Foundation',
        date: 'Date',
        skill: 'Kubernetes',
        skill_icon: 'kubernetes',
        email: 'janecooper@example.com',
        cert_link: '#',
        cert_info_link: '#'
      },
      {
        name: 'LPIC-1',
        cert_from: 'Linux Professional Institute',
        date: 'Date',
        skill: 'Linux',
        skill_icon: 'linux',
        email: 'janecooper@example.com',
        cert_link: '#',
        cert_info_link: '#'
      },
      {
        name: 'LPIC-2',
        cert_from: 'Linux Professional Institute',
        date: 'Date',
        skill: 'Linux',
        skill_icon: 'linux',
        email: 'janecooper@example.com',
        cert_link: '#',
        cert_info_link: '#'
      }
    ];

    const getSkillIcon = (skill: string) => {
      if (skill === 'aws') {
        return <FaAws className='w-10 h-10 flex-shrink-0 hover:text-gray-500' />;
      } else if (skill === 'linux') {
        return <SiLinux className='w-10 h-10 flex-shrink-0 hover:text-gray-500' />;
      } else if (skill === 'kubernetes') {
        return <SiKubernetes className='w-10 h-10 flex-shrink-0 hover:text-gray-500' />;
      } else if (skill === 'azure') {
        return <SiMicrosoftazure className='w-10 h-10 flex-shrink-0 hover:text-gray-500' />;
      }
    };

    return (
      <>
        <div className='bg-indigo-600'>
          <div className='max-w-7xl mx-auto py-16 sm:py-24 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl text-white font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Certifications
              </p>
              <p className='max-w-xl mt-5 text-xl text-white'>
                Start building for free, then add a site plan to go live. Account plans unlock additional features.
              </p>
            </div>
            <ul className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {certifications.map((cert) => (
                <li key={cert.email} className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'>
                  <div className='w-full flex items-center justify-between p-6 space-x-6'>
                    <div className='flex-1 truncate'>
                      <div className='flex items-center space-x-3'>
                        <h3 className='text-gray-900 text-sm font-medium truncate'>{cert.name}</h3>
                        <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                          {cert.skill}
                        </span>
                      </div>
                      <p className='mt-1 text-gray-500 text-sm truncate'>{cert.cert_from}</p>
                      <p className='mt-1 text-gray-500 text-sm truncate'>{cert.date}</p>
                    </div>
                    {getSkillIcon(cert.skill_icon)}
                  </div>
                  <div>
                    <div className='-mt-px flex divide-x divide-gray-200'>
                      <div className='w-0 flex-1 flex'>
                        <a
                          href={cert.cert_link}
                          className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                        >
                          <AiOutlineSafetyCertificate className='w-5 h-5 text-gray-400' aria-hidden='true' />
                          <span className='ml-3'>View</span>
                        </a>
                      </div>
                      <div className='-ml-px w-0 flex-1 flex'>
                        <a
                          href={cert.cert_info_link}
                          className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
                        >
                          <BookOpenIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                          <span className='ml-3'>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const Skills = () => {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Skills
              </p>
              <p className='max-w-xl mt-5 text-xl text-gray-500'>
                Start building for free, then add a site plan to go live. Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Experience = () => {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 sm:py-24 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Experience
              </p>
              <p className='max-w-xl mt-5 text-xl text-gray-500'>
                Start building for free, then add a site plan to go live. Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Resume | Trevor's Portfolio</title>
      </Helmet>
      <div className='container mx-auto max-w-7xl'>
        <Header />
        <Education />
      </div>
      <div className='bg-indigo-600'>
        <div className='container mx-auto max-w-7xl'>
          <Certifications />
        </div>
      </div>
      <div className='container mx-auto max-w-7xl mt-12'>
        <Skills />
        <Experience />
      </div>
      <Newsletter />
    </>
  );
}

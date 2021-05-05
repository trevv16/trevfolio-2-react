import React from 'react';
import shortid from 'shortid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

import { Icon, SkillList } from '../components/index';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function Resume(props: any) {
  const skills: SkillType[] = [
    {
      _id: 'k24l1fsgd323mvb89s',
      category: 'Front-End',
      name: 'React',
      description: '',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
      _id: 'k24l1dfoadfwvb89s',
      category: 'Back-End',
      name: 'Node',
      description: '',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
      _id: 'k24l1fsgdsab3bvb89s',
      category: 'Front-End',
      name: 'Typescript',
      description: '',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
      _id: 'k24af2m2e2f423bvbafd',
      category: 'Back-End',
      name: 'Typescript',
      description: '',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
      _id: 'l2nfada7a5j7l8n42',
      category: 'Deployment',
      name: 'AWS',
      description: '',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    }
  ];

  const Intro = () => (
    <>
      <div className='font-sans max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='-mt-10 my-8 aspect-w-16 aspect-h-6'>
          <img className='object-cover shadow-lg rounded-lg' src='trev-intro.jpg' alt='' />
        </div>
        <div className='text-center'>
          <h1 className='font-extrabold text-gray-900 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl'>
            Trevor Njeru
          </h1>
          <h1 className='mt-4 font-extrabold text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>
            Full Stack Developer
          </h1>
          <p className='max-w-2xl mt-8 mx-auto text-xl text-gray-500'>
            A computer science student based in Charlotte, NC. Enhancing my skills as a full stack developer with a keen
            interest in design.
          </p>
        </div>
      </div>
    </>
  );

  const Education = () => {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 sm:py-24 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Education
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

    return (
      <>
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto py-16 sm:py-24 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl text-white font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Certifications
              </p>
            </div>
            <ul className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {certifications.map((cert) => (
                <li key={shortid.generate()} className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'>
                  <div className='w-full flex items-center justify-between p-6 space-x-6'>
                    <div className='flex-1 truncate'>
                      <div className='flex items-center space-x-3'>
                        <h3 className='text-gray-900 text-sm font-bold truncate'>{cert.name}</h3>
                        <span className='flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-bold bg-primaryLight rounded-full'>
                          {cert.skill}
                        </span>
                      </div>
                      <p className='mt-1 text-gray-500 text-sm truncate'>{cert.cert_from}</p>
                      <p className='mt-1 text-gray-500 text-sm truncate'>{cert.date}</p>
                    </div>
                    <Icon size='w-10 h-10' skillName={cert.skill_icon} />
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
                Highlighted Skills
              </p>
              <p className='max-w-xl mt-5 text-xl text-gray-500'>
                <a href='/skills' className='text-primaryLight font-medium hover:text-gray-500'>
                  View all of my relevant skills here.
                </a>
              </p>
            </div>
            <SkillList skillData={skills} />
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
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='font-sans container mx-auto max-w-7xl'>
        <Intro />
        <Education />
      </div>
      <div className='font-sans bg-primary'>
        <div className='container mx-auto max-w-7xl'>
          <Certifications />
        </div>
      </div>
      <div className='font-sans container mx-auto max-w-7xl mt-12'>
        <Skills />
        <Experience />
      </div>
    </>
  );
}

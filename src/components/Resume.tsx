/* eslint-disable no-secrets/no-secrets */
import shortid from 'shortid';
import { BookOpenIcon } from '@heroicons/react/outline';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import dayjs from 'dayjs';

import { Icon, SkillList } from '../components/index';
import { Link } from 'react-router-dom';
import { SkillType } from '../global';

export default function Resume(props: any) {
  const skills: SkillType[] = [
    {
      _id: 'k24l1fsgd323mvb89s',
      category: 'Front-End',
      name: 'React',
      description: '',
      featured: true,
      published: true
    },
    {
      _id: 'k24l1dfoadfwvb89s',
      category: 'Back-End',
      name: 'Node',
      description: '',
      featured: true,
      published: true
    },
    {
      _id: 'k24l1fsgdsab3bvb89s',
      category: 'Front-End',
      name: 'Typescript',
      description: '',
      featured: true,
      published: true
    },
    {
      _id: 'k24af2m2e2f423bvbafd',
      category: 'Back-End',
      name: 'Typescript',
      description: '',
      featured: true,
      published: true
    },
    {
      _id: 'l2nfada7a5j7l8n42',
      category: 'Deployment',
      name: 'AWS',
      description: '',
      featured: true,
      published: true
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
          <h1 className='my-4 font-extrabold text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>
            Software Engineer
          </h1>

          <div className='flex justify-center space-x-6 md:order-2'>
            <a
              href='https://linkedin.com/in/trevornjeru'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Linkedin</span>
              <Icon skillName='linkedin' size='w-8 h-8' />
            </a>

            <a
              href='https://github.com/trevv16'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <Icon skillName='github' size='w-8 h-8' />
            </a>

            <a
              href='https://instagram.com/trevva_'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Instagram</span>
              <Icon skillName='instagram' size='w-8 h-8' />
            </a>
          </div>
          <p className='max-w-2xl my-8 mx-auto text-xl text-gray-500'>
            I am a software engineer with strengths in cloud architectures who seeks to become a well-sought after
            professional.
          </p>
          <Link to='projects'>
            <button className='px-5 py-3 border border-transparent shadow text-base font-bold rounded-md text-white bg-primary hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0'>
              View My Projects
            </button>
          </Link>
        </div>
      </div>
    </>
  );

  const Education = () => {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto py-16 sm:py-16 px-6'>
            <div className='text-left'>
              <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Education
              </p>
            </div>
            <h1 className='mt-6 text-2xl font-bold text-gray-600'>University of North Carolina at Charlotte</h1>
            <h2 className='mt-2 text-xl font-medium text-gray-700'>BA in Computer Science</h2>
            <p className='mt-2 text-xl font-medium text-gray-500'>Concentration in Human-Computer Interaction</p>
            <p className='mt-2 text-xl font-medium text-gray-500'>2016-2021</p>
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
        date: '05-10-2021',
        skill: 'AWS',
        skill_icon: 'aws',
        cert_link: 'https://www.credly.com/badges/2ed2af89-8b73-40e0-b76a-1bf9f706b7aa/public_url',
        cert_info_link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
      },
      {
        name: 'AWS Solutions Architect',
        cert_from: 'Amazon Web Services',
        date: '06-20-2021',
        skill: 'AWS',
        skill_icon: 'aws',
        cert_link: 'https://www.credly.com/badges/ce3d0c5c-f166-446a-aba8-71bf7ba7f102/public_url',
        cert_info_link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
      }
      // {
      //   name: 'Kubernetes App Developer',
      //   cert_from: 'Cloud Native Computing Foundation',
      //   date: 'Date',
      //   skill: 'Kubernetes',
      //   skill_icon: 'kubernetes',
      //   cert_link: '#',
      //   cert_info_link: '#'
      // },
      // {
      //   name: 'LPIC-1',
      //   cert_from: 'Linux Professional Institute',
      //   date: 'Date',
      //   skill: 'Linux',
      //   skill_icon: 'linux',
      //   cert_link: '#',
      //   cert_info_link: '#'
      // },
      // {
      //   name: 'LPIC-2',
      //   cert_from: 'Linux Professional Institute',
      //   date: 'Date',
      //   skill: 'Linux',
      //   skill_icon: 'linux',
      //   cert_link: '#',
      //   cert_info_link: '#'
      // }
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
                      <p className='mt-1 text-gray-500 text-sm truncate'>{dayjs(cert.date).format('MMM DD, YYYY')}</p>
                    </div>
                    <Icon size='w-10 h-10' skillName={cert.skill_icon} />
                  </div>
                  <div>
                    <div className='-mt-px flex divide-x divide-gray-200'>
                      <div className='w-0 flex-1 flex'>
                        <a
                          href={cert.cert_link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                        >
                          <AiOutlineSafetyCertificate className='w-5 h-5 text-gray-400' aria-hidden='true' />
                          <span className='ml-3'>View</span>
                        </a>
                      </div>
                      <div className='-ml-px w-0 flex-1 flex'>
                        <a
                          href={cert.cert_info_link}
                          target='_blank'
                          rel='noopener noreferrer'
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
                <Link to='/skills' className='text-primaryLight font-medium hover:text-gray-500'>
                  View all of my relevant skills here.
                </Link>
              </p>
            </div>
            <SkillList skillData={skills} />
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
      </div>
    </>
  );
}

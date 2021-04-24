import React from 'react';
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';
import shortid from 'shortid';

export default function ProjectsPage() {
  const projects = [
    {
      _id: 'ajk324n2krw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2019-01-25').format('MMM D, YYYY'),
      thumbnail:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    },
    {
      _id: 'ajk324n2krw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2019-01-25').format('MMM D, YYYY'),
      thumbnail:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    },
    {
      _id: 'ajk324n2krw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2019-01-25').format('MMM D, YYYY'),
      thumbnail:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    }
  ];

  const ProjectCard = ({ project }: any) => {
    return (
      <div className='my-12 space-y-4'>
        <a href={`/projects/${project._id}`}>
          <div className='aspect-w-3 aspect-h-2'>
            <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
          </div>
        </a>

        <div className='space-y-2'>
          <a href={`/projects/${project._id}`}>
            <div className='text-lg leading-6 font-medium space-y-1'>
              <h3 className='text-3xl truncate'>{project.title}</h3>
              <p className='text-sm text-indigo-600'>{project.published}</p>
            </div>
          </a>
          <ul className='flex space-x-5'>
            <li>
              <a href={project.github_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Github</span>
                <HiOutlineCode className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href={project.demo_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Demo</span>
                <HiOutlineEye className='h-6 w-6' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Projects | Trevor's Portfolio</title>
      </Helmet>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>My Projects</h2>
            <p className='text-xl text-gray-500'>
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
              quis et.
            </p>
          </div>
          <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
            {projects.map((project) => (
              <li key={shortid.generate()}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

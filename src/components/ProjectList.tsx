import React from 'react';
import shortid from 'shortid';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function ProjectList(props: any) {
  const ProjectCard = ({ project }: any) => {
    return (
      <div className='my-12 space-y-4'>
        <Link to={`/projects/${project._id}`}>
          <div className='aspect-w-3 aspect-h-2'>
            <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
          </div>
        </Link>

        <div className='space-y-2'>
          <Link to={`/projects/${project._id}`}>
            <div className='text-lg leading-6 font-medium space-y-1'>
              <h3 className='font-sans text-3xl truncate'>{project.title}</h3>
              <p className='font-sans text-sm text-primary'>{project.published}</p>
            </div>
          </Link>
          <ul className='flex space-x-5'>
            <li>
              <a href={project.github_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Github</span>
                <HiOutlineCode className='h-6 w-6' /> View Code
              </a>
            </li>
            <li>
              <a href={project.demo_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Demo</span>
                <HiOutlineEye className='h-6 w-6' /> View Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
          {props.data.map((project: any) => (
            <li key={shortid.generate()}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

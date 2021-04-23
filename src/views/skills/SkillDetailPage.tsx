import React from 'react';
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function SkillDetailPage() {
  const skill: SkillType = {
    _id: 'k24l1fsgd323mvb89s',
    category: 'Front-End',
    name: 'React',
    description: 'Skill Description',
    thumbnail:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  };

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
      _id: 'ajk32adsfarw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2019-01-25').format('MMM D, YYYY'),
      thumbnail:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    },
    {
      _id: 'a24n2krwasdfaade',
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
      <div className='space-y-4'>
        <div className='aspect-w-3 aspect-h-2'>
          <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
        </div>

        <div className='space-y-2'>
          <div className='text-lg leading-6 font-medium space-y-1'>
            <h3 className='text-3xl truncate'>{project.title}</h3>
            <p className='text-sm text-indigo-600'>{project.published}</p>
          </div>
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

  const ProjectsSection = () => {
    return (
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Projects</h2>
            <p className='text-xl text-gray-500'>View the projects I have completed relevant to this skill.</p>
          </div>
          <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
            {projects.map((project) => (
              // <a href={`/projects/${project._id}`}>
              <li key={project._id}>
                <ProjectCard project={project} />
              </li>
              // {/* </a> */}
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const Header = ({ skill }: any) => (
    <div className='max-w-7xl mx-auto pt-8 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <img className='w-52 h-52 mb-8 flex-shrink-0 mx-auto bg-black rounded-full' src={skill.thumbnail} alt='' />
      <div className='text-center'>
        <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>{skill.category}</h2>
        <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {skill.name}
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>{skill.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{`${skill.name} | Trevor's Portfolio`}</title>
      </Helmet>
      <div>
        <Header skill={skill} />
        <ProjectsSection />
      </div>
    </>
  );
}

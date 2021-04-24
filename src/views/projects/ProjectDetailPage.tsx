import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';
import shortid from 'shortid';

export default function ProjectDetailPage() {
  const [skillCategories, setSkillCategories] = useState<any[]>([]);

  const project = {
    _id: 'ajk324n2krw6f7ade',
    title: 'Trevfolio',
    description: 'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
    published: dayjs('2019-01-25').format('MMM D, YYYY'),
    thumbnail:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    github_url: 'https://github.com/trevva16/trevfolio-2-node',
    demo_url: 'https://trevornjeru.com',
    skills: [
      {
        _id: 'k24l1fsgd323mvb89s',
        category: 'Front-End',
        name: 'React',
        thumbnail:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      },
      {
        _id: 'k24l1dfoadfwvb89s',
        category: 'Back-End',
        name: 'Node',
        thumbnail:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      },
      {
        _id: 'k24l1fsgdsab3bvb89s',
        category: 'Front-End',
        name: 'Typescript',
        thumbnail:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      },
      {
        _id: 'k24af2m2e2f423bvbafd',
        category: 'Back-End',
        name: 'Typescript',
        thumbnail:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      },
      {
        _id: 'l2nfada7a5j7l8n42',
        category: 'Deployment',
        name: 'AWS',
        thumbnail:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      }
    ]
  };

  const getSkillCategories = (skills: any) => {
    let categories: any[] = [];

    skills.forEach((skill: any) => {
      const currentCategory = skill.category;

      if (!categories.includes(currentCategory)) {
        categories.push(currentCategory);
      }
    });

    return categories;
  };

  useEffect(() => {
    const skillList = getSkillCategories(project.skills);

    setSkillCategories(skillList);
  }, []);

  const Header = () => (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='text-left'>
        <div className='mt-1 aspect-w-16 aspect-h-7'>
          <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
        </div>
        <p className='mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {project.title}
        </p>
        <div className='mt-8 mb-4 space-y-2'>
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
        <p className='mt-2 text-xl text-indigo-600'>{project.published}</p>
        <p className='mt-8 mx-auto text-xl text-gray-500'>{project.description}</p>
      </div>
    </div>
  );

  const SkillCards = ({ skillName }: any) => {
    const data = project.skills;
    const skillList = data.filter((skill: any) => {
      return skill.category === skillName;
    });

    return (
      <div className='max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 lg:py-8'>
        <div className='space-y-8 sm:space-y-12'>
          <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
            {skillList.map((skill: any) => {
              return (
                <a key={shortid.generate()} href={`/skills/${skill._id}`}>
                  <li>
                    <div className='space-y-4'>
                      <img
                        className='hover:shadow-md mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24'
                        src={skill.thumbnail}
                        alt=''
                      />
                      <div className='space-y-2'>
                        <div className='text-xs font-medium lg:text-sm'>
                          <h3>{skill.name}</h3>
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const SkillSection = () => {
    return (
      <div>
        {skillCategories.map((skill: string, i: number) => {
          return (
            <div key={shortid.generate()}>
              <div className='my-12 relative'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-start'>
                  <span className='pr-3 bg-white text-lg font-medium text-indigo-600'>{skill}</span>
                </div>
              </div>
              <SkillCards skillName={skill} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Trevor's Portfolio`}</title>
      </Helmet>
      <div className='container mx-auto'>
        <Header />
        <div className='mx-auto max-w-7xl px-4 sm:py-8 sm:px-6 lg:px-8'>
          <div className='mt-4'>
            <h1 className='text-center text-4xl font-bold'>Skills</h1>
          </div>
          <SkillSection />
        </div>
      </div>
    </>
  );
}

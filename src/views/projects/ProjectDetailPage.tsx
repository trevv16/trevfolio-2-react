import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, SkillList, SeoHelmet } from '../../components/index';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function ProjectDetailPage(props: any) {
  const projectID = props.match.params.projectID;
  const [project, setProject] = useState<any>({});
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

  const { response, error, isLoading } = useFetch(`api/v1/projects/${projectID}`);

  useEffect(() => {
    if (response !== null) {
      setProject(response.data.data[0]);
    }
  }, [response, error, isLoading]);

  const Header = () => (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='text-left'>
        <div className='mt-1 aspect-w-16 aspect-h-7'>
          <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
        </div>
        <p className='font-sans mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
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
        <p className='font-sans mt-2 text-xl text-primary'>{project.published}</p>
        <p className='font-sans mt-8 mx-auto text-xl text-gray-500'>{project.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <SeoHelmet
        title={`${project.title} | Trevor's Portfolio`}
        description=''
        image=''
        image_alt='Trevor Njeru logo'
      />
      <div className='container mx-auto'>
        {error !== null && <Alert status='error'>{error.message}</Alert>}
        {isLoading ? (
          <div className='my-12 transform translate-x-1/3'>
            <Loading />
          </div>
        ) : (
          <>
            {project && project !== {} && <Header />}
            <div className='mx-auto max-w-7xl px-4 sm:py-8 sm:px-6 lg:px-8'>
              <div className='mt-4'>
                <h1 className='font-sans text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Skills Used
                </h1>
              </div>
              {skills !== [] && <SkillList skillData={skills} />}
            </div>
          </>
        )}
      </div>
    </>
  );
}

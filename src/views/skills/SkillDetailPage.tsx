import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, ProjectList, SeoHelmet, Icon } from '../../components/index';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function SkillDetailPage(props: any) {
  const skillID = props.match.params.skillID;
  const [skill, setSkill] = useState<any>({});
  const { response, error, isLoading } = useFetch(`api/v1/skills/${skillID}`);

  useEffect(() => {
    if (response !== null) {
      setSkill(response.data.data[0]);
    } else {
      setSkill(null);
    }
  }, [response, error, isLoading]);

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

  const ProjectsSection = () => {
    return (
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='font-sans text-3xl font-extrabold tracking-tight sm:text-4xl'>Projects</h2>
            <p className='font-sans text-xl text-gray-500'>
              View the projects I have completed relevant to this skill.
            </p>
          </div>

          <ProjectList data={projects} />
        </div>
      </div>
    );
  };

  const Header = ({ skill }: any) => (
    <div className='max-w-7xl mx-auto pt-8 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <Icon size='w-52 h-52 mb-8 mx-auto' skillName={skill.name || ''} />
      <div className='text-center'>
        <h2 className='font-sans text-base font-semibold text-primary tracking-wide uppercase'>{skill.category}</h2>
        <p className='font-sans mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {skill.name}
        </p>
        <p className='font-sans max-w-xl mt-5 mx-auto text-xl text-gray-500'>{skill.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <SeoHelmet
        title={`${skill?.name || 'Skill'} | Trevor's Portfolio`}
        description=''
        image=''
        image_alt='Trevor Njeru logo'
      />
      <div>
        <div className='max-w-7xl mx-auto pt-8 px-4 sm:py-24 sm:px-6 lg:px-8'>
          {error !== null && <Alert status='error'>{error.message}</Alert>}
        </div>
        {isLoading ? (
          <div className='transform translate-x-1/3'>
            <Loading />
          </div>
        ) : (
          <>
            {skill && skill !== null ? (
              <Header skill={skill} />
            ) : (
              <h1 className='font-sans text-center text-2xl font-bold tracking-tight sm:text-4xl'>Skill unavailable</h1>
            )}
            {skill && skill !== null && <ProjectsSection />}
          </>
        )}
      </div>
    </>
  );
}

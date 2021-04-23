import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/index';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function HomePage() {
  const [skillCategories, setSkillCategories] = useState<any[]>([]);
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
    const skillList = getSkillCategories(skills);

    setSkillCategories(skillList);
  }, []);

  const SkillCards = (props: any) => {
    const data = skills;
    const skillList = data.filter((skill: any) => {
      return skill.category === props.categoryName;
    });

    return (
      <div className='max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 lg:py-8'>
        <div className='space-y-8 sm:space-y-12'>
          <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
            {skillList.map((skill: any) => {
              return (
                <a key={skill._id} href={`/skills/${skill._id}`}>
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
        {skillCategories.map((skill: SkillType, i: number) => {
          return (
            <div key={`skill-${i}`}>
              <div className='my-12 relative'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-start'>
                  <span className='pr-3 bg-white text-lg font-medium text-indigo-600'>{skill}</span>
                </div>
              </div>
              <SkillCards categoryName={skill} />
            </div>
          );
        })}
      </div>
    );
  };

  const Intro = () => (
    <>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='-mt-12 my-8 aspect-w-16 aspect-h-6'>
          <img className='object-cover shadow-lg rounded-lg' src='trev-intro.jpg' alt='' />
        </div>
        <div className='text-center'>
          <p className=' text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Hi, <span className='bg-indigo-600 text-white px-2 rounded-md'>Im Trevor</span> . Nice to meet you
          </p>
          <p className='max-w-2xl mt-8 mx-auto text-xl text-gray-500'>
            A computer science student based in Charlotte, NC. Enhancing my skills as a full stack developer with a keen
            interest in design.
          </p>
        </div>
      </div>
    </>
  );

  const FeaturedSkills = () => {
    return (
      <>
        <div className='mx-auto px-4 max-w-7xl sm:px-6 lg:px-8'>
          <h1 className='font-bold text-3xl lg:text-5xl text-center'>Featured Skills</h1>
          <SkillSection />
        </div>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Trevor's Portfolio</title>
      </Helmet>
      <div className='container mx-auto'>
        <Intro />
        <FeaturedSkills />
      </div>
      <Newsletter />
    </>
  );
}

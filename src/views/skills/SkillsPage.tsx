import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import shortid from 'shortid';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function SkillsPage() {
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
        {skillCategories.map((skill: SkillType, i: number) => {
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
              <SkillCards categoryName={skill} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Skills | Trevor's Portfolio</title>
      </Helmet>
      <div className='container mx-auto'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>My Skills</h2>
              <p className='text-xl text-gray-500'>
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
                quis et.
              </p>
            </div>
          </div>
          <SkillSection />
        </div>
      </div>
    </>
  );
}

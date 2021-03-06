import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

import { Icon } from '../components/index';

type SkillType = {
  _id: string;
  category: string;
  name: string;
  description: string;
  thumbnail: string;
};

export default function SkillList(props: any) {
  const [skillCategories, setSkillCategories] = useState<any[]>([]);

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
    const skillList = getSkillCategories(props.skillData);

    setSkillCategories(skillList);
  }, [props.skillData]);

  const SkillCards = ({ categoryName }: any) => {
    const skillList = props.skillData.filter((skill: SkillType) => {
      return skill.category === categoryName;
    });

    skillList.sort((a: any, b: any) => a.name.localeCompare(b.name));

    return (
      <div className='max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 lg:py-8'>
        <div className='space-y-8 sm:space-y-12'>
          <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
            {skillList.map((skill: any) => {
              return (
                <Link key={shortid.generate()} to={`/skills/${skill._id}`}>
                  <li>
                    <div className='space-y-4'>
                      <Icon size='w-20 h-20 lg:w-24 lg:h-24 mx-auto' skillName={skill.name.toLowerCase()} />
                      <div className='space-y-2'>
                        <div className='text-xs font-medium lg:text-sm'>
                          <h3 className='font-sans'>{skill.name}</h3>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        {skillCategories.map((category: SkillType, i: number) => {
          return (
            <div key={shortid.generate()}>
              <div className='my-12 relative'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray' />
                </div>
                <div className='relative flex justify-start'>
                  <span className='font-sans pr-3 bg-white text-lg font-medium text-primary'>{category}</span>
                </div>
              </div>
              <SkillCards categoryName={category} />
            </div>
          );
        })}
      </div>
    </>
  );
}

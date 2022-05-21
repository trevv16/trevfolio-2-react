import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, ProjectList, SkillHeader } from '../../components/index';
import { SkillType } from '../../global';
import { Helmet } from 'react-helmet-async';
import { getSeo } from '../../utils/seo';

export default function SkillDetailPage(props: any) {
  const skillID = props.match.params.skillID;
  const [skill, setSkill] = useState<SkillType | null>(null);
  const { response, error, isLoading } = useFetch(`api/v1/skills/${skillID}`);

  useEffect(() => {
    if (response !== null) {
      setSkill(response.data.data[0]);
    } else {
      setSkill(null);
    }
  }, [response, error, isLoading]);

  const dateFormat = 'MMM D, YYYY';
  const projects = [
    {
      _id: 'ajk324n2krw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2019-05-16').format(dateFormat),
      thumbnail: 'https://source.unsplash.com/random/600x300',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    },
    {
      _id: 'ajk32adsfarw6f7ade',
      title: 'Trevfolio',
      published: dayjs('2020-03-04').format(dateFormat),
      thumbnail: 'https://source.unsplash.com/random/500x300',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    },
    {
      _id: 'a24n2krwasdfaade',
      title: 'Trevfolio',
      published: dayjs('2019-11-25').format(dateFormat),
      thumbnail: 'https://source.unsplash.com/random/400x200',
      github_url: 'https://github.com/trevva16/trevfolio-2-node',
      demo_url: 'https://trevornjeru.com'
    }
  ];

  return (
    <>
      <Helmet>{getSeo(`${skill?.name || 'Skills'}`)}</Helmet>
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
            {skill ? (
              <>
                <SkillHeader skill={skill} />

                {skill?.projects && skill.projects.length > 0 && (
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
                )}
              </>
            ) : (
              <h1 className='font-sans text-center text-2xl font-bold tracking-tight sm:text-4xl'>Skill unavailable</h1>
            )}
          </>
        )}
      </div>
    </>
  );
}

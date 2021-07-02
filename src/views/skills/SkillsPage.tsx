import React, { useState, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, SkillList } from '../../components/index';
import { SkillType } from '../../global';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_DESC, SITE_IMG, SITE_URL } from '../../Config';
import { getSeo } from '../../utils/seo';

export default function SkillsPage() {
  const [skills, setSkills] = useState<SkillType[] | null>([]);
  const { response, error, isLoading } = useFetch('api/v1/skills');

  useEffect(() => {
    if (response && response !== null) {
      setSkills(response.data.data);
    } else {
      setSkills(null);
    }
  }, [response, error, isLoading]);

  const title = `Skills | ${SITE_NAME}`;

  return (
    <>
      <Helmet>{getSeo(title, SITE_DESC, SITE_IMG, SITE_URL)}</Helmet>
      <div className='container mx-auto'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='mb-24 space-y-12'>
            <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
              <h2 className='font-sans text-3xl font-extrabold tracking-tight sm:text-4xl'>My Skills</h2>
              <p className='font-sans text-xl text-gray-500'>
                Here are some of my software development skills that I have highlighted as my strongest and personal
                favorites.{' '}
              </p>
            </div>
          </div>
          {error !== null && <Alert status='error'>{error.message}</Alert>}
          {isLoading ? (
            <div className='transform translate-x-1/3'>
              <Loading />
            </div>
          ) : skills && skills !== null ? (
            <SkillList skillData={skills} />
          ) : (
            <p className='font-sans text-2xl text-center text-gray-500'>Skills Unavailable</p>
          )}
        </div>
      </div>
    </>
  );
}

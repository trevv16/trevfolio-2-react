import React, { useState, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, ProjectList, SeoHelmet } from '../../components/index';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any>([]);
  const { response, error, isLoading } = useFetch('api/v1/projects');

  useEffect(() => {
    if (response && response !== null) {
      setProjects(response.data.data);
    } else {
      setProjects(null);
    }
  }, [response, error, isLoading]);

  return (
    <>
      <SeoHelmet title="Projects | Trevor's Portfolio" description='' image='' image_alt='Trevor Njeru logo' />
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='mb-24 space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='font-sans text-3xl font-extrabold tracking-tight sm:text-4xl'>My Projects</h2>
            <p className='mb-44 font-sans text-xl text-gray-500'>
              Here are some of the projects that represent the skills I have with software development and design.
            </p>
          </div>
          {error !== null && <Alert status='error'>{error.message}</Alert>}
          {isLoading ? (
            <div className='transform translate-x-1/3'>
              <Loading />
            </div>
          ) : projects !== [] && projects !== null ? (
            <ProjectList data={projects} />
          ) : (
            <p className='font-sans text-2xl text-center text-gray-500'>Projects Unavailable</p>
          )}
        </div>
      </div>
    </>
  );
}

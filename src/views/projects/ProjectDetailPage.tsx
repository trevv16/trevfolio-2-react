import { useState, useEffect } from 'react';
import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';

import useFetch from '../../hooks/useFetch';
import { Alert, Loading, SkillList } from '../../components/index';
import { ProjectType } from '../../global';
import { Helmet } from 'react-helmet-async';
import { getSeo } from '../../utils/seo';

export default function ProjectDetailPage(props: any) {
  const projectID = props.match.params.projectID;
  const [project, setProject] = useState<ProjectType | null>(null);

  const { response, error, isLoading } = useFetch(`api/v1/projects`);

  useEffect(() => {
    if (response !== null) {
      const list: ProjectType[] = response.data.data;

      const projectData = list.filter((proj: ProjectType) => {
        return proj._id === projectID;
      });

      setProject(projectData[0]);
    } else {
      setProject(null);
    }
  }, [response, error, isLoading, projectID]);

  const Header = () => (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='text-left'>
        <div className='mt-1 aspect-w-16 aspect-h-7'>
          <img className='object-cover shadow-lg rounded-lg' src={project?.thumbnail} alt='' />
        </div>
        <p className='font-sans mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {project?.title}
        </p>
        <div className='mt-8 mb-4 space-y-2'>
          <ul className='flex space-x-5'>
            <li>
              <a href={project?.github_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Github</span>
                <HiOutlineCode className='h-6 w-6' /> View Code
              </a>
            </li>
            <li>
              <a href={project?.demo_url} rel='noopener noreferrer' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Demo</span>
                <HiOutlineEye className='h-6 w-6' /> View Demo
              </a>
            </li>
          </ul>
        </div>
        <p className='font-sans mt-2 text-xl text-primary'>{new Date(project?.createdAt || '').toUTCString()}</p>
        <p className='font-sans mt-8 mx-auto text-xl text-gray-500'>{project?.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>{getSeo(`${project?.title || 'Projects'}`)}</Helmet>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-7xl px-4 sm:py-8 sm:px-6 lg:px-8'>
          {error !== null && <Alert status='error'>{error.message}</Alert>}
        </div>
        {isLoading ? (
          <div className='my-12 transform translate-x-1/3'>
            <Loading />
          </div>
        ) : (
          <>
            {project && project !== null ? (
              <Header />
            ) : (
              <h1 className='font-sans text-center text-2xl font-bold tracking-tight sm:text-4xl'>
                Project unavailable
              </h1>
            )}
            {project && project !== null && (
              <div className='mx-auto max-w-7xl px-4 sm:py-8 sm:px-6 lg:px-8'>
                <div className='mt-4'>
                  <h1 className='font-sans text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                    Skills Used
                  </h1>
                </div>
                {project?.skills && project?.skills !== null && project?.skills.length > 0 && (
                  <SkillList skillData={project?.skills} />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

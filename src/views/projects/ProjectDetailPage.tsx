import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Alert, Loading, SkillList, ProjectHeader } from '../../components/index';
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
              <ProjectHeader project={project} />
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

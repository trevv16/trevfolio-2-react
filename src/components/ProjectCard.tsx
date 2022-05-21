import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }: any) {
  return (
    <>
      <div className='my-12 space-y-4'>
        <Link to={`/projects/${project._id}`}>
          <div className='aspect-w-3 aspect-h-2'>
            <img className='object-cover shadow-lg rounded-lg' src={project.thumbnail} alt='' />
          </div>
        </Link>

        <div className='space-y-2'>
          <Link to={`/projects/${project._id}`}>
            <div className='text-lg leading-6 font-medium space-y-1'>
              <h3 className='font-sans text-3xl truncate'>{project.title}</h3>
              <p className='font-sans text-sm text-primary'>{project.published}</p>
            </div>
          </Link>
          <ul className='flex space-x-5'>
            <li>
              <a
                href={project.github_url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary-400 hover:text-primary-500'
              >
                <span className='sr-only'>Github</span>
                <HiOutlineCode className='h-6 w-6' /> View Code
              </a>
            </li>
            <li>
              <a
                href={project.demo_url}
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-400 hover:text-primary-500'
              >
                <span className='sr-only'>Demo</span>
                <HiOutlineEye className='h-6 w-6' /> View Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

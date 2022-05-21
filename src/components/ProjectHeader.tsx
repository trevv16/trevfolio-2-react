import { HiOutlineEye, HiOutlineCode } from 'react-icons/hi';

export default function ProjectHeader({ project }: any) {
  return (
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
}

import { Icon } from '../index';

export default function Footer() {
  return (
    <div>
      <footer className='font-sans bg-white'>
        {/* eslint-disable-next-line max-len */}
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <a
              href='https://linkedin.com/in/trevornjeru'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Linkedin</span>
              <Icon skillName='linkedin' size='w-6 h-6' />
            </a>

            <a
              href='https://github.com/trevv16'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <Icon skillName='github' size='w-6 h-6' />
            </a>
          </div>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-center text-base text-gray-400'>
              &copy; {`${new Date().getFullYear()} Trevor Njeru. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

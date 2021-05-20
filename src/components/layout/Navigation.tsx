/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  let location = useLocation();
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const activeLink = 'border-primary text-gray-900 border-b-2';
  const inactiveLink = 'border-transparent text-gray-500 hover:border-gray hover:text-gray-700';
  const linkDefault = 'inline-flex items-center px-1 pt-1 text-sm font-semibold';

  const mobileActiveLink = 'bg-primaryLight border-primary text-white';
  const mobileInactiveLink = 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray hover:text-gray-700';
  const mobileDefaultLink = 'block pl-3 pr-4 py-2 border-l-4 text-base font-semibold';

  return (
    <Disclosure as='nav' className='font-sans bg-white shadow'>
      {/* eslint-disable max-len */}
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link to='/'>
                    <img className='block lg:hidden h-8 w-auto' src='TN_logo.png' alt='Trevor Njeru logo' />
                    <img className='hidden lg:block w-28 h-auto' src='TN_logo.png' alt='Trevor Njeru logo' />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray hover:text-gray-700" */}
                  <Link
                    to='/about'
                    className={`${currentPage === '/about' ? activeLink : inactiveLink} ${linkDefault}`}
                  >
                    About
                  </Link>
                  <Link
                    to='/skills'
                    className={`${currentPage === '/skills' ? activeLink : inactiveLink} ${linkDefault}`}
                  >
                    Skills
                  </Link>
                  <Link
                    to='/projects'
                    className={`${currentPage === '/projects' ? activeLink : inactiveLink} ${linkDefault}`}
                  >
                    Projects
                  </Link>
                  <Link
                    to='/contact'
                    className={`${currentPage === '/contact' ? activeLink : inactiveLink} ${linkDefault}`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              {/* Current: "bg-primaryLight border-primary text-primary", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray hover:text-gray-700" */}
              <Link
                to='/about'
                className={`${currentPage === '/about' ? mobileActiveLink : mobileInactiveLink} ${mobileDefaultLink}`}
              >
                About
              </Link>
              <Link
                to='/skills'
                className={`${currentPage === '/skills' ? mobileActiveLink : mobileInactiveLink} ${mobileDefaultLink}`}
              >
                Skills
              </Link>
              <Link
                to='/projects'
                className={`${
                  currentPage === '/projects' ? mobileActiveLink : mobileInactiveLink
                } ${mobileDefaultLink}`}
              >
                Projects
              </Link>
              <Link
                to='/contact'
                className={`${currentPage === '/contact' ? mobileActiveLink : mobileInactiveLink} ${mobileDefaultLink}`}
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

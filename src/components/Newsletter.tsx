import React, { useState } from 'react';
import api from '../utils/api';
import { useFormik } from 'formik';

import { Alert } from './index';

type StatusType = {
  status: string;
  message: string;
};

export default function Newsletter(props: any) {
  const [statusRes, setStatusRes] = useState<StatusType | null>(null);

  const postData = async (data: any) => {
    api
      .post('api/v1/subscribers', data)
      .then((res) => {
        const status = res.data.success;
        if (status === true) {
          setStatusRes({
            status: 'success',
            message: 'Subscribed!'
          });
        }
      })
      .catch(() => {
        setStatusRes({
          status: 'error',
          message: 'Sorry, we were un able to add you, please try again later.'
        });
      });
  };

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      postData(values);
      formik.resetForm();
      setTimeout(function () {
        setStatusRes(null);
      }, 4000);
    }
  });

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8'>
        {statusRes !== null && <Alert status={statusRes.status}>{statusRes.message}</Alert>}
        <div className='mt-4 px-6 py-6 bg-primary rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center'>
          <div className='font-sans xl:w-0 xl:flex-1'>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
              Want project news and updates?
            </h2>
            <p className='mt-3 max-w-3xl text-lg leading-6 text-white'>
              Sign up for our newsletter to stay up to date.
            </p>
          </div>
          <div className='mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8'>
            <form onSubmit={formik.handleSubmit} className='font-sans sm:flex'>
              <label htmlFor='emailAddress' className='sr-only'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                className='w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md'
                placeholder='Enter your email'
              />
              <button
                type='submit'
                className='mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-primaryLight0 hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0'
              >
                Notify me
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

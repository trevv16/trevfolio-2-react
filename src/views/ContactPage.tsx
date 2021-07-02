import React, { useState } from 'react';
import { useFormik } from 'formik';
import api from '../utils/api';
import { Alert, Loading } from '../components/index';
import { StatusType, ContactMessageType } from '../global';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_DESC, SITE_IMG, SITE_URL } from '../Config';
import { getSeo } from '../utils/seo';

export default function ContactPage() {
  const [statusRes, setStatusRes] = useState<StatusType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postData = async (data: any) => {
    setIsLoading(true);
    api
      .post('api/v1/inquiries', data)
      .then((res) => {
        const status = res.data.success;
        if (status === true) {
          setStatusRes({
            status: 'success',
            message: 'Message delivered!'
          });
        }
      })
      .catch(() => {
        setStatusRes({
          status: 'error',
          message: 'Sorry, the message failed to send, try emailing directly to trevnjeru@gmail.com'
        });
      });
  };

  const validate = (values: ContactMessageType) => {
    const errors: any = {};
    if (!values.first_name) {
      errors.first_name = 'Required';
    } else if (values.first_name.length > 15) {
      errors.first_name = 'Must be 15 characters or less';
    }

    if (!values.last_name) {
      errors.last_name = 'Required';
    } else if (values.last_name.length > 20) {
      errors.last_name = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length > 240) {
      errors.message = 'Must be 240 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: (values: any) => {
      postData(values);
      formik.resetForm();
      setIsLoading(false);
      setTimeout(function () {
        setStatusRes(null);
      }, 4000);
    }
  });

  const title = `Contact | ${SITE_NAME}`;

  return (
    <>
      <Helmet>{getSeo(title, SITE_DESC, SITE_IMG, SITE_URL)}</Helmet>
      <div className='py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <svg
            className='absolute left-full transform translate-x-1/2'
            width={404}
            height={404}
            fill='none'
            viewBox='0 0 404 404'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='85737c0e-0916-41d7-917f-596dc7edfa27'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={404} fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)' />
          </svg>
          <svg
            className='absolute right-full bottom-0 transform -translate-x-1/2'
            width={404}
            height={404}
            fill='none'
            viewBox='0 0 404 404'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='85737c0e-0916-41d7-917f-596dc7edfa27'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={404} fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)' />
          </svg>
          <div className='font-sans text-center mb-12'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Contact Me</h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>
              If you have a question or would like to get in contact with me, reach out to me here.
            </p>
          </div>
          {statusRes !== null && <Alert status={statusRes.status}>{statusRes.message}</Alert>}
          <div className='mt-12'>
            {isLoading ? (
              <div className='transform translate-x-1/3'>
                <Loading />
              </div>
            ) : (
              <>
                <form
                  onSubmit={formik.handleSubmit}
                  className='mt-4 font-sans grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div>
                    <label htmlFor='first_name' className='block text-sm font-medium text-gray-700'>
                      First name
                    </label>
                    {formik.errors.first_name ? (
                      <div className='my-2 text-danger text-sm'>{formik.errors.first_name}</div>
                    ) : null}
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        autoComplete='given-name'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-primary border-gray rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='last_name' className='block text-sm font-medium text-gray-700'>
                      Last name
                    </label>
                    {formik.errors.last_name ? (
                      <div className='my-2 text-danger text-sm'>{formik.errors.last_name}</div>
                    ) : null}
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='last_name'
                        id='last_name'
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        autoComplete='family-name'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-primary border-gray rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                      Email
                    </label>
                    {formik.errors.email ? <div className='my-2 text-danger text-sm'>{formik.errors.email}</div> : null}
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoComplete='email'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-primary border-gray rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                      Message
                    </label>
                    {formik.errors.message ? (
                      <div className='my-2 text-danger text-sm'>{formik.errors.message}</div>
                    ) : null}
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-primary border-gray rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <button
                      type='submit'
                      className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Let's talk
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

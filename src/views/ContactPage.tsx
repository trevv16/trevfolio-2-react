import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import api from '../utils/api';
import { Alert, SeoHelmet } from '../components/index';

type ContactMessageType = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [msgSuccess, setMsgStatus] = useState(false);
  const [agreed, setAgreed] = useState(false);

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
    onSubmit: (values) => {
      api
        .post('v1/inquiries', values)
        .then((response: any) => {
          formik.resetForm();
          setMsgStatus(true);
        })
        .catch((error: any) => {
          setMsgStatus(false);
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          }
        });
    }
  });

  const renderStatusAlert = (status: boolean) => {
    if (status) {
      return <Alert severity='success'>Successful - Your message was received.</Alert>;
    } else {
      return <Alert severity='success'>Error - There was a problem with your input</Alert>;
    }
  };

  return (
    <>
      <SeoHelmet title="Contact | Trevor's Portfolio" description='' image='' image_alt='Trevor Njeru logo' />
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
          <div className='font-sans text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Contact Me</h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>
              If you have a question or would like to get in contact with me, reach out to me here.
            </p>
          </div>
          <div className='mt-12'>
            {msgSuccess && renderStatusAlert(msgSuccess)}
            <form action='#' method='POST' className='font-sans grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <div>
                <label htmlFor='first_name' className='block text-sm font-medium text-gray-700'>
                  First name
                </label>
                {formik.errors.first_name ? <div>{formik.errors.first_name}</div> : null}
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='given-name'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='last_name' className='block text-sm font-medium text-gray-700'>
                  Last name
                </label>
                {formik.errors.last_name ? <div>{formik.errors.last_name}</div> : null}
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last_name'
                    id='last_name'
                    autoComplete='family-name'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                  Message
                </label>
                {formik.errors.message ? <div>{formik.errors.message}</div> : null}
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    defaultValue={''}
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
          </div>
        </div>
      </div>
    </>
  );
}

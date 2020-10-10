import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './YoutubeForm.scss';

const initialValues = {
  name: 'bogdanz',
  email: '',
  channel: ''
};

const onSubmit = (values: any) => console.log('form data', values);

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid e-mail format')
    .required('E-mail is required'),
  channel: Yup.string().required('Channel name is required')
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' id='email' {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )}
        </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

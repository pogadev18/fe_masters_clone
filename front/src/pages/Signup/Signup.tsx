import React, {FC} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Wrapper from '../../sharedComponents/Wrapper/Wrapper';
import FormikControl from '../../sharedComponents/Forms/FormikControl';

import './Signup.scss';

const Signup: FC = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid e-mail format')
      .required('E-mail is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values: any) => {
    console.log('form data', values);
  };

  return (
    <Wrapper customClass='signup'>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='text'
                label='Your name'
                name='name'
                requiredText
              />
              <FormikControl
                control='input'
                type='email'
                label='E-mail'
                name='email'
                requiredText
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
                requiredText
              />

              <button
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Signup;

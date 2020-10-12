import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from './FormikControl';

//TODO: extract initial values and validation schema

const FormikContainer: FC = () => {
  const initialValues = {
    email: '',
    description: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('E-mail is required'),
    description: Yup.string().required('Description is required')
  });

  const handleSubmit = (values: any) => console.log('form data', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='E-mail'
            name='email'
            requiredText
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            requiredText
          />
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

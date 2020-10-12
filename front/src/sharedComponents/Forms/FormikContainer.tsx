import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from './FormikControl';

//TODO: extract initial values and validation schema

const FormikContainer: FC = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('E-mail is required'),
    description: Yup.string().required('Description is required'),
    selectOption: Yup.string().required('Please select an option')
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
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
            requiredText
          />
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

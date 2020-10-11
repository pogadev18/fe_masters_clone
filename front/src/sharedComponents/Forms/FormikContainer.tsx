import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const FormikContainer: FC = () => {
  const initialValues = {};
  const validationSchema = Yup.object({});
  const handleSubmit = (values: any) => console.log('form data', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

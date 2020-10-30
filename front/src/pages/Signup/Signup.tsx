import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { registerUser } from '../../redux/actions';
import { IUserInitialState } from '../../redux/reducers/user';
import { IStoreState } from '../../redux/reducers';

import Wrapper from '../../sharedComponents/Wrapper/Wrapper';
import FormikControl from '../../sharedComponents/Forms/FormikControl';

import './Signup.scss';

interface ISignupProps {
  userState: IUserInitialState;
  registerUser: Function;
}

interface IValues {
  name: string;
  email: string;
  password: string;
}

const _Signup: FC<ISignupProps> = ({ userState, registerUser }) => {
  const initialValues: IValues = {
    name: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid e-mail format')
      .required('E-mail is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleSubmit = (values: IValues) => {
    registerUser(values);
  };

  console.log(userState);

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

const mapStateToProps = (state: IStoreState): { userState: IUserInitialState } => {
  return {
    userState: state.user
  };
};

export const Signup = connect(
  mapStateToProps,
  { registerUser })
(_Signup);

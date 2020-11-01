import axios from 'axios';
import { Dispatch } from 'redux';

import { BASE_API_URL } from '../../config';
import { ActionTypes } from './types';

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  userName: string;
  errors?: object;
}

export interface IRegisterSuccess {
  type: ActionTypes.registerUser,
  payload: string;
  message: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginUserAction {
  type: ActionTypes.loginUser,
  payload: string;
}

export interface IRequestLoading {
  type: ActionTypes.requestLoading
}

export interface IRequestFailed {
  type: ActionTypes.requestFailed,
  payload: string[]
}

export const registerUser = (formData: IRegisterUser) => {
  return async (dispatch: Dispatch) => {
    dispatch<IRequestLoading>({
      type: ActionTypes.requestLoading
    });

    try {
      const response = await axios.post<IRegisterResponse>(
        `${BASE_API_URL}/signup`,
        { ...formData }
      );

      dispatch<IRegisterSuccess>({
        type: ActionTypes.registerUser,
        payload: response.data.userName,
        message: `You are now successfully registered, ${response.data.userName}`
      });
    } catch (error) {
      const { errors } = error.response.data;
      let errorMessages: string[] = [];

      for (const prop in errors) {
        if (errors.hasOwnProperty(prop)) {
          errors[prop] !== '' && errorMessages.push(errors[prop]);
        }
      }

      dispatch<IRequestFailed>({
        type: ActionTypes.requestFailed,
        payload: errorMessages
      });
    }
  };
};

export const loginUser = (loginValues: ILoginUser) => {
  return async (dispatch: Dispatch) => {
    console.log('login user action dispatched');
  };
};

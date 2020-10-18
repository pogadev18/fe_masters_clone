import axios from 'axios';
import { Dispatch } from 'redux'

import { BASE_API_URL } from "../../config";
import { ActionTypes } from "./types";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterResponse {
  userName: string;
}

export interface IRegisterUserAction {
  type: ActionTypes.registerUser,
  payload: string;
}

export interface ILoginUserAction {
  type: ActionTypes.loginUser,
  payload: string;
}


export const registerUser = (formData: IRegisterUser) => {
  return async (dispatch: Dispatch) => {
    console.log('action dispatched');

    try {
      const response = await axios.post<IRegisterResponse>(
        `${ BASE_API_URL }/signup`,
        {...formData}
      );

      console.log(`response from registerUser action >>> ${ response.data }`);
      dispatch<IRegisterUserAction>({
        type: ActionTypes.registerUser,
        payload: response.data.userName
      });

      localStorage.setItem('userRegistered', response.data.userName);

    } catch (error) {
      console.log(error)
    }
  };
};

export const loginUser = (loginValues: ILoginUser) => {
  return async (dispatch: Dispatch) => {
    console.log('login user action dispatched');
  }
}

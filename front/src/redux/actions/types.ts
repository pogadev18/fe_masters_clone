import {
  IRegisterSuccess,
  ILoginUserAction,
  IRequestLoading,
  IRequestFailed,
} from './user';

export enum ActionTypes {
  // users
  registerUser = 'REGISTER_USER',
  loginUser = 'LOGIN_USER',

  // requests
  requestLoading = 'REQUEST_LOADING',
  requestFailed = 'REQUEST_FAILED',
}

export type Actions =
  IRegisterSuccess |
  ILoginUserAction |
  IRequestLoading |
  IRequestFailed;

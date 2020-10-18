import { IRegisterUserAction, ILoginUserAction } from "./user";

export enum ActionTypes {
  registerUser = 'REGISTER_USER',
  loginUser = 'LOGIN_USER'
}

export type Action = IRegisterUserAction | ILoginUserAction;

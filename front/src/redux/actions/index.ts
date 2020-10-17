import axios from 'axios';
import { Dispatch } from 'redux'

import { BASE_API_URL } from "../../config";
import { ActionTypes } from "./types";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterUserAction {
  type: ActionTypes.registerUser,
  payload: string;
}

export const registerUser = (values: IRegisterUser) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<IRegisterUser>(
      `${ BASE_API_URL }/signup`,
      {...values}
    );

    console.log(`response from registerUser action >>> ${ response }`);

    dispatch<IRegisterUserAction>({
      type: ActionTypes.registerUser,
      payload: response.data.name
    });
  };
};

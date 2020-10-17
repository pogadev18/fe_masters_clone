import { IRegisterUserAction } from "../actions";
import { ActionTypes } from "../actions/types";

export interface IUserInitialState {
  isLoggedIn: boolean;
  userName: string;
}

const userInitialState = {
  isLoggedIn: false,
  userName: ''
}

export const userReducer = (
  state: IUserInitialState = userInitialState,
  action: IRegisterUserAction
) => {
  switch (action.type) {
    case ActionTypes.registerUser:
      return {
        ...state,
        userName: action.payload
      }

    default:
      return state;
  }
};

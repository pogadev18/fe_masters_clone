import { Action, ActionTypes } from "../actions";

export interface IUserInitialState {
  isLoggedIn: boolean;
  isRegistered: boolean;
  userName: string;
}

const userInitialState = {
  isLoggedIn: false,
  isRegistered: false,
  userName: ''
}

export const userReducer = (
  state: IUserInitialState = userInitialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.registerUser:
      return {
        ...state,
        isRegistered: true,
        userName: action.payload
      }

    default:
      return state;
  }
};

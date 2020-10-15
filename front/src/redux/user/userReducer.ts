import { LOGIN_USER, LOGOUT_USER } from "./userActionTypes";
import { TInitialState, TAction } from "./types";

const checkIsLoggedIn = (): boolean => {
  const userToken: string | null = localStorage.getItem("userToken");
  return !!(userToken && userToken.length);
}

const initialState: TInitialState = {
  isLoggedIn: checkIsLoggedIn(),
  userName: '',
}

export const userReducer = (state: TInitialState = initialState, action: TAction): TInitialState => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload
      }

    case LOGOUT_USER:
      localStorage.removeItem('userToken');
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state;
  }
}

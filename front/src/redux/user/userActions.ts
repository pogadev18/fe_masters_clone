import { LOGIN_USER, LOGOUT_USER } from './userActionTypes';

export const logoutUser = (): object => {
  return {
    type: LOGOUT_USER
  }
}

export const loginUser = (name: string): object => {
  return {
    type: LOGIN_USER,
    payload: name
  }
}

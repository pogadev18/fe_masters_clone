import { Actions, ActionTypes } from '../actions';

export interface IUserInitialState {
  loading: boolean;
  status: string;
  userName: string | null;
  notifMessages: string[];
}

const userInitialState = {
  loading: false,
  status: '',
  userName: '',
  notifMessages: []
};

export const userReducer = (
  state: IUserInitialState = userInitialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.requestLoading:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.registerUser:
      return {
        ...state,
        loading: false,
        status: 'ok',
        notifMessages: [...state.notifMessages, action.message],
        userName: action.payload
      };

    case ActionTypes.requestFailed:
      return {
        ...state,
        loading: false,
        status: 'error',
        notifMessages: [...state.notifMessages, ...action.payload],
      };

    default:
      return state;
  }
};

import { TAction, TReducer, TUserState } from '../utils/types';

export const userReducer: TReducer<TUserState> = (
  state: TUserState,
  action: TAction
) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

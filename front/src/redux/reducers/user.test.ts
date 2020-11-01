import { IUserInitialState, userReducer } from './user';
import { ActionTypes } from '../actions';

const initialState: IUserInitialState = {
  loading: false,
  status: '',
  userName: '',
  notifMessages: []
};

describe('user reducer', () => {
  it('should handle "request is loading" case', () => {
    expect(userReducer(initialState, { type: ActionTypes.requestLoading })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should handle "register user" case', () => {
    expect(userReducer(initialState, {
      type: ActionTypes.registerUser,
      payload: 'Bogdan',
      message: 'You are now registered, Bogdan'
    })).toEqual({
      ...initialState,
      loading: false,
      status: 'ok',
      notifMessages: [...initialState.notifMessages, 'You are now registered, Bogdan'],
      userName: 'Bogdan'
    });
  });

  it('should handle "register request failed" case', () => {
    expect(userReducer(initialState, {
      type: ActionTypes.requestFailed,
      payload: ['E-mail already registered, Please use a correct e-mail address']
    })).toEqual({
      ...initialState,
      loading: false,
      status: 'error',
      notifMessages: [...initialState.notifMessages, 'E-mail already registered, Please use a correct e-mail address']
    });
  });
});

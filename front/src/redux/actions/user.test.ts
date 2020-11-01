import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { BASE_API_URL } from '../../config';
import { registerUser } from './user';
import { ActionTypes } from './types';

const httpMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async functions for user registration and login', () => {
  afterEach(() => {
    httpMock.restore();
  });

  const store = mockStore({
    user: {
      loading: false,
      status: '',
      userName: '',
      notifMessages: []
    }
  });

  const mockedPostData = {
    name: 'Bogdan',
    email: 'bogdan@test.com',
    password: 'test123'
  };

  it('register a user with success after POST request is done', () => {
    httpMock.onPost(
      `${BASE_API_URL}/signup`,
      { mockedPostData },
      { 'content-type': 'application/json' }
    );

    const expectedActions = [
      { type: ActionTypes.requestLoading },
      { type: ActionTypes.registerUser }
    ];

    store.dispatch<any>(registerUser({ ...mockedPostData }))
      .then(async () => {
        expect(await store.getActions()).toEqual(expectedActions);
      });
  });

  it('fails the register POST request', () => {
    httpMock.onPost(
      `${BASE_API_URL}/signup`,
      { mockedPostData },
      { 'content-type': 'application/json' }
    );

    store.dispatch<any>(registerUser({...mockedPostData}))
      .catch(async () => {
        expect(await store.getActions()).toEqual(ActionTypes.requestFailed);
      })
  });
});

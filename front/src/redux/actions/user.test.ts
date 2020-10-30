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

  it('register a user with success after POST request is done', () => {
    const mockedPostData = {
      name: 'Bogdan',
      email: 'bogdan@test.com',
      password: 'test123'
    };

    httpMock.onPost(
      `${BASE_API_URL}/signup`,
      { mockedPostData },
      { 'content-type': 'application/json' }
    );

    const expectedActions = [
      { type: ActionTypes.requestLoading },
      { type: ActionTypes.registerUser }
    ];

    const store = mockStore({
      user: {
        loading: false,
        status: '',
        userName: '',
        notifMessages: []
      }
    });

    store.dispatch<any>(registerUser({ ...mockedPostData }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

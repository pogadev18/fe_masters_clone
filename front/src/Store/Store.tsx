import React, { createContext, useContext, useReducer } from 'react';

import { TReducer, TState, TContext } from '../utils/types';



const initialState: TState = {
  user: {
    isLoggedIn: false // checkIsLoggedIn()
  }
};

export const StateContext = createContext<TContext>([initialState, () => {}]);

type TStateProviderProps = {
  reducer: TReducer<TState>;
  children: React.ReactNode;
};

export const StateProvider: React.FC<TStateProviderProps> = ({
  reducer,
  children
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext<TContext>(StateContext);

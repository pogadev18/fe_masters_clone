import { combineReducers } from "redux";

import { userReducer } from "./user";
import { IUserInitialState } from "./user";

export interface IStoreState {
  user: IUserInitialState
}

export const reducers = combineReducers<IStoreState>({
  user: userReducer
});

import { userReducer } from './userReducer';
import { TAction, TState } from '../utils/types';

export const mainReducers = ({ user }: TState, action: TAction): TState => ({
  user: userReducer(user, action)
});

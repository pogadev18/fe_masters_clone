// used in userReducer.ts
export type TUserState = {
  isLoggedIn: boolean;
  name: string;
};

export type TState = {
  user: TUserState;
};

export type TAction = { type: string; payload?: object; value?: string };
export type TReducer<T> = (state: T, action: TAction) => T;
export type TDispatch = (action: TAction) => void;
export type TContext = [TState, TDispatch];

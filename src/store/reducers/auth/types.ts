import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean,
  user: IUser,
  authError: string,
  userIsLoading: boolean
}

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING"
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export interface SetAuthErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export interface SetAuthLoadingAction {
  type: AuthActionEnum.SET_LOADING;
  payload: boolean;
}

export type AuthAction =
  SetAuthAction |
  SetUserAction |
  SetAuthErrorAction |
  SetAuthLoadingAction

import { AuthActionEnum, SetAuthAction, SetAuthErrorAction, SetAuthLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../models/IUser";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setAuthError: (error: string): SetAuthErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
  setAuthLoading: (isLoading: boolean): SetAuthLoadingAction => ({ type: AuthActionEnum.SET_LOADING, payload: isLoading }),
}
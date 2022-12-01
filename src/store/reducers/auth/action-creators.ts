import { AuthActionEnum, SetAuthAction, SetAuthErrorAction, SetAuthLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../models/IUser";
import { UserService } from "../../../api/UserService";
import { AppDispatch } from "../..";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setAuthError: (error: string): SetAuthErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
  setAuthLoading: (isLoading: boolean): SetAuthLoadingAction => ({ type: AuthActionEnum.SET_LOADING, payload: isLoading }),
  login: (login: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setAuthLoading(true))
    const userService = new UserService()
    const response: Response = await userService.login(login, password)
    const responseJSON = await response.clone().json()
    if(response.status == 200){
      localStorage.setItem('access_token', responseJSON['access_token'])
      dispatch(AuthActionCreators.setUser(responseJSON['user']))
      dispatch(AuthActionCreators.setAuthError(""))
      dispatch(AuthActionCreators.setIsAuth(true))
    } else {
      dispatch(AuthActionCreators.setAuthError(responseJSON['error']))
    }
  }, 
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('access_token')
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false))
  }
}
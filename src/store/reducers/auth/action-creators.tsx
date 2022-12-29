import { AuthActionEnum, SetAuthAction, SetAuthErrorAction, SetAuthLoadingAction, SetUserAction } from "./types";
import { IUser } from "../../../models/IUser";
import { UserService } from "../../../api/UserService";
import { AppDispatch } from "../..";
import { API } from "../../../api/API";
import { PromptActionCreators } from "../prompt/action-creators";
import { NotificationActionCreators } from "../notification/action-creators";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setAuthError: (error: string): SetAuthErrorAction => ({ type: AuthActionEnum.SET_AUTH_ERROR, payload: error }),
  setAuthLoading: (isLoading: boolean): SetAuthLoadingAction => ({ type: AuthActionEnum.SET_AUTH_LOADING, payload: isLoading }),
  login: (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setAuthLoading(true))
      const api = new API()
      const userService = new UserService()
      const response: Response = await userService.login(login, password)
      const responseJSON = await response.clone().json()
      if (response.status === 200) {
        dispatch(AuthActionCreators.setUser({ 'username': login }))
        dispatch(AuthActionCreators.setAuthError(""))
        dispatch(AuthActionCreators.setIsAuth(true))
        dispatch(PromptActionCreators.setPrompt(<></>))
      } else {
        dispatch(AuthActionCreators.setAuthError(responseJSON['error']))
      }
      dispatch(AuthActionCreators.setAuthLoading(false))
    } catch (e) {
      dispatch(AuthActionCreators.setAuthError("Произошла ошибка"))
    }
  },
  getUser: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setAuthLoading(true))
      const userService = new UserService()
      const response: Response = await userService.getUser()
      const responseJSON = await response.clone().json()
      console.log(responseJSON)
      if (response.status === 200) {
        dispatch(AuthActionCreators.setUser({ 'username': responseJSON['username'] }))
        dispatch(AuthActionCreators.setAuthLoading(false))
        dispatch(AuthActionCreators.setIsAuth(true))
      }
      dispatch(AuthActionCreators.setUser({} as IUser))
      dispatch(AuthActionCreators.setAuthError(""))
    } catch (e) {
      dispatch(AuthActionCreators.setAuthError("Произошла ошибка"))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    const api = new API()
    dispatch(NotificationActionCreators.setNotification(<></>))
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}
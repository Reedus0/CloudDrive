import { IUser } from "../../../models/IUser";
import { AuthAction, AuthState, AuthActionEnum } from "./types";


const initialState = {
  isAuth: true,
  user: {} as IUser,
  authError: "",
  userIsLoading: false
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload }
    case AuthActionEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.payload, userIsLoading: false }
    case AuthActionEnum.SET_AUTH_LOADING:
      return { ...state, userIsLoading: action.payload }
    default:
      return state;
  }
}
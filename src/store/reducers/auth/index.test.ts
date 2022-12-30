import authReducer from "."
import { IUser } from "../../../models/IUser"
import { AuthActionEnum } from "./types"

const initialState = {
  isAuth: false,
  user: {} as IUser,
  authError: '',
  userIsLoading: false
}

const user = {
  'username': 'guest'
}

describe('Auth reducer tests', () => {
  test('SET_AUTH normal function test', () => {
    expect(authReducer(initialState, { type: AuthActionEnum.SET_AUTH, payload: true })['isAuth']).toEqual(true)
  })
  test('SET_USER normal function test', () => {
    expect(authReducer(initialState, { type: AuthActionEnum.SET_USER, payload: user })['user']).toEqual(user)
  })
  test('SET_USER empty function test', () => {
    expect(authReducer(initialState, { type: AuthActionEnum.SET_USER, payload: {} as IUser })['user']).toEqual({} as IUser)
  })
  test('SET_AUTH_ERROR empty function test', () => {
    expect(authReducer(initialState, { type: AuthActionEnum.SET_AUTH_ERROR, payload: 'Error' })['authError']).toEqual('Error')
  })
  test('SET_AUTH_LOADING empty function test', () => {
    expect(authReducer(initialState, { type: AuthActionEnum.SET_AUTH_LOADING, payload: true })['userIsLoading']).toEqual(true)
  })
})


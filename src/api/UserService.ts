import { API } from "./API";

export class UserService{
  API = new API()
  login(login: string, password: string) {
    return this.API.postRequest('/api/user/login', {'login': login, 'password': password})
  }
}
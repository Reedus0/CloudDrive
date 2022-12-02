import { API } from "./API";

export class FilesService {
  API = new API()
  path: string = '/'
  constructor(path: string){
    this.path = path
  }
  setPath(path: string){
    this.path = path
  }
  addFile(file: File) {
    const formData = new FormData()
    formData.append(file.name, file)
    return this.API.postRequest('/api/files/add', { 'path': this.path, 'file': formData })
  }
  getFiles() {
    return this.API.postRequest('/api/files/path', { 'path': this.path })
  }
  createFile(type: string) {
    return this.API.postRequest('/api/files/create', { 'path': this.path, 'type': type })
  }
  deleteFile(name: string) {
    return this.API.postRequest('/api/files/delete', { 'path': this.path, 'name': name })
  }
  renameFile(oldName: string, newName: string) {
    return this.API.postRequest('/api/files/rename', { 'path': this.path, 'oldName': oldName, 'newName': newName })
  }
}
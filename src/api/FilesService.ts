import { API } from "./API";

export class FilesService {
  API = new API()
  path: string = '/'
  constructor(path: string) {
    this.path = path
  }
  setPath(path: string) {
    this.path = path
  }
  addFile(file: File) {
    const formData = new FormData()
    formData.append(file.name, file, decodeURI(this.path))
    console.log(file)
    return this.API.fileRequest('/api/upload', formData)
  }
  makePublic(path: string) {
    return this.API.postRequest('/api/public' + { 'path': decodeURI(this.path) })
  }
  makePrivate(path: string) {
    return this.API.postRequest('/api/private' + { 'path': decodeURI(this.path) })
  }
  getFile(path: string) {
    return this.API.postRequest('/api/static/' + path)
  }
  getFiles() {
    return this.API.postRequest('/api/dir', { 'path': decodeURI(this.path) })
  }
  downloadFile(name: string) {
    return this.API.postRequest('/api/load', { 'path': decodeURI(this.path) + (this.path === '/' ? '' : '/') + name })
  }
  createFile() {
    return this.API.postRequest('/api/mkdir', { 'path': decodeURI(this.path) + (this.path === '/' ? '' : '/') + 'Папка' })
  }
  openFile(name: string) {
    return this.API.postRequest('/api/open', { 'path': decodeURI(this.path) + (this.path === '/' ? '' : '/') + name })
  }
  deleteFile(name: string) {
    return this.API.postRequest('/api/delete', { 'path': decodeURI(this.path) + (this.path === '/' ? '' : '/') + name })
  }
  unzipFile(file: string) {
    return this.API.postRequest('/api/unzip', { 'file': decodeURI(this.path) + (this.path === '/' ? '' : '/') + file })
  }
  moveFile(name: string, oldPath: string) {
    return this.API.postRequest('/api/move', { 'old': decodeURI(oldPath) + (this.path === '/' ? '' : '/') + name, 'new': decodeURI(this.path) + (this.path === '/' ? '' : '/') + name })
  }
  renameFile(oldName: string, newName: string) {
    return this.API.postRequest('/api/move', { 'old': decodeURI(this.path) + (this.path === '/' ? '' : '/') + oldName, 'new': decodeURI(this.path) + (this.path === '/' ? '' : '/') + newName })
  }
  pasteFile(name: string, oldPath: string) {
    return this.API.postRequest('/api/paste', { 'old': decodeURI(oldPath) + (this.path === '/' ? '' : '/') + name, 'new': decodeURI(this.path) + (this.path === '/' ? '' : '/') + name })
  }
} 
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
    return this.API.fileRequest('/api/upload', formData)
  }
  getFiles() {
    return this.API.postRequest('/api/dir', { 'path': decodeURI(this.path) })
  }
  downloadFile() {
    return this.API.postRequest('/api/load', { 'path': decodeURI(this.path) })
  }
  createFile() {
    return this.API.postRequest('/api/mkdir', { 'path': decodeURI(this.path) + (this.path === '/' ? '/' : '') + 'Папка' })
  }
  deleteFile(name: string) {
    return this.API.postRequest('/api/delete', { 'path': decodeURI(this.path) + (this.path === '/' ? '/' : '') + name })
  }
  renameFile(oldName: string, newName: string) {
    return this.API.postRequest('/api/move', { 'old': decodeURI(this.path) + (this.path === '/' ? '/' : '') + oldName, 'new': decodeURI(this.path) + (this.path === '/' ? '/' : '') + newName })
  }
  pasteFile(name: string, oldPath: string) {
    return this.API.postRequest('/api/paste', { 'old': decodeURI(oldPath) + (this.path === '/' ? '/' : '') + name, 'new': decodeURI(this.path) + (this.path === '/' ? '/' : '') + name })
  }
} 
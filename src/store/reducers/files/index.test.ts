import filesReducer from ".";
import { IElement } from "../../../models/IElement";
import { FilesActionEnum } from "./types";

const initialState = {
  path: '',
  files: [] as IElement[],
  filesAreLoading: false,
  selectedFile: {} as IElement,
  historyCount: 0,
  copiedFile: {} as { 'path': string, 'file': IElement, 'copy': boolean },
  filesError: ''
}

const files = [
  { name: 'usr/bin', type: 'Папка', owner: 'root', lastUpdated: '16 Sep 02:08', size: '7' } as IElement,
  { name: 'boot', type: 'Папка', owner: 'root', lastUpdated: '26 Dec 06:16', size: '4.0K' } as IElement
]


describe('Files reducer tests', () => {
  test('SET_FILES empty function test', () => {
    expect(filesReducer(initialState, { type: FilesActionEnum.SET_FILES, payload: [] })['files']).toEqual(initialState['files'])
  })
  test('SET_FILES normal test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_FILES, payload: files
    })['files']).toEqual(files)
  })
  test('DELETE_FILE normal test', () => {
    initialState['files'] = files
    expect(filesReducer(initialState, {
      type: FilesActionEnum.DELETE_FILE, payload: files[0]
    })['files']).toEqual([{ name: 'boot', type: 'Папка', owner: 'root', lastUpdated: '26 Dec 06:16', size: '4.0K' } as IElement])
  })
  test('DELETE_FILE empty test', () => {
    initialState['files'] = files
    expect(filesReducer(initialState, {
      type: FilesActionEnum.DELETE_FILE, payload: {} as IElement
    })['files']).toEqual(initialState['files'])
  })
  test('SET_PATH normal test', () => {
    initialState['files'] = files
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_PATH, payload: '/home'
    })['path']).toEqual('/home')
  })
  test('SET_FILES_ERROR normal test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_FILES_ERROR, payload: 'Error'
    })['filesError']).toEqual('Error')
  })
  test('SET_FILES_LOADING normal test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_FILES_LOADING, payload: true
    })['filesAreLoading']).toEqual(true)
  })
  test('SET_SELECTED_FILE normal test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_SELECTED_FILE, payload: files[0]
    })['selectedFile']).toEqual(files[0])
  })
  test('SET_SELECTED_FILE empty test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_SELECTED_FILE, payload: {} as IElement
    })['selectedFile']).toEqual({} as IElement)
  })
  test('SET_COPIED_FILE normal test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_COPIED_FILE, payload: {'path': '/', 'file': files[0], 'copy': true}
    })['copiedFile']).toEqual({'path': '/', 'file': files[0], 'copy': true})
  })
  test('SET_COPIED_FILE empty test', () => {
    expect(filesReducer(initialState, {
      type: FilesActionEnum.SET_COPIED_FILE, payload: {} as { 'path': string, 'file': IElement, 'copy': boolean }
    })['copiedFile']).toEqual({} as { 'path': string, 'file': IElement, 'copy': boolean })
  })
})
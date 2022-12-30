import { IElement } from "../../../models/IElement";

export interface FilesState {
  path: string,
  files: IElement[],
  selectedFile: IElement,
  filesAreLoading: boolean,
  filesError: string,
  historyCount: number,
  copiedFile: { 'path': string, 'file': IElement, 'copy': boolean }
}

export enum FilesActionEnum {
  SET_HISTORY_COUNT = "SET_HISTORY_COUNT",
  SET_FILES = "SET_FILES",
  ADD_FILE = "ADD_FILE",
  DELETE_FILE = "DELETE_FILE",
  CREATE_FILE = "CREATE_FILE",
  SET_FILES_ERROR = "SET_FILES_ERROR",
  SET_SELECTED_FILE = "SET_SELECTED_FILE",
  SET_FILES_LOADING = "SET_FILES_LOADING",
  PASTE_FILE = "PASTE_FILE",
  COPY_FILE = "COPY_FILE",
  SET_PATH = "SET_PATH",
  SET_COPIED_FILE = "SET_COPIED_FILE"
}

export interface SetFilesAction {
  type: FilesActionEnum.SET_FILES;
  payload: IElement[];
}

export interface SetSelectedFileAction {
  type: FilesActionEnum.SET_SELECTED_FILE;
  payload: IElement;
}

export interface SetHistoryCountAction {
  type: FilesActionEnum.SET_HISTORY_COUNT;
  payload: number;
}

export interface CopyFileAction {
  type: FilesActionEnum.COPY_FILE;
  payload: { 'path': string, 'file': IElement, 'copy': boolean };
}

export interface SetCopiedFileAction {
  type: FilesActionEnum.SET_COPIED_FILE;
  payload: { 'path': string, 'file': IElement, 'copy': boolean };
}

export interface AddFileAction {
  type: FilesActionEnum.ADD_FILE;
  payload: IElement;
}

export interface DeleteFileAction {
  type: FilesActionEnum.DELETE_FILE;
  payload: IElement;
}

export interface CreateFileAction {
  type: FilesActionEnum.CREATE_FILE;
  payload: IElement;
}

export interface PasteFileAction {
  type: FilesActionEnum.PASTE_FILE;
  payload: IElement;
}

export interface SetFilesErrorAction {
  type: FilesActionEnum.SET_FILES_ERROR;
  payload: string;
}

export interface SetFilesPathAction {
  type: FilesActionEnum.SET_PATH;
  payload: string;
}

export interface SetFilesLoadingAction {
  type: FilesActionEnum.SET_FILES_LOADING;
  payload: boolean;
}

export type FilesAction =
  SetFilesAction |
  AddFileAction |
  DeleteFileAction |
  CreateFileAction |
  SetFilesErrorAction |
  SetFilesLoadingAction |
  SetSelectedFileAction |
  PasteFileAction |
  CopyFileAction |
  SetFilesPathAction |
  SetCopiedFileAction |
  SetHistoryCountAction
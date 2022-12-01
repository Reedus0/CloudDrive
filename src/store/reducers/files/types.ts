import { IElement } from "../../../models/IElement";

export interface FilesState {
  path: string,
  files: IElement[],
  selectedFile: IElement,
  filesAreLoading: boolean,
  filesError: string,
  copiedFile: IElement
}




export enum FilesActionEnum {
  SET_FILES = "SET_FILES",
  ADD_FILE = "ADD_FILE",
  DELETE_FILE = "DELETE_FILE",
  CREATE_FILE = "CREATE_FILE",
  RENAME_FILE = "RENAME_FILE",
  SET_ERROR = "SET_ERROR",
  SET_SELECTED_FILE = "SET_SELECTED_FILE",
  SET_LOADING = "SET_LOADING",
  PASTE_FILE = "PASTE_FILE",
  COPY_FILE = "COPY_FILE"
}

export interface SetFilesAction {
  type: FilesActionEnum.SET_FILES;
  payload: IElement[];
}

export interface SetSelectedFileAction {
  type: FilesActionEnum.SET_SELECTED_FILE;
  payload: IElement;
}

export interface CopyFileAction {
  type: FilesActionEnum.COPY_FILE;
  payload: IElement;
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
  payload: string
}

export interface RenameFileAction {
  type: FilesActionEnum.RENAME_FILE;
  payload: {file: IElement, name: string};
}

export interface SetFilesErrorAction {
  type: FilesActionEnum.SET_ERROR;
  payload: string;
}

export interface SetFilesLoadingAction {
  type: FilesActionEnum.SET_LOADING;
  payload: boolean;
}





export type FilesAction =
  SetFilesAction |
  AddFileAction |
  DeleteFileAction |
  CreateFileAction |
  RenameFileAction |
  SetFilesErrorAction | 
  SetFilesLoadingAction |
  SetSelectedFileAction |
  PasteFileAction |
  CopyFileAction
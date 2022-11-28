import { IElement } from "../../../models/IElement";

export interface FilesState {
  files: IElement[];
}




export enum FilesActionEnum {
  SET_FILES = "SET_FILES",
  ADD_FILE = "ADD_FILE",
  DELETE_FILE = "DELETE_FILE",
  CREATE_FILE = "CREATE_FILE",
  RENAME_FILE = "RENAME_FILE"
}

export interface SetFilesAction {
  type: FilesActionEnum.SET_FILES;
  payload: IElement[];
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

export interface RenameFileAction {
  type: FilesActionEnum.RENAME_FILE;
  payload: {file: IElement, name: string};
}





export type FilesAction =
  SetFilesAction |
  AddFileAction |
  DeleteFileAction |
  CreateFileAction |
  RenameFileAction
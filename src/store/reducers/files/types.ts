import { IElement } from "../../../models/IElement";

export interface FilesState {
  path: string,
  files: IElement[],
  selectedFile: IElement,
  filesAreLoading: boolean,
  filesError: string,
  copiedFile: { 'path': string, 'file': IElement, 'copy': boolean }
}

export enum FilesActionEnum {
  SET_FILES = "SET_FILES",
  DELETE_FILE = "DELETE_FILE",
  SET_FILES_ERROR = "SET_FILES_ERROR",
  SET_SELECTED_FILE = "SET_SELECTED_FILE",
  SET_FILES_LOADING = "SET_FILES_LOADING",
  PASTE_FILE = "PASTE_FILE",
  SET_PATH = "SET_PATH",
  SET_COPIED_FILE = "SET_COPIED_FILE",
  SET_FILE_PRIVACY = "SET_FILE_PRIVACY"
}

export interface SetFilesAction {
  type: FilesActionEnum.SET_FILES;
  payload: IElement[];
}

export interface SetSelectedFileAction {
  type: FilesActionEnum.SET_SELECTED_FILE;
  payload: IElement;
}

export interface SetFilePrivacyAction {
  type: FilesActionEnum.SET_FILE_PRIVACY;
  payload: IElement;
}

export interface SetCopiedFileAction {
  type: FilesActionEnum.SET_COPIED_FILE;
  payload: { 'path': string, 'file': IElement, 'copy': boolean };
}

export interface DeleteFileAction {
  type: FilesActionEnum.DELETE_FILE;
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
  DeleteFileAction |
  SetFilesErrorAction |
  SetFilesLoadingAction |
  SetSelectedFileAction |
  PasteFileAction |
  SetFilesPathAction |
  SetCopiedFileAction |
  SetFilePrivacyAction
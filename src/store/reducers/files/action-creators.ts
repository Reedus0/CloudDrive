import { IElement } from "../../../models/IElement";
import { SetFilesAction, FilesActionEnum, DeleteFileAction, AddFilesAction, CreateFileAction } from "./types";


export const FilesActionCreators = {
	setFiles: (files: IElement[]): SetFilesAction => ({ type: FilesActionEnum.SET_FILES, payload: files }),
	addFiles: (files: IElement[]): AddFilesAction => ({ type: FilesActionEnum.ADD_FILES, payload: files }),
	createFile: (file: IElement): CreateFileAction => ({ type: FilesActionEnum.CREATE_FILE, payload: file }),
	deleteFile: (file: IElement): DeleteFileAction => ({ type: FilesActionEnum.DELETE_FILE, payload: file }),
}
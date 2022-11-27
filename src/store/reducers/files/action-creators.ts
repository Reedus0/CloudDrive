import { IElement } from "../../../models/IElement";
import { SetFilesAction, FilesActionEnum, DeleteFileAction, AddFileAction, CreateFileAction } from "./types";


export const FilesActionCreators = {
	setFiles: (files: IElement[]): SetFilesAction => ({ type: FilesActionEnum.SET_FILES, payload: files }),
	addFile: (file: IElement): AddFileAction => ({ type: FilesActionEnum.ADD_FILE, payload: file }),
	createFile: (file: IElement): CreateFileAction => ({ type: FilesActionEnum.CREATE_FILE, payload: file }),
	deleteFile: (file: IElement): DeleteFileAction => ({ type: FilesActionEnum.DELETE_FILE, payload: file }),
}
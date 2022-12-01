import { AppDispatch } from "../..";
import { IElement } from "../../../models/IElement";
import { SetFilesAction, FilesActionEnum, DeleteFileAction, AddFileAction, CreateFileAction, RenameFileAction, SetFilesErrorAction, SetSelectedFileAction, SetFilesLoadingAction, PasteFileAction, CopyFileAction, SetFilesPathAction } from "./types";


export const FilesActionCreators = {
	setFiles: (files: IElement[]): SetFilesAction => ({ type: FilesActionEnum.SET_FILES, payload: files }),
	setSelectedFile: (file: IElement): SetSelectedFileAction => ({ type: FilesActionEnum.SET_SELECTED_FILE, payload: file }),
	setFilesError: (error: string): SetFilesErrorAction => ({ type: FilesActionEnum.SET_ERROR, payload: error }),
	setFilesLoading: (isLoading: boolean): SetFilesLoadingAction => ({ type: FilesActionEnum.SET_LOADING, payload: isLoading }),
	addFile: (file: IElement): AddFileAction => ({ type: FilesActionEnum.ADD_FILE, payload: file }),
	createFile: (file: IElement): CreateFileAction => ({ type: FilesActionEnum.CREATE_FILE, payload: file }),
	copyFile: (file: IElement): CopyFileAction => ({ type: FilesActionEnum.COPY_FILE, payload: file }),
	deleteFile: (file: IElement): DeleteFileAction => ({ type: FilesActionEnum.DELETE_FILE, payload: file }),
	renameFile: (file: IElement, name: string): RenameFileAction => ({ type: FilesActionEnum.RENAME_FILE, payload: {file: file, name: name} }),
	pasteFile: (): PasteFileAction => ({ type: FilesActionEnum.PASTE_FILE, payload: "name" }),
	setFilesPath: (path: string) => async (dispatch: AppDispatch) => {
		dispatch(FilesActionCreators.setFiles([] as IElement[]))
	}
}
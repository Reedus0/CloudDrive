import { AppDispatch } from "../..";
import { FilesService } from "../../../api/FilesService";
import Notification from "../../../components/Notification/Notification";
import { IElement, IElementTypes } from "../../../models/IElement";
import { refreshAllFiles } from "../../../utils";
import { NotificationActionCreators } from "../notification/action-creators";
import { PromptActionCreators } from "../prompt/action-creators";
import { SetFilesAction, FilesActionEnum, DeleteFileAction, AddFileAction, CreateFileAction, RenameFileAction, SetFilesErrorAction, SetSelectedFileAction, SetFilesLoadingAction, PasteFileAction, CopyFileAction, SetFilesPathAction } from "./types";

const filesService = new FilesService('/')

export const FilesActionCreators = {
	setFiles: (files: IElement[]): SetFilesAction => ({ type: FilesActionEnum.SET_FILES, payload: files }),
	setSelectedFile: (file: IElement): SetSelectedFileAction => ({ type: FilesActionEnum.SET_SELECTED_FILE, payload: file }),
	setFilesLoading: (isLoading: boolean): SetFilesLoadingAction => ({ type: FilesActionEnum.SET_LOADING, payload: isLoading }),
	copyFile: (path: string, file: IElement): CopyFileAction => ({ type: FilesActionEnum.COPY_FILE, payload: { 'path': path, 'file': file } }),
	setFilesErrorStore: (error: string): SetFilesErrorAction => ({ type: FilesActionEnum.SET_ERROR, payload: error }),
	addFileStore: (file: IElement): AddFileAction => ({ type: FilesActionEnum.ADD_FILE, payload: file }),
	deleteFileStore: (file: IElement): DeleteFileAction => ({ type: FilesActionEnum.DELETE_FILE, payload: file }),
	setPathStore: (path: string): SetFilesPathAction => ({ type: FilesActionEnum.SET_PATH, payload: path }),
	renameFileStore: (file: IElement, name: string): RenameFileAction => ({ type: FilesActionEnum.RENAME_FILE, payload: { file: file, name: name } }),
	pasteFileStore: (name: string): PasteFileAction => ({ type: FilesActionEnum.PASTE_FILE, payload: name }),
	createFileStore: (file: IElement): CreateFileAction => ({ type: FilesActionEnum.CREATE_FILE, payload: file }),
	setFilesError: (error: string): any => (dispatch: AppDispatch) => {
		dispatch(NotificationActionCreators.setNotification(
			<Notification title="Ошибка" >
				<h1 className="notification__text">{error} </h1>
			</Notification>))
		dispatch(FilesActionCreators.setFilesErrorStore(error))
	},
	addFile: (file: File) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.addFile(file)
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.addFileStore({ 'name': responseJSON['name'], 'type': IElementTypes.FILE }))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при добавлении файла"))
		}
	},
	createFile: (type: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.createFile(type)
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.createFileStore({ 'name': responseJSON['name'], 'type': IElementTypes.FOLDER }))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при создании файла"))
		}
	},
	deleteFile: (file: IElement) => async (dispatch: AppDispatch) => {
		dispatch(PromptActionCreators.setPrompt(<></>))
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.deleteFile(file['name'])
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.deleteFileStore(file))
				dispatch(FilesActionCreators.setSelectedFile({} as IElement))
				refreshAllFiles()
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при удалении файла"))
		}
	},
	renameFile: (file: IElement, name: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.renameFile(file['name'], name)
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.renameFileStore(file, responseJSON['name']))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при перeименовании файла"))
		}
	},
	pasteFile: (name: string, newPath: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.pasteFile(name, newPath)
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.pasteFileStore(responseJSON['name']))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при вставке файла"))
		}
	},
	setFilesPath: (path: string, navigate: Function) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			filesService.setPath(path)
			const response: Response = await filesService.getFiles()
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.setFiles(responseJSON['files']))
				dispatch(FilesActionCreators.setPathStore(path))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
				navigate(-1)
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при загрузке файлов"))
			navigate(-1)
		}
	},
}
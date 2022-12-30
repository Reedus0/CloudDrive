import { AppDispatch } from "../..";
import { FilesService } from "../../../api/FilesService";
import Notification from "../../../components/Notification/Notification";
import { IElement, IElementTypes } from "../../../models/IElement";
import { formatRequestFiles, refreshAllFiles } from "../../../utils";
import { NotificationActionCreators } from "../notification/action-creators";
import { PromptActionCreators } from "../prompt/action-creators";
import { SetFilesAction, FilesActionEnum, DeleteFileAction, AddFileAction, CreateFileAction, SetFilesErrorAction, SetSelectedFileAction, SetFilesLoadingAction, PasteFileAction, CopyFileAction, SetFilesPathAction, SetCopiedFileAction } from "./types";

const filesService = new FilesService('/')

export const FilesActionCreators = {
	setFiles: (files: IElement[]): SetFilesAction => ({ type: FilesActionEnum.SET_FILES, payload: files }),
	setSelectedFile: (file: IElement): SetSelectedFileAction => ({ type: FilesActionEnum.SET_SELECTED_FILE, payload: file }),
	setCopiedFile: (file: { 'path': string, 'file': IElement, 'copy': boolean }): SetCopiedFileAction => ({ type: FilesActionEnum.SET_COPIED_FILE, payload: file }),
	setFilesLoading: (isLoading: boolean): SetFilesLoadingAction => ({ type: FilesActionEnum.SET_FILES_LOADING, payload: isLoading }),
	copyFile: (path: string, file: IElement, copy: boolean): CopyFileAction => ({ type: FilesActionEnum.COPY_FILE, payload: { 'path': path, 'file': file, 'copy': copy } }),
	setFilesErrorStore: (error: string): SetFilesErrorAction => ({ type: FilesActionEnum.SET_FILES_ERROR, payload: error }),
	addFileStore: (file: IElement): AddFileAction => ({ type: FilesActionEnum.ADD_FILE, payload: file }),
	deleteFileStore: (file: IElement): DeleteFileAction => ({ type: FilesActionEnum.DELETE_FILE, payload: file }),
	setPathStore: (path: string): SetFilesPathAction => ({ type: FilesActionEnum.SET_PATH, payload: path }),
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
				console.log(responseJSON['files'])
				dispatch(FilesActionCreators.setFiles(formatRequestFiles(responseJSON['files'])))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при добавлении файла"))
		}
	},
	createFile: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.createFile()
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.setFiles(formatRequestFiles(responseJSON['files'])))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при создании файла"))
		}
	},
	downloadFile: (file: IElement) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.downloadFile(file['name'])
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				dispatch(FilesActionCreators.setFilesLoading(false))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при скачивании файла"))
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
				dispatch(FilesActionCreators.setFiles(formatRequestFiles(responseJSON['files'])))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при перeименовании файла"))
		}
	},
	pasteFile: (name: string, oldPath: string, copy: boolean) => async (dispatch: AppDispatch) => {
		try {
			dispatch(FilesActionCreators.setFilesLoading(true))
			let response: Response
			let responseJSON: any
			if (copy) {
				response = await filesService.pasteFile(name, oldPath)
				responseJSON = await response.clone().json()
			} else {
				response = await filesService.moveFile(name, oldPath)
				responseJSON = await response.clone().json()
			}
			if (response.status === 200) {
				dispatch(FilesActionCreators.setFiles(formatRequestFiles(responseJSON['files'])))
				dispatch(FilesActionCreators.setCopiedFile({} as { 'path': string, 'file': IElement, 'copy': boolean }))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при вставке файла"))
		}
	},
	setFilesPath: (path: string, navigate: Function) => async (dispatch: AppDispatch) => {
		try {
			filesService.setPath(path)
			dispatch(FilesActionCreators.setFilesLoading(true))
			const response: Response = await filesService.getFiles()
			const responseJSON = await response.clone().json()
			if (response.status === 200) {
				console.log(formatRequestFiles(responseJSON['files']))
				dispatch(FilesActionCreators.setFiles(formatRequestFiles(responseJSON['files'])))
				dispatch(FilesActionCreators.setPathStore(path))
			} else {
				dispatch(FilesActionCreators.setFilesError(responseJSON['error']))
				if (document.location.pathname !== '/') {
					navigate(-1)
				}
			}
		} catch (e) {
			dispatch(FilesActionCreators.setFilesError("Произошла ошибка при загрузке файлов"))
			if (document.location.pathname !== '/') {
				navigate(-1)
			}
		}
	},
}
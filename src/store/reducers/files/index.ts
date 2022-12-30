import { IElement, IElementTypes } from "../../../models/IElement";
import { FilesAction, FilesState, FilesActionEnum } from "./types";

const initialState = {
  path: '',
  files: [] as IElement[],
  filesAreLoading: false,
  selectedFile: {} as IElement,
  copiedFile: {} as { 'path': string, 'file': IElement, 'copy': boolean },
  filesError: ''
}

export default function filesReducer(state = initialState, action: FilesAction): FilesState {
  switch (action.type) {
    case FilesActionEnum.SET_FILES:
      return { ...state, files: action.payload, filesAreLoading: false }
    case FilesActionEnum.DELETE_FILE:
      return { ...state, files: [...state.files.filter((file: IElement) => file !== action.payload)], filesAreLoading: false }
    case FilesActionEnum.ADD_FILE:
      return { ...state, files: [...state.files, action.payload], filesAreLoading: false }
    case FilesActionEnum.CREATE_FILE:
      return { ...state, files: [...state.files, action.payload], filesAreLoading: false }
    case FilesActionEnum.SET_FILES_ERROR:
      return { ...state, filesError: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_PATH:
      return { ...state, path: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_SELECTED_FILE:
      return { ...state, selectedFile: action.payload }
    case FilesActionEnum.SET_FILES_LOADING:
      return { ...state, filesAreLoading: action.payload }
    case FilesActionEnum.SET_COPIED_FILE:
      return { ...state, copiedFile: action.payload, filesAreLoading: false }
    case FilesActionEnum.COPY_FILE:
      return { ...state, copiedFile: action.payload, filesAreLoading: false }
    
    default:
      return state;
  }
}
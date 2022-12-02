import { IElement } from "../../../models/IElement";
import { FilesAction, FilesState, FilesActionEnum } from "./types";



// const initialState = {
//   files: [
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },
//   {
//     name: "file",
//     type: IElementTypes.FILE
//   },
//   {
//     name: "folder",
//     type: IElementTypes.FOLDER
//   },

// ],
// }

const initialState = {
  path: '/',
  files: [] as IElement[],
  filesAreLoading: true,
  selectedFile: {} as IElement,
  copiedFile: {} as {'path': string, 'file': IElement},
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
    case FilesActionEnum.RENAME_FILE:
      return { ...state, files: [...state.files.filter((file: IElement) => file !== action.payload['file']), { type: action.payload['file']['type'], name: action.payload['name'] }], filesAreLoading: false }
    case FilesActionEnum.CREATE_FILE:
      return { ...state, files: [...state.files, action.payload], filesAreLoading: false }
    case FilesActionEnum.SET_ERROR:
      return { ...state, filesError: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_PATH:
      return { ...state, path: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_SELECTED_FILE:
      return { ...state, selectedFile: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_LOADING:
      return { ...state, filesAreLoading: action.payload }
    case FilesActionEnum.COPY_FILE:
      return { ...state, copiedFile: action.payload }
    case FilesActionEnum.PASTE_FILE:
      return { ...state, files: [...state.files, state.copiedFile['file']] }

    default:
      return state;
  }
}
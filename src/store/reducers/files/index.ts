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
  copiedFile: {} as IElement,
  filesError: ''
}

export default function filesReducer(state = initialState, action: FilesAction): FilesState {
  switch (action.type) {
    case FilesActionEnum.SET_FILES:
      return { ...state, files: action.payload, filesAreLoading: false }
    case FilesActionEnum.DELETE_FILE:
      return { ...state, files: [...state.files.filter((file: IElement) => file != action.payload)], filesAreLoading: false }
    case FilesActionEnum.ADD_FILE:
      return { ...state, files: [...state.files, action.payload], filesAreLoading: false }
    case FilesActionEnum.RENAME_FILE:
      return { ...state, files: [...state.files.filter((file: IElement) => file != action.payload['file']), { type: action.payload['file']['type'], name: action.payload['name'] }], filesAreLoading: false }
    case FilesActionEnum.CREATE_FILE:
      return { ...state, files: [...state.files, action.payload], filesAreLoading: false }
    case FilesActionEnum.SET_ERROR:
      return { ...state, filesError: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_SELECTED_FILE:
      return { ...state, selectedFile: action.payload, filesAreLoading: false }
    case FilesActionEnum.SET_LOADING:
      return { ...state, filesAreLoading: action.payload }
    case FilesActionEnum.COPY_FILE:
      return { ...state, copiedFile: action.payload }
    case FilesActionEnum.PASTE_FILE:
      return {
        ...state, files: Object.keys(state.copiedFile).length ?
          [...state.files, {
            type: state.copiedFile['type'],
            name: state.copiedFile['name']
              .split(".")
              .filter((part, index) => index != state.copiedFile['name']
              .split(".").length - 1)
              .join(".")
              +
              " копия."
              +
              state.copiedFile['name']
              .split(".")[state.copiedFile['name']
              .split(".").length - 1] // action.payload
          }] : state.files,
        copiedFile: {} as IElement
      }
    default:
      return state;
  }
}
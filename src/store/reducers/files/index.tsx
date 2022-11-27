import { IElement, IElementTypes } from "../../../models/IElement";
import { FilesAction, FilesState, FilesActionEnum } from "./types";



const initialState = {
  files: [
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },
  {
    name: "file",
    type: IElementTypes.FILE
  },
  {
    name: "folder",
    type: IElementTypes.FOLDER
  },

],
}

// const initialState = {
//   files: [] as IElement[]
// }

export default function filesReducer(state = initialState, action: FilesAction): FilesState {
  switch (action.type) {
    case FilesActionEnum.SET_FILES:
      return { ...state, files: action.payload }
    case FilesActionEnum.DELETE_FILE:
      return { ...state, files: [...state.files.filter((file: IElement) => file != action.payload)] }
    case FilesActionEnum.ADD_FILE:
      return { ...state, files: [...state.files, action.payload] }
    case FilesActionEnum.CREATE_FILE:
      return { ...state, files: [...state.files, action.payload] }
    default:
      return state;
  }
}
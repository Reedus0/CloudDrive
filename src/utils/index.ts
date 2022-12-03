import { IElement, IElementTypes } from "../models/IElement"

export const refreshAllFiles = () => {
  let files = Array.from(document.querySelectorAll('.browser-files__element'))
  for (let i = 0; i < files.length; i++) {
    files[i].classList.remove("_active")
  }
}

export const formatFiles = (element: any) => {
  refreshAllFiles()
  element.closest(".browser-files__element").classList.add("_active")
}

export const formatRequestFiles = (files: object): IElement[] => {
  let result: IElement[] = []
  for(let i = 0; i < Object.keys(files).length; i ++){    
    result.push({
      'name': (Object.keys(files))[i],
      'type': (Object.values(files))[i][0][0] == '-' ? IElementTypes.FILE : IElementTypes.FOLDER,
      'owner': (Object.values(files))[i][2],
      'lastUpdated': (Object.values(files))[i][5],
      'size': (Object.values(files))[i][4],
    })
  }
  return result
}

// - l silka
// - d directory
// - - file
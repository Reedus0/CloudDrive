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
    console.log();
    
    result.push({
      'name': (Object.keys(files))[i],
      'type': (Object.values(files))[i][0][0] == '-' ? IElementTypes.FILE : IElementTypes.FOLDER
    })
  }
  return result
}

// - l silka
// - d directory
// - - file
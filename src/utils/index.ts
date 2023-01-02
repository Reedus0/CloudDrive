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
  for (let i = 0; i < Object.keys(files).length; i++) {
    console.log(Object.keys(files)[i].split('.').pop())
    result.push({
      'name': (Object.keys(files))[i],
      'type': (Object.values(files))[i][0][0] == '-' ?  ((Object.keys(files))[i]).split('.').pop() === 'zip' ? IElementTypes.ZIP : IElementTypes.FILE  : IElementTypes.FOLDER,
      'owner': (Object.values(files))[i][2],
      'lastUpdated': (Object.values(files))[i][5],
      'size': (Object.values(files))[i][4],
    })
  }
  return result
}

export const blobToFile = (blob: Blob, fileName: string): File => {
  const b: any = blob;
  
  b.lastModifiedDate = new Date();
  b.name = fileName;

  return <File>blob;
}

export const download = (file: File) => {
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)

  link.href = url
  link.download = file.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

// - l silka
// - d directory
// - - file
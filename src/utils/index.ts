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

export const formatRequestFiles = (files: object, publicFiles: string[], path: string): IElement[] => {
  console.log(files)
  console.log(path)
  console.log(publicFiles)
  let fileIsPublic: boolean = false
  
  let result: IElement[] = []
  for (let i = 0; i < Object.keys(files).length; i++) {
    console.log(path === '/' ? '' + (Object.keys(files))[i] : path + '/' + (Object.keys(files))[i])
    if(publicFiles.includes(path === '/' ? '' + (Object.keys(files))[i] : path + '/' + (Object.keys(files))[i] )){
      fileIsPublic = true
    }
    result.push({
      'name': (Object.keys(files))[i][(Object.keys(files))[i].length - 1] === '/' ? (Object.keys(files))[i].slice(0, -1) : (Object.keys(files))[i],
      'type': (Object.keys(files))[i][(Object.keys(files))[i].length - 1] !== '/' ?  ((Object.keys(files))[i]).split('.').pop() === 'zip' ? IElementTypes.ZIP : IElementTypes.FILE  : IElementTypes.FOLDER,
      'owner': (Object.values(files))[i][2],
      'lastUpdated': (Object.values(files))[i][5],
      'size': (Object.values(files))[i][4],
      'public': fileIsPublic
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

export const getFileSource = (type: string, extension: string): string => {
  return ''
}

// - l silka
// - d directory
// - - file
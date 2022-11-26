import React, { useState } from 'react'
import { IElement, IElementTypes } from '../../../../models/IElement'
import Buttons from '../Buttons/Buttons'
import Files from '../Files/Files'

import './FileBrowser.scss'

const FileBrowser = () => {


  const [files, filesSet] = useState<IElement[]>([
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
    
  ])

  const [selectedFile, selectedFileSet] = useState<IElement>()
  
  return (
    <div className='file-browser'>
      <Buttons selectedFile={selectedFile} />
      <Files files={files} fileSet={selectedFileSet} />
    </div>
  )
}

export default FileBrowser
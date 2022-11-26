import React, { useState } from 'react'
import { IElement } from '../../../../models/IElement'
import Buttons from '../Buttons/Buttons'
import Files from '../Files/Files'

import './FileBrowser.scss'

const FileBrowser = () => {


  const [files, filesSet] = useState<IElement[]>([
    {name: "asd"},
    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},
    {name: "asd"},
    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},
    {name: "asd"},
    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},

    {name: "asd"},


  ])
  
  return (
    <div className='file-browser'>
      <Buttons />
      <Files files={files}/>
    </div>
  )
}

export default FileBrowser
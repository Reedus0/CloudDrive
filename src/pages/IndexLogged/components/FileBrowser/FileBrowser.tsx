import React from 'react'
import Buttons from '../Buttons/Buttons'
import Files from '../Files/Files'

import './FileBrowser.scss'

const FileBrowser = () => {

  return (
    <div className='file-browser'>
      <Buttons />
      <Files />
    </div>
  )
}

export default FileBrowser
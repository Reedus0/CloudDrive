import React, { useState } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IElement } from '../../../../models/IElement'
import Buttons from '../Buttons/Buttons'
import Files from '../Files/Files'

import './FileBrowser.scss'

const FileBrowser = () => {

  const { setFiles } = useActions()
  const { files } = useTypedSelector(state => state.files);

  const [selectedFile, selectedFileSet] = useState<IElement>({} as IElement)
  
  return (
    <div className='file-browser'>
      <Buttons selectedFile={selectedFile} selectedFileSet={selectedFileSet}/>
      <Files files={files} fileSet={selectedFileSet} />
    </div>
  )
}

export default FileBrowser
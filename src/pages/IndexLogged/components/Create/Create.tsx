import React from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IElement, IElementTypes } from '../../../../models/IElement'

import './Create.scss'

const Create = () => {

  const { setPrompt, createFile } = useActions()

  const createFolder = (type: string) => {
    setPrompt(
      <></>
    )
    createFile(type)
  }

  return (
    <div className='browser-create'>
      <div className='browser-create__option' onClick={() => createFolder('public')}>
        <div className='browser-create__icon-wrapper'>
          <img className='browser-create__icon' alt="Icon" width={25} height={20} src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/folder.png?raw=true' />
        </div>
        <h1 className='browser-create__name'>Общую папку</h1>
      </div>
      <div className='browser-create__option' onClick={() => createFolder('private')}>
        <div className='browser-create__icon-wrapper'>
          <img className='browser-create__icon' alt="Icon" width={25} height={20} src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/folder.png?raw=true' />
        </div>
        <h1 className='browser-create__name'>Личную папку</h1>
      </div>
    </div>
  )
}

export default Create
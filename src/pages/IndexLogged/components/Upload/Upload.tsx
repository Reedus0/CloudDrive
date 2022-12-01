import React from 'react'
import { API } from '../../../../api/API'
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import { useActions } from '../../../../hooks/useActions'
import { IElement, IElementTypes } from '../../../../models/IElement'

import './Upload.scss'

const Upload = () => {

  const { setPrompt, addFile } = useActions()

  const uploadElement = async (uploadedFiles: FileList) => {
    setPrompt(
      <></>
    )
    const parsedUploadedFiles = parseFiles(uploadedFiles)
    for (let i = 0; i < (await parsedUploadedFiles).length; i ++){
      addFile((await parsedUploadedFiles)[i])
    }
  }

  const parseFiles = async (uploadedFiles: FileList): Promise<IElement[]> => {
    const api = new API()

    console.log(await api.toBase64(Array.from(uploadedFiles)[0]))

    return Array.from(uploadedFiles).map((file: File) => {
      return { 'name': file.name, 'type': IElementTypes.FILE }
    })
  }

  const onDragOver = (event: any) => {
    event.preventDefault()
    event.target.closest('.browser-upload__drop').classList.add('_active')
  }

  const onDragLeave = (event: any) => {
    event.preventDefault()
    event.target.closest('.browser-upload__drop').classList.remove('_active')
  }

  const onDrop = (event: any) => {
    event.preventDefault()
    uploadElement(event.dataTransfer.files)
  }

  return (
    <div className='browser-upload'>
      <input className='browser-upload__input' type={'file'} onChange={(e: any) => uploadElement(e.target.files)} multiple={true} id='file-upload' />
      <div className='browser-upload__drop'
        onDragOver={(e) => onDragOver(e)}
        onDragLeave={(e) => onDragLeave(e)}
        onDrop={(e) => onDrop(e)}
      >
        <h1 className='browser-upload__drop-title'>Перетащите файлы</h1>
      </div>
      <h2 className='browser-upload__or'>Или</h2>
      <div className='buttons-prompt'>
        <ButtonPrompt name="Выбрать файлы" function={() => document.getElementById('file-upload')?.click()} />
      </div>
    </div>
  )
}

export default Upload
import React, { useEffect, useState } from 'react'
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../../../components/Prompt/Prompt'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IElement } from '../../../../models/IElement'
import { refreshAllFiles } from '../../../../utils'
import Create from '../Create/Create'
import Upload from '../Upload/Upload'

import './Buttons.scss'

const Buttons = () => {

  const { selectedFile, path } = useTypedSelector(state => state.files)
  const { setPrompt, deleteFile, renameFile, copyFile, pasteFile, setSelectedFile } = useActions()

  const [name, nameSet] = useState<string>("")
  const [isEditing, isEditingSet] = useState<boolean>(false)

  const deleteElement = () => {
    setPrompt(
      <Prompt title="Удалить">
        <div className='browser-delete'>
          <h2 className='prompt__text'>Вы действительно хотите удалить этот файл?</h2>
          <div className='buttons-prompt'>
            <ButtonPrompt name="Нет, оставить" function={() => setPrompt(<></>)} />
            <ButtonPrompt class="_red" name="Да, удалить" function={() => {
              deleteFile(selectedFile)
              setSelectedFile({} as IElement)
              refreshAllFiles()
              setPrompt(<></>)
            }} />
          </div>
        </div>
      </Prompt>
    )
  }

  const renameElement = () => {
    if (name !== "") {
      setSelectedFile({ ...selectedFile, name: name })
      renameFile(selectedFile, name)
      isEditingSet(!isEditing)
      setSelectedFile({} as IElement)
      nameSet("")
      refreshAllFiles()
    }
  }

  useEffect(() => {
    isEditingSet(false)
  }, [selectedFile])


  return (
    <>
      <div className='browser-buttons'>
        {Object.keys(selectedFile).length ? <><div className='browser-buttons__top'>
          {!isEditing ? <h1 className='browser-buttons__name'>{selectedFile.name}</h1>
            :
            <input
              className='browser-buttons__input'
              id='edit-name'
              value={name}
              autoFocus={true}
              onChange={(e) => nameSet(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  renameElement()
                }
              }}
              onBlur={() => {
                renameElement()
              }}
            />}
          <h2 className='browser-buttons__type'>{selectedFile.type}</h2>
        </div>
          <div className='browser-buttons__buttons'>

            <button className={['browser-buttons__button', isEditing ? '_disabled' : ''].join(' ')} disabled={isEditing}>Открыть</button>
            <button className={['browser-buttons__button', isEditing ? '_disabled' : ''].join(' ')} disabled={isEditing} onClick={() => copyFile(selectedFile)}>Копировать</button>
            <button className={['browser-buttons__button', isEditing ? '_disabled' : ''].join(' ')} disabled={isEditing} onClick={() => pasteFile()}>Вставить</button>
            <button className={['browser-buttons__button', isEditing ? '_disabled' : ''].join(' ')} disabled={isEditing} onClick={() => { isEditingSet(!isEditing); nameSet(selectedFile['name']) }}>Переименовать</button>
            <button className={['browser-buttons__button', isEditing ? '_disabled' : ''].join(' ')} disabled={isEditing} onClick={() => deleteElement()}>Удалить</button>

          </div></> :
          <div className='browser-buttons__choose'>
            <h1 className='browser-buttons__choose-title'>Выберите файл</h1>
          </div>}
        <div className='browser-buttons__bottom'>
          <button className='browser-buttons__create' onClick={
            () => setPrompt(
              <Prompt title="Создать">
                <Create />
              </Prompt>
            )
          }>Создать</button>
          <button className='browser-buttons__create' onClick={
            () => setPrompt(
              <Prompt title="Загрузить">
                <Upload />
              </Prompt>
            )
          }>Загрузить</button>
        </div>
      </div>
      <div className='browser-buttons__upload-mobile'>
        <button className='browser-buttons__create' onClick={
          () => setPrompt(
            <Prompt title="Создать">
              <Create />
            </Prompt>
          )
        }>Создать</button>
        <button className='browser-buttons__create' onClick={
          () => setPrompt(
            <Prompt title="Загрузить">
              <Upload />
            </Prompt>
          )
        }>Загрузить</button>
      </div>
    </>
  )
}

export default Buttons
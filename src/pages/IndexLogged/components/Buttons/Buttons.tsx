import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../../../components/Prompt/Prompt'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IElement, IElementTypes } from '../../../../models/IElement'
import { refreshAllFiles } from '../../../../utils'
import Create from '../Create/Create'
import Preview from '../Preview/Preview'
import Upload from '../Upload/Upload'

import './Buttons.scss'

const Buttons = () => {

  const { user } = useTypedSelector(state => state.auth)
  const { selectedFile, copiedFile, path, filesAreLoading } = useTypedSelector(state => state.files)
  const { setPrompt, deleteFile, downloadFile, renameFile, pasteFile, setSelectedFile, setCopiedFile, unzipFile, makePublic, makePrivate } = useActions()

  const [name, nameSet] = useState<string>("")
  const [isEditing, isEditingSet] = useState<boolean>(false)
  const [isPublic, isPublicSet] = useState<boolean>(selectedFile.public)

  const navigate = useNavigate()

  const deleteElement = () => {
    setPrompt(
      <Prompt title="Удалить">
        <div className='browser-delete'>
          <h2 className='prompt__text'>Вы действительно хотите удалить этот файл?</h2>
          <div className='buttons-prompt'>
            <ButtonPrompt name="Нет, оставить" function={() => setPrompt(<></>)} />
            <ButtonPrompt class="_red" name="Да, удалить" function={() => deleteFile(selectedFile)} />
          </div>
        </div>
      </Prompt>
    )
  }

  const downloadElement = () => {
    downloadFile(selectedFile)
  }

  const openElement = () => {
    if (selectedFile['type'] === IElementTypes.FILE) {
      setPrompt(
        <Prompt >
          <Preview />
        </Prompt>
      )
    } else {
      navigate(document.location.pathname === '/' ? selectedFile.name : document.location.pathname + '/' + selectedFile.name)
    }
  }

  const unzipElement = () => {
    setSelectedFile({} as IElement)
    unzipFile(selectedFile)
    refreshAllFiles()
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

  const changePrivacy = (privacy: boolean) => {
    if(privacy) {
      makePublic(selectedFile, isPublicSet)
    } else {
      makePrivate(selectedFile, isPublicSet)
    }
  }

  const handleCopy = (path: string, file: IElement, copy: boolean) => {
    setCopiedFile({ 'path': path, 'file': file, 'copy': copy })
    setSelectedFile({} as IElement)
    refreshAllFiles()
  }

  useEffect(() => {
    isEditingSet(false)
    isPublicSet(selectedFile.public)
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
          <div className='browser-buttons__info'>
            <div className='browser-buttons__type-wrapper'>
              <h2 className='browser-buttons__type'>{selectedFile.type}</h2>
              {selectedFile.owner === user.username &&<div className="browser-buttons__checkbox-wrapper">
                <p className={['browser-buttons__checkbox-title', filesAreLoading || isEditing ? '_disabled' : '' ].join(' ')} onClick={() => (!(filesAreLoading) || isEditing) && changePrivacy(!isPublic)}>Публичный</p>
                <label>
                  <input
                    disabled={filesAreLoading || isEditing}
                    className='browser-buttons__checkbox-checkbox'
                    type="checkbox"
                    checked={isPublic}
                    onChange={() => changePrivacy(!isPublic)}
                  />
                </label>
              </div>}
            </div>
            <div className='browser-buttons__file-info'>
              <h1 className='browser-buttons__info-field'>
                {selectedFile.owner}
              </h1>
              <h1 className='browser-buttons__info-field'>
                {selectedFile.size}
              </h1>
              <h1 className='browser-buttons__info-field'>
                {selectedFile.lastUpdated}
              </h1>
            </div>
          </div>
        </div>
          <div className='browser-buttons__buttons'>
            {selectedFile.type === IElementTypes.ZIP ?
              <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => unzipElement()}>Разархивировать</button>
              :
              <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => openElement()}>Открыть</button>
            }
            <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => handleCopy(path, selectedFile, true)}>Копировать</button>
            <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => handleCopy(path, selectedFile, false)}>Вырезать</button>
            <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => { isEditingSet(!isEditing); nameSet(selectedFile['name']) }}>Переименовать</button>
            <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => downloadElement()}>Скачать</button>
            <button className='browser-buttons__button' disabled={isEditing || filesAreLoading} onClick={() => deleteElement()}>Удалить</button>

          </div></> :
          <div className='browser-buttons__choose'>
            <h1 className='browser-buttons__choose-title'>Выберите файл</h1>
          </div>}
        <div className='browser-buttons__buttons-bottom'>
          <button className='browser-buttons__button' disabled={isEditing || Object.keys(copiedFile).length === 0 || filesAreLoading} onClick={() => pasteFile(copiedFile['file']['name'], copiedFile['path'], copiedFile['copy'])}>Вставить</button>
        </div>
        <div className='browser-buttons__bottom'>
          <button className='browser-buttons__create' disabled={isEditing || filesAreLoading} onClick={
            () => setPrompt(
              <Prompt title="Создать">
                <Create />
              </Prompt>
            )
          }>Создать</button>
          <button className='browser-buttons__create' disabled={isEditing || filesAreLoading} onClick={
            () => setPrompt(
              <Prompt title="Загрузить">
                <Upload />
              </Prompt>
            )
          }>Загрузить</button>
        </div>
      </div>
      <div className='browser-buttons__upload-mobile'>
        <button className='browser-buttons__create' disabled={isEditing || filesAreLoading} onClick={
          () => setPrompt(
            <Prompt title="Создать">
              <Create />
            </Prompt>
          )
        }>Создать</button>
        <button className='browser-buttons__create' disabled={isEditing || filesAreLoading} onClick={
          () => setPrompt(
            <Prompt title="Загрузить">
              <Upload />
            </Prompt>
          )
        }>Загрузить</button>
        <button className='browser-buttons__create' disabled={isEditing || Object.keys(copiedFile).length === 0 || filesAreLoading} onClick={() => pasteFile(copiedFile['file']['name'], copiedFile['path'], copiedFile['copy'])}>Вставить</button>

      </div>
    </>
  )
}

export default Buttons
import React from 'react'
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../../../components/Prompt/Prompt'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IElement } from '../../../../models/IElement'
import { refreshAllFiles } from '../../../../utils'
import Create from '../Create/Create'
import Upload from '../Upload/Upload'

import './Buttons.scss'

const Buttons = (props: { selectedFile: IElement, selectedFileSet: Function }) => {

  const { setPrompt, deleteFile } = useActions()

  const deleteElement = () => {
    setPrompt(
      <Prompt title="Удалить">
        <div className='browser-delete'>
        <h2 className='prompt__text'>Вы действительно хотите удалить это файл?</h2>
        <div className='buttons-prompt'>
          <ButtonPrompt name="Нет, оставить" function={() => setPrompt(<></>)}/>
          <ButtonPrompt class="_red" name="Да, удалить" function={() => {
            deleteFile(props.selectedFile)
            props.selectedFileSet({} as IElement)
            refreshAllFiles()
            setPrompt(<></>)
          }}/>
        </div>
      </div>
      </Prompt>
    )
  }

  return (
    <>
      <div className='browser-buttons'>
        {Object.keys(props.selectedFile).length ? <><div className='browser-buttons__top'>
          <h1 className='browser-buttons__name'>{props.selectedFile.name}</h1>
          <h2 className='browser-buttons__type'>{props.selectedFile.type}</h2>
        </div>
          <div className='browser-buttons__buttons'>

            <button className='browser-buttons__button'>Открыть</button>
            <button className='browser-buttons__button'>Копировать</button>
            <button className='browser-buttons__button'>Вставить</button>
            <button className='browser-buttons__button'>Переименовать</button>
            <button className='browser-buttons__button' onClick={() => deleteElement()}>Удалить</button>

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
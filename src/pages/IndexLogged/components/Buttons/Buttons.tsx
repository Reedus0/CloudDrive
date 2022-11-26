import React from 'react'

import './Buttons.scss'

const Buttons = () => {
  return (
    <div className='browser-buttons'>
      <div className='browser-buttons__top'>
        <h1 className='browser-buttons__name'>Пароли</h1>
        <h2 className='browser-buttons__type'>Папка</h2>
      </div>
      <div className='browser-buttons__buttons'>
        <button className='browser-buttons__button'>Открыть</button>
        <button className='browser-buttons__button'>Копировать</button>

        <button className='browser-buttons__button'>Вставить</button>

      </div>
      <div className='browser-buttons__bottom'>
        <button className='browser-buttons__upload'>Загрузить</button>
      </div>
    </div>
  )
}

export default Buttons
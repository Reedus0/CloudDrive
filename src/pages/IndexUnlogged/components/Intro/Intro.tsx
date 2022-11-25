import React from 'react'

import './Intro.scss'

import Background from "../../../../img/bg.png"

const Intro = () => {
  return (
    <div className='intro'>
      <img className='intro__bg' src={Background}/>
      <div className='intro__inner'>

      <h1 className='intro__title'>Начать</h1>
      </div>
    </div>
  )
}

export default Intro
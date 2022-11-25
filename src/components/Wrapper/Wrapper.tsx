import React from 'react'

import './Wrapper.scss'

import Background from "../../img/bg.png"


const Wrapper = (props: any) => {
  return (
    <div className='wrapper'>
      <img className='wrapper__bg' src={Background}/>
      <div className='wrapper__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper
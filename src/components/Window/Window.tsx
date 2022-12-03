import React from 'react'

import "./Window.scss"

const Window = (props: any) => {
  return (
    <div className='window'>
      <h1 className='window__title'>{props.name}</h1>
      <div className='window__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Window
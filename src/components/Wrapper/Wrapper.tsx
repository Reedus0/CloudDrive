import React from 'react'

import './Wrapper.scss'



const Wrapper = (props: any) => {

  return (
    <div className='wrapper'>
      <div className='wrapper__bg'></div>
      <div className='wrapper__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper
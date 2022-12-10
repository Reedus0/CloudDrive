import React from 'react'

import './Wrapper.scss'



const Wrapper = (props: any) => {

  return (
    <div className='wrapper'>

      <img className='wrapper__bg' alt="Background" src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/bg-light.png?raw=true' />

      <div className='wrapper__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper
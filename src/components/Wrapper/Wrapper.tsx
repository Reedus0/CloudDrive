import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Wrapper.scss'



const Wrapper = (props: any) => {

  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <div className='wrapper'>
      <img className={['wrapper__bg', !isAuth ? '_blur' : ''].join(' ')} alt="Background" src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/bg.png?raw=true'/>
      <div className='wrapper__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper
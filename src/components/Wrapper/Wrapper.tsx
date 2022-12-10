import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IThemes } from '../../models/ITheme';

import './Wrapper.scss'



const Wrapper = (props: any) => {

  const { theme } = useTypedSelector(state => state.themes);

  useEffect(() => {
    if (theme === IThemes.LIGHT) {
      document.getElementById('bg-dark')?.classList.toggle('_active')
      document.getElementById('bg-light')?.classList.toggle('_active')

    } else {
      document.getElementById('bg-dark')?.classList.toggle('_active')
      document.getElementById('bg-light')?.classList.toggle('_active')
    }
  }, [theme])


  return (
    <div className='wrapper'>

      <img className='wrapper__bg _active' id='bg-light' alt="Background" src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/bg-light.png?raw=true' />
      <img className='wrapper__bg' id='bg-dark' alt="Background" src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/bg-dark.png?raw=true' />

      <div className='wrapper__inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper
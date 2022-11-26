import React from 'react'
import SimpleBar from 'simplebar-react'
import { IElement } from '../../../../models/IElement'

import 'simplebar-react/dist/simplebar.min.css';

import './Files.scss'

const Files = (props: { files: IElement[] }) => {
  return (
    <div className='browser-files'>
      <SimpleBar style={{ maxHeight: "calc(100vh - 170px)" }} forceVisible="y" autoHide={false}>
        <div className='browser-files__inner'>

          {props.files.map((file: IElement) => 
          <div className='browser-files__element'>
            <img className='browser-files__icon' alt="Icon" width={20} height={25} src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/file.png?raw=true' />
            <h1 className='browser-files__name'>

            {file.name}
            </h1>
          </div>)}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Files
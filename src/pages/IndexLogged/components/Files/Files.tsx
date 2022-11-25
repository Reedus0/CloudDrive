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

          {props.files.map((file: IElement) => <div>{file.name}</div>)}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Files
import React from 'react'
import SimpleBar from 'simplebar-react'
import { IElement, IElementTypes } from '../../../../models/IElement'

import 'simplebar-react/dist/simplebar.min.css';

import './Files.scss'
import { refreshAllFiles } from '../../../../utils';

const Files = (props: { files: IElement[], fileSet: Function }) => {

  const formatFiles = (element: any) => {

    refreshAllFiles()
    element.closest(".browser-files__element").classList.add("_active")
  }

  return (
    <div className='browser-files'>
      <SimpleBar style={{ maxHeight: "calc(100vh - 170px)" }} forceVisible="y" autoHide={false}>
        <div className='browser-files__inner'>

          {props.files.length ? props.files.map((file: IElement) =>
            <div className='browser-files__element' onClick={(e) => {
              props.fileSet(file)
              formatFiles(e.target)
            }
            }>
              {file.type === IElementTypes.FOLDER ?
                <div className='browser-files__icon-wrapper'>

                  <img className='browser-files__icon' alt="Icon" width={25} height={20} src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/folder.png?raw=true' />
                </div>
                :
                <div className='browser-files__icon-wrapper'>
                  <img className='browser-files__icon' alt="Icon" width={20} height={25} src='https://github.com/Reedus0/CloudDrive/blob/CloudDrive-master/src/img/file.png?raw=true' />
                </div>
              }
              <h1 className='browser-files__name'>

                {file.name}
              </h1>
            </div>) : 
            
            <div className='browser-files__loading'>
              <div className="browser-files__ring"></div>
              </div>}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Files
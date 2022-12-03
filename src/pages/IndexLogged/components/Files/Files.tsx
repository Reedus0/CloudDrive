import React, { useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'
import { IElement, IElementTypes } from '../../../../models/IElement'
import 'simplebar-react/dist/simplebar.min.css';
import { formatFiles, refreshAllFiles } from '../../../../utils';
import './Files.scss'
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { useLocation, useNavigate } from 'react-router-dom';

const Files = () => {

  const { files, filesAreLoading } = useTypedSelector(state => state.files);
  const { setSelectedFile, setFilesPath } = useActions()

  const [tilesView, tilesViewSet] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setFilesPath(document.location.pathname, navigate)
    setSelectedFile({} as IElement)
    refreshAllFiles()
  }, [location])



  return (
    <div className='browser-files'>
      <div className='browser-files__header header-browser'>
        <div className='header-browser__buttons'>
          <button className='header-browser__button _left' disabled={location.key === 'default'} onClick={() => navigate(-1)}>^</button>
          <button className='header-browser__button _right' onClick={() => navigate(1)}>^</button>
        </div>
        <div className='header-browser__view-mods'>
          <button className='header-browser__view-mode' onClick={() => { tilesViewSet(false); setSelectedFile({} as IElement) }}>
            <img className={['header-browser__view-icon', tilesView ? '' : '_active'].join(' ')} alt='Rows' width={25} height={23} src='https://raw.githubusercontent.com/Reedus0/CloudDrive/c51bb2077ca8a25bec6f952fb6b363412b1ba153/src/img/rows.png' />
          </button>
          <button className='header-browser__view-mode' onClick={() => { tilesViewSet(true); setSelectedFile({} as IElement) }}>
            <img className={['header-browser__view-icon', tilesView ? '_active' : ''].join(' ')} alt='Tiles' width={25} height={25} src='https://raw.githubusercontent.com/Reedus0/CloudDrive/c51bb2077ca8a25bec6f952fb6b363412b1ba153/src/img/tiles.png' />
          </button>
        </div>
      </div>
      {filesAreLoading ? <div className='browser-files__loading'>
        <div className='browser-files__ring'></div>
      </div> : <></>}
      <SimpleBar style={{ maxHeight: "calc(100vh - 180px)", backgroundColor: window.innerWidth < 767 ? "white" : "" }} forceVisible="y" autoHide={false}>
        <div className={['browser-files__inner', tilesView ? '_tiles' : '_rows'].join(' ')}>
          {files.length ? files.map((file: IElement, index: number) =>
            <div className={['browser-files__element', tilesView ? '_tiles' : '_rows'].join(' ')} key={index} onClick={(e) => {
              setSelectedFile(file)
              if (e.detail === 2) {
                
                navigate(document.location.pathname === '/' ? file.name : document.location.pathname + '/' + file.name)
                
              }
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
              <h1 className={['browser-files__name', tilesView ? '_tiles' : '_rows'].join(' ')}>
                {file.name}
              </h1>
            </div>)
            :
            <div className='browser-files__empty'>
              <h1 className='browser-files__empty-title'>Здесь ничего нет...</h1>
            </div>}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Files
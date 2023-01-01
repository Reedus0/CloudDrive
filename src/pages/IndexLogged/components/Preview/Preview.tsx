import React from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import './Preview.scss'

const Preview = () => {

    const { selectedFile } = useTypedSelector(state => state.files)
    const { setPrompt, downloadFile } = useActions()

 
    

    return (
        <div className='file-preview'>
            <div className='file-preview__inner'>
            
                <embed className='file-preview__file' src='https://sun2-4.userapi.com/impg/Lqf-x7Im388nYf7avlazjLtZ6aHU-Ua4V2uBeA/IzrpHNz3tVU.jpg?size=2048x1064&quality=96&sign=5a608805dfb79c826a4838b82dff12a2&type=album' />
                
           
            </div>
            <div className='buttons-prompt'>
                <ButtonPrompt name="Закрыть" function={() => setPrompt(<></>)} />
                <ButtonPrompt name="Скачать" function={() => downloadFile(selectedFile)} />
            </div>
        </div>
    )
}

export default Preview
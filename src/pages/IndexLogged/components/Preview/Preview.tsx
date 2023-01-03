import React, { useEffect, useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import { API } from '../../../../api/API';
import ButtonPrompt from '../../../../components/Prompt/ButtonPrompt/ButtonPrompt'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import './Preview.scss'

const Preview = () => {

    const { selectedFile, path } = useTypedSelector(state => state.files)
    const { setPrompt, downloadFile } = useActions()
    const [type, setType] = useState<string>('')
    const [link, setLink] = useState<string>('')
    const [fileIsLoading, setFileIsLoading] = useState<boolean>(false)
    const api = new API()

    const setup = async () => {
        setFileIsLoading(true)
        setType((await api.postRequest('/api/static' + path + '/' + selectedFile['name'])).headers.get('content-type')?.split('/').shift()!)
        if (selectedFile['name'].split('.').pop()! === 'doc' || selectedFile['name'].split('.').pop()! === 'docx' || selectedFile['name'].split('.').pop()! === 'pptx' || selectedFile['name'].split('.').pop()! === 'lxls') {
            setLink('https://docs.google.com/gview?url=' + api.link + '/api/static' + path + '/' + selectedFile['name'] + '&embedded=true')
        } else {
            setLink(api.link + '/api/static' + path + '/' + selectedFile['name'])
        }
        setFileIsLoading(false)
    }

    useEffect(() => {
        setup()
    }, [])


    return (
        <div className='file-preview'>
            <div className='file-preview__inner'>
                {!fileIsLoading && link ?
                    <embed
                        className={['file-preview__file', type === 'image' ? '_img' : ''].join(' ')}
                        src={link}
                    />
                    :
                    <div className='file-preview__loading'>
                        <div className='file-preview__ring'></div>
                    </div>
                }
            </div>
            <div className='buttons-prompt'>
                <ButtonPrompt name="Закрыть" function={() => setPrompt(<></>)} />
                <ButtonPrompt name="Скачать" function={() => { setPrompt(<></>); downloadFile(selectedFile) }} />
            </div>
        </div>
    )
}

export default Preview
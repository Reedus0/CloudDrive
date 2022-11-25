import React from 'react'
import Header from '../../components/Header/Header'
import Window from '../../components/Window/Window'
import Wrapper from '../../components/Wrapper/Wrapper'
import FileBrowser from './components/FileBrowser/FileBrowser'

const IndexLogged = () => {
  return (
    <>
    <Header />
    <Wrapper >
      <Window name="Проводник" >
        <FileBrowser />
      </Window>
    </Wrapper>
    </>
  )
}

export default IndexLogged
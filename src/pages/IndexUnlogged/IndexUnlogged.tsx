import React, { FC } from 'react'
import Header from '../../components/Header/Header'
import Wrapper from '../../components/Wrapper/Wrapper'

const IndexUnlogged: FC = () => {
  return (
    <>
    <Header />
    <Wrapper >
      <h1 className='wrapper__title'>Начать</h1>
    </Wrapper>
    </>
  )
}

export default IndexUnlogged
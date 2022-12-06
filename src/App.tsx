import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useTypedSelector } from './hooks/useTypedSelector';

import './styles/App.scss';




const App: FC = () => {

  const { prompt } = useTypedSelector(state => state.prompt);
  const { notification } = useTypedSelector(state => state.notification);

  const navigate = useNavigate()

  useEffect(() => {
    if(document.location.pathname != '/'){
      document.location.pathname = '/'
    }
  }, [])
  

  return (
    <>
      {notification}
      {prompt}
      <AppRouter />
    </>
  )
}

export default App
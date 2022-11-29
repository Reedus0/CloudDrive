import React, { FC } from 'react'
import AppRouter from './components/AppRouter';
import { useTypedSelector } from './hooks/useTypedSelector';

import './styles/App.scss';




const App: FC = () => {

  const { prompt } = useTypedSelector(state => state.prompt);
  const { notification } = useTypedSelector(state => state.notification);


  return (
    <>
      {notification}
      {prompt}
      <AppRouter />
    </>
  )
}

export default App
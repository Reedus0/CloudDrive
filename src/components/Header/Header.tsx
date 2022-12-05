import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import FormLogin from '../Forms/Auth/FormLogin';
import Prompt from '../Prompt/Prompt';

import './Header.scss'

const Header: FC = () => {

  const { setPrompt, logout } = useActions()
  const { isAuth, user } = useTypedSelector(state => state.auth);

  return (
    <header className='header'>
      <div className={['header__inner', isAuth ? "_blur" : ""].join(" ")}>
        <div className='header__profile profile-header'>
          {isAuth ?
            <>
              <div className='profile-header__user'>
                <h1 className='profile-header__name'>{window.innerWidth < 767 ? user['username'] : 'С возвращением, ' + user['username'] + '!'}</h1>
              </div>
              <Button name="Выйти" function={() => logout()} />
            </>
            :
            <>
              <div className='profile-header__user'>
              </div>
              <Button name="Войти" function={() => setPrompt(
                <Prompt title="Вход">
                  <FormLogin />
                </Prompt>
              )} />
            </>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../models/IUser';
import Button from '../Button/Button';
import FormLogin from '../Forms/Auth/FormLogin';
import Prompt from '../Prompt/Prompt';

import './Header.scss'

const Header: FC = () => {

  const { setPrompt, logout } = useActions()
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <header className='header'>
      <div className={['header__inner', isAuth ? "_blur" : ""].join(" ")}>
        <div className='header__profile profile-header'>
          {isAuth ?
            <>
              <Button name="Выйти" function={() => logout()}/>
            </>
            :
            <>
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
import { join } from 'path';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import FormLogin from '../Forms/Auth/FormLogin';
import FormRegister from '../Forms/Auth/FormRegister';
import Prompt from '../Prompt/Prompt';

import './Header.scss'

const Header: FC = () => {

  const { setPrompt } = useActions()
  const { isAuth, user } = useTypedSelector(state => state.auth);

  function showDrop(): void {
    document.body.classList.toggle("_menu")
    document.querySelector(".header__drop")!.classList.toggle("_active")
    document.querySelector(".header__burger")!.classList.toggle("_active")
  }

  return (
    <header className='header'>
      <div className={['header__inner', isAuth ? "_blur" : ""].join(" ")}>
        <div className='header__profile profile-header'>
          {isAuth ?
            <>
              <Button name="Выйти" />
            </>
            :
            <>
              <Button name="Войти" function={() => setPrompt(
                <Prompt title="Login">
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
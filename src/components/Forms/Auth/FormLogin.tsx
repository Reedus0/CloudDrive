import React, { useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import Input from '../../Input/Input'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../Prompt/Prompt'
import FormRegister from './FormRegister'
import "../Form.scss"
import { useTypedSelector } from '../../../hooks/useTypedSelector'


export default function FormLogin() {

  const { setPrompt, login } = useActions()
  const { authError } = useTypedSelector(state => state.auth);


  const [username, usernameSet] = useState<string>("")
  const [password, passwordSet] = useState<string>("")



  function loginRequest(event: any) {
    event.preventDefault()
    login(username, password)
  }

  return (
    <form className='form-auth' id="form-login" onSubmit={(e) => loginRequest(e)}>
      <div className='form-auth__inputs'>
        <div className='form-auth__input'>
          <Input onChange={(e: any) => usernameSet(e.target.value)} value={username} name="username" type="text" placeholder='Логин' autoComplete='off' />
        </div>
        <div className='form-auth__input'>
          <Input onChange={(e: any) => passwordSet(e.target.value)} value={password} name="password" type="password" placeholder="Пароль" autoComplete='off' />
        </div>
      </div>
      <h1 className='form-auth__error'>{authError}</h1>
      <div className='buttons-prompt'>
        <ButtonPrompt name="Войти" function={(e: any) => loginRequest(e)} />
      </div>
      <div className='form-auth__link'>
        <button name="Login" className='form-auth__link-button' onClick={() => setPrompt(
          <Prompt title="Регистрация">
            <FormRegister />
          </Prompt>
        )} ><span className='form-auth__link-light'>Нет аккаунта?</span> Зарегистрироваться</button>
      </div>
    </form>
  )
}

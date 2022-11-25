import React from 'react'
import { useActions } from '../../../hooks/useActions'
import Input from '../../Input/Input'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../Prompt/Prompt'
import FormRegister from './FormRegister'
import "../Form.scss"


export default function FormLogin() {

  const { setPrompt } = useActions()


  function loginRequest(event: any) {
    event.preventDefault()
  }

  return (
    <form className='form-auth' id="form-login" onSubmit={(e) => loginRequest(e)}>
      <div className='form-auth__inputs'>
        <div className='form-auth__input'>
          <Input name="username" type="text" placeholder='Логин' autoComplete='off' />
        </div>
        <div className='form-auth__input'>
          <Input name="password" type="password" placeholder="Пароль" autoComplete='off' />
        </div>
      </div>
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

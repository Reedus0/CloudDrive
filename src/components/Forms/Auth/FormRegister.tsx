import React from 'react'
import { useActions } from '../../../hooks/useActions'
import Input from '../../Input/Input'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'
import Prompt from '../../Prompt/Prompt'
import FormLogin from './FormLogin'



export default function FormRegister() {

  const { setPrompt } = useActions()

  function registerRequest() {

  }

  return (
    <form className='form-auth' id="form-login" onSubmit={() => registerRequest()}>
      <div className='form-auth__inputs'>
        <div className='form-auth__input'>

          <Input name="username" type="text" placeholder="Логин" autoComplete='off' />
        </div>
        <div className='form-auth__input'>

          <Input name="email" type="email" placeholder="Почта" autoComplete='off' />
        </div>
        <div className='form-auth__input'>

          <Input name="passwordFirst" type="password" placeholder="Пароль" autoComplete='off' />
        </div>
        <div className='form-auth__input'>

          <Input name="passwordSecond" type="password" placeholder="Пароль снова" autoComplete='off' />
        </div>
      </div>
      <div className='buttons-prompt'>
        <ButtonPrompt name="Зарегистрироваться" function={() => registerRequest()} />
      </div>
      <div className='form-auth__link'>
        <button name="Login" className='form-auth__link-button' onClick={() => setPrompt(
          <Prompt title="Вход">
            <FormLogin />
          </Prompt>
        )} ><span className='form-auth__link-light'>Уже есть аккаунт?</span> Войти</button>
      </div>
    </form>
  )
}

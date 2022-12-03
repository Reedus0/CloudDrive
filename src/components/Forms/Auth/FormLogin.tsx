import React, { useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import Input from '../../Input/Input'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'
import "../Form.scss"
import { useTypedSelector } from '../../../hooks/useTypedSelector'


export default function FormLogin() {

  const { login } = useActions()
  const { authError, userIsLoading } = useTypedSelector(state => state.auth);


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
        <ButtonPrompt disabled={userIsLoading} name="Войти" function={(e: any) => loginRequest(e)} />
      </div>
    </form>
  )
}

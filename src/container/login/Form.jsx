import React, { useCallback, useState } from 'react'
import { MdMail, MdLock } from 'react-icons/md'
import Input from 'component/login/Input'
import { Form, Container } from 'module/login'

function LoginFormContainer(props) {
  const { onLogin = () => {} } = props

  const inital = {
    email: '',
    password: '',
  }

  const [loginFrmData, setLoginFrmData] = useState(inital)

  const onChange = useCallback(
    (e) => {
      setLoginFrmData({
        ...loginFrmData,
        [e.target.type]: e.target.value,
      })
    },
    [loginFrmData],
  )

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onLogin(loginFrmData)
      setLoginFrmData(inital)
    },
    [inital],
  )

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={loginFrmData.email}
        onChange={onChange}
        icon={MdMail}
      />

      <Input
        type="password"
        placeholder="Password"
        value={loginFrmData.password}
        onChange={onChange}
        icon={MdLock}
      />

      <label htmlFor="rember-me">
        Remember me <input type="checkbox" id="remember-me" name="rember-me" />
      </label>

      <button type="submit">Login</button>
    </Form>
  )
}

export default LoginFormContainer

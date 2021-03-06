import React from 'react'
import { Container, Icon, Input } from 'modules/login/form/Input'

function LoginFormInputComponent(props) {
  const { icon } = props

  return (
    <Container>
      <Icon>{icon()}</Icon>
      <Input {...props} />
    </Container>
  )
}

export default LoginFormInputComponent

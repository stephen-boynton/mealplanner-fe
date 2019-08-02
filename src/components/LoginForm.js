import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
padding: 10px;
margin: 20px;
`

const FormName = styled.h2`
align-self: center;
`

const Label = styled.label`
display: flex;
flex-direction: column;
`

const Input = styled.input`
margin-top: 5px;
margin-bottom: 10px;
font-size: 16px;
height: 25px;
`

const Submit = styled.input`
width: 100px;
padding: 10px;
align-self: center;
border-radius: 20px;
background: #00b894;
color: white;
font-weight: bold;
font-size: 1rem;
border: none;

:hover {
  box-shadow: 3px 3px 3px #b2bec3;
}

:active {
  background: #55efc4;
}
`

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  }

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormName>Login</FormName>
      <Label>
        Email
        <Input autoFocus type="text" value={userName} onChange={handleChangeUserName} />
      </Label>

      <Label>
        Password
        <Input type="password" value={password} onChange={handleChangePassword} />
      </Label>

      <Submit type="submit" value="Submit" />
    </Form>
  )
}

export default LoginForm;
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'

const LOG_IN = gql`
mutation login($input: LoginInput){
    login(input: $input){
      jwt
    }
  }

`

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data }] = useMutation(LOG_IN);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { input: { email, password } } });
  }

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  if (data) {
    localStorage.setItem('token', data.login.jwt);
    return <Redirect to="/home/" />
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormName>Login</FormName>
      <Label>
        Email
        <Input autoFocus type="text" value={email} onChange={handleChangeemail} />
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
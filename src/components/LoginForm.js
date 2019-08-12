import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'
import * as Buttons from '../ui/Buttons';
import { LOG_IN } from '../mutations';
import * as Form from '../ui/Form';

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
    <Form.container onSubmit={handleSubmit}>
      <Form.name>Login</Form.name>
      <Form.label>
        Email
        <Form.input autoFocus type="text" value={email} onChange={handleChangeemail} />
      </Form.label>
      <Form.label>
        Password
        <Form.input type="password" value={password} onChange={handleChangePassword} />
      </Form.label>

      <Buttons.submit type="submit" value="Submit" />
    </Form.container>
  )
}

export default LoginForm;
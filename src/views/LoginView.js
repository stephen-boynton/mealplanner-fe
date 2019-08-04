import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import SiteTitle from '../components/SiteTitle';

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    width: 45%
  }
`


function LoginView() {
  return (
    <React.Fragment>
      <LoginFormContainer>
        <SiteTitle />
        <LoginForm />
      </LoginFormContainer>
    </React.Fragment>
  )
}

export default LoginView;
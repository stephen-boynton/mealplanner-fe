import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import styled from 'styled-components';
import LoginView from './views/LoginView';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
  background: #0984e3;
`

function App() {
  return (
    <BrowserRouter>
      <AppContainer className="App">
        <Route exact path="/" component={LoginView} />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

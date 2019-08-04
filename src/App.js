import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import styled from 'styled-components';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
`

function App() {
  return (
    <BrowserRouter>
      <AppContainer className="App">
        <Route exact path="/" component={LoginView} />
        <Route exact path="/home/" component={HomeView} />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

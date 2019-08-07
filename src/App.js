import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';

import styled from 'styled-components';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import MealView from './views/MealView';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContainer className="App">
          <Route exact path="/" component={LoginView} />
          <Route exact path="/home/" component={HomeView} />
          <Route exact path="/meals/" component={MealView} />
        </AppContainer>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

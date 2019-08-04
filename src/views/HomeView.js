import React, { useState } from 'react';
import styled from 'styled-components';
import NavCard from '../components/NavCard';

const HomeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 600px) {
    width: 45%
  }
`

const navcards = [
  { section: 'Meals', path: "/meals/", image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' },
  { section: 'Grocery Lists', path: "/groceries/", image: 'https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-cart-1275480_1280.jpg' },
  { section: 'Plans', path: "/plans/", image: 'https://cdn.pixabay.com/photo/2014/02/24/18/31/time-273857_1280.jpg' }
]


function HomeView() {
  return (
    <HomeViewContainer>
      {navcards.map(nav => <NavCard section={nav.section} image={nav.image} path={nav.paht} />)}
    </HomeViewContainer>
  )
}

export default HomeView;
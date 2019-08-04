import React, { useState } from 'react';
import styled from 'styled-components';
import NavCard from '../components/NavCard';
import { faUtensils, faShoppingBasket, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import SiteTitle from '../components/SiteTitle';

const HomeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-self: center;
  align-items: center;
  width: 100%;
`

const NavCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 1050px) {
  flex-direction: row;
  align-content: space-around;
  width: 75%;
  }
`

const navcards = [
  { bgColor: "#00b894", section: 'Meals', path: "/meals/", icon: faUtensils },
  { bgColor: "#0984e3", section: 'Grocery Lists', path: "/groceries/", icon: faShoppingBasket },
  { bgColor: "#e17055", section: 'Plans', path: "/plans/", icon: faCalendarAlt }
]


function HomeView() {
  return (
    <HomeViewContainer>
      <SiteTitle />
      <NavCardsContainer>
        {navcards.map((nav, idx) => <NavCard key={idx} {...nav} />)}
      </NavCardsContainer>
    </HomeViewContainer>
  )
}

export default HomeView;
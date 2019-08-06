import React, { useState } from 'react';
import styled from 'styled-components';
import MealCard from '../components/MealCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SiteTitle from '../components/SiteTitle';

/*
{ _id: '149b9384-f239-4ef4-a093-e0d76b3afd57',
       name: 'stephen',
       email: 'test@test.com',
       password: '123',
       favorites: [] }
*/

const MealViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-self: center;
  align-items: center;
  width: 100%;
`

const MealCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  background: #dfe6e9;

  @media (min-width: 1050px) {
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    width: 40%;
  }
`
const LineBreak = styled.div`
 display: block;
 width: 100%;
`

const SectionTitle = styled.h2`
font-size: 20px;
`
const MealActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  border: 2px solid #b2bec3;

  @media (min-width: 1050px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 60%;
  }
`
const ActionButton = styled.button`
padding: 10px;
align-self: center;
border-radius: 20px;
background: white;
/* background: #00b894; */
/* color: white; */
color: #636e72;
border: 1px solid #636e72;
font-weight: bold;
font-size: 1rem;
/* border: none; */

:hover {
  box-shadow: 3px 3px 3px #b2bec3;
}

:active {
  background: #55efc4;
}
`

const ActionSearchInput = styled.input`
font-size: 16px;
margin-right: 10px;
`

const SearchIcon = styled(FontAwesomeIcon)`
color: #00b894;
`

function MealView(props) {
  const [meal1, meal2, meal3, meal4] = props.recentMeals;
  return (
    <MealViewContainer>
      <SiteTitle />
      <SectionTitle>Meals & Recipes</SectionTitle>
      <MealActionContainer>
        <ActionButton>Add New</ActionButton>
        <ActionButton>Browse Your Meals</ActionButton>
        <ActionButton>Explore</ActionButton>
        <div>
          <ActionSearchInput type="search" placeholder="Search for meals" />
          <SearchIcon icon={faSearch} size="lg" />
        </div>
      </MealActionContainer>
      <SectionTitle>Most Recent Meals</SectionTitle>
      <MealCardsContainer>
        <MealCard meal={meal1} />
        <MealCard meal={meal2} />
        <LineBreak />
        <MealCard meal={meal3} />
        <MealCard meal={meal4} />
      </MealCardsContainer>
    </MealViewContainer>
  )
}

export default MealView;
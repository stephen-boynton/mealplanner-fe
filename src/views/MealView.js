import React, { useState } from 'react';
import styled from 'styled-components';
import MealCard from '../components/MealCard';
import NewMealModal from '../components/NewMealModal';
import * as Buttons from '../ui/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SiteTitle from '../components/SiteTitle';
import { useQuery } from '@apollo/react-hooks';
import { GET_RECENT_MEALS } from '../queries';

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

const ActionSearchInput = styled.input`
  font-size: 16px;
  margin-right: 10px;
`

const SearchIcon = styled(FontAwesomeIcon)`
  color: #00b894;
`

const noMeal = <div>Add and use more meals to see them!</div>

function MealView(props) {
  const { data = {}, error } = useQuery(GET_RECENT_MEALS);
  console.log(data);
  const [meal1, meal2, meal3, meal4] = data.getFourRecentMeals ? data.getFourRecentMeals : [];
  const [isNewModalOpen, setNewModalOpen] = useState(false);

  const displayNewModal = () => {
    setNewModalOpen(!isNewModalOpen);
  }

  return (
    <MealViewContainer>
      <SiteTitle />
      <SectionTitle>Meals & Recipes</SectionTitle>
      {isNewModalOpen && <NewMealModal setNewModalOpen={setNewModalOpen} />}
      <MealActionContainer>
        <Buttons.secondary onClick={displayNewModal}>Add New</Buttons.secondary>
        <Buttons.secondary>Browse Your Meals</Buttons.secondary>
        <Buttons.secondary>Explore</Buttons.secondary>
        <div>
          <ActionSearchInput type="search" placeholder="Search for meals" />
          <SearchIcon icon={faSearch} size="lg" />
        </div>
      </MealActionContainer>
      <SectionTitle>Most Recent Meals</SectionTitle>
      <MealCardsContainer>
        {meal1 ? <MealCard meal={meal1} /> : noMeal}
        {meal2 ? <MealCard meal={meal2} /> : noMeal}
        <LineBreak />
        {meal3 ? <MealCard meal={meal3} /> : noMeal}
        {meal4 ? <MealCard meal={meal4} /> : noMeal}
      </MealCardsContainer>
    </MealViewContainer>
  )
}

export default MealView;
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const MealCardContainer = styled.div`
display: flex;
flex-direction: column;
flex-basis: 48%;
box-shadow: 1px 1px 1px lightgray;
margin-bottom: 20px;
background: white;
`

const MealName = styled.h2`
font-size: 18px;
margin: 0px;
flex-basis: 100%;
background: #00b894;
color: white;
padding: 20px;
text-align: center;
`

const Description = styled.p`
  padding-left: 10px;
  font-style: italic;
  font-size: 16px;
`

const LastUsed = styled.p`
  padding-left: 10px;
  font-size: 12px;
`

const ActionButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 20px 0px;
`

const FavIcon = styled(FontAwesomeIcon)`
color: ${props => props.isFav ? "#d63031" : "#636e72"};
border-radius: 50% 50%;
padding: 10px;

:hover {
  background: #b2bec3;
  cursor: pointer;
}
`

const AddIcon = styled(FontAwesomeIcon)`
color: #fdcb6e;
border-radius: 50% 50%;
padding: 10px;

:hover {
  background: #b2bec3;
  cursor: pointer;
}
`

export default function MealCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <MealCardContainer>
      <MealName>{props.meal.name}</MealName>
      <Description>{props.meal.description}</Description>
      <LastUsed>Last Used: {props.meal.last_used}</LastUsed>
      <ActionButtonContainer>
        <FavIcon onClick={handleFavorite} isFav={isFavorite} icon={faHeart} />
        <AddIcon icon={faPlus} />
      </ActionButtonContainer>
    </MealCardContainer>
  )
}
import React, { useState } from 'react';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import * as Icons from '../ui/Icons';
import * as Card from '../ui/Card'


export default function MealCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <Card.container>
      <Card.name>{props.meal.name}</Card.name>
      <Card.description>{props.meal.description}</Card.description>
      <Card.smallText>Last Used: {props.meal.last_date_used}</Card.smallText>
      <Card.buttonContainer>
        <Icons.favIcon onClick={handleFavorite} isfav={isFavorite} icon={faHeart} />
        <Icons.addIcon icon={faPlus} />
      </Card.buttonContainer>
    </Card.container>
  )
}
import React from 'react';
import styled from 'styled-components';

const NavCardContainer = styled.div`
display: flex;
flex-direction: column;
`

const NavCardImage = styled.div`
  max-width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => "url(" + props.meal.photo + ")"};
  background-position: center;
`

const NavCardSectionText = styled.h2`
  background: white;
  flex-basis: 100%;
  text-align: center;
  padding: 5px 0px 5px 0px;
`

const NavHr = styled.hr`
  margin: 5px 0px 5px 0px;
  width: 200px;
`

export default function NavCard(props) {
  return (
    <NavCardContainer>
      <NavCardImage meal={props.meal} alt="Delicious food">
        <NavCardSectionText>{props.section}</NavCardSectionText>
      </NavCardImage>
      <NavHr align="center" />
      <div>
        <h2>{props.meal.name}</h2>
        <li>
          {props.meal.ingredients.map(i => <ol>{i}</ol>)}
        </li>
      </div>
    </NavCardContainer>
  )
}
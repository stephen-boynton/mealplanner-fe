import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavCardContainer = styled.div`
display: flex;
flex-direction: column;
box-shadow: 1px 1px 1px lightgray;
max-width: 300px;
`

const NavCardImage = styled.div`
  max-width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => "url(" + props.image + ")"};
  background-position: center;
`

const NavCardSectionText = styled.h2`
  background: white;
  flex-basis: 100%;
  text-align: center;
  padding: 5px 0px 5px 0px;
`

export default function NavCard(props) {
  return (
    <Link to={props.path} >
      <NavCardContainer>
        <NavCardImage image={props.image}>
          <NavCardSectionText>{props.section}</NavCardSectionText>
        </NavCardImage>
      </NavCardContainer>
    </Link>
  )
}
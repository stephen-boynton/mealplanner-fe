import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavCardContainer = styled.div`
  padding: 50px 25px;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 1px lightgray;
  width: 300px;
  background-color: ${props => props.bgColor};
  text-decoration: none;
  :hover {
    background: #dfe6e9;
  }
`

const NavCardSectionText = styled.h2`
  text-decoration: inherit;
  color: inherit;
`

export default function NavCard(props) {
  return (
    <React.Fragment>
      <NavLink to={props.path} style={{ textDecoration: 'none', color: 'white' }} >
        <NavCardContainer bgColor={props.bgColor}>
          <FontAwesomeIcon icon={props.icon} size="3x" style={{ fontWeight: 'normal', textDecoration: 'inherit', color: 'inhereit', }} />
          <NavCardSectionText>{props.section}</NavCardSectionText>
        </NavCardContainer>
      </NavLink>
    </React.Fragment>
  )
}
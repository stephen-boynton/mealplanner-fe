import React from 'react';
import styled from 'styled-components';

const StyledNavButton = styled.button`
  background: ${props => props.selected ? "#74b9ff" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2d3436;
  border-radius: 3px;
  color: #2d3436;
  :hover {
    background: #0984e3;
  }
`


export default function NavButton(props) {
  return (
    <StyledNavButton selected={props.selected}>
      {props.children}
    </StyledNavButton>
  )
}



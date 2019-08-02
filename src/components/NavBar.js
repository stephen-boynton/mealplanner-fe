import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dfe6e9;
`


export default function NavBar(props) {
  return (
    <StyledNavBar selected={props.selected}>
      {props.children}
    </StyledNavBar>
  )
}



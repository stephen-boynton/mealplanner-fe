import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';


export const favIcon = styled(FontAwesomeIcon)`
  color: ${props => props.isfav ? "#d63031" : "#636e72"};
  border-radius: 50% 50%;
  padding: 10px;

  :hover {
    background: #b2bec3;
    cursor: pointer;
  }
`

export const addIcon = styled(FontAwesomeIcon)`
  color: #fdcb6e;
  border-radius: 50% 50%;
  padding: 10px;

  :hover {
    background: #b2bec3;
    cursor: pointer;
  }
`
import styled from 'styled-components';

export const submit = styled.input`
  width: 100px;
  padding: 10px;
  align-self: center;
  border-radius: 20px;
  background: #00b894;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;

  :hover {
    box-shadow: 3px 3px 3px #b2bec3;
  }

  :active {
    background: #55efc4;
  }
`

export const secondary = styled.button`
  padding: 10px;
  align-self: center;
  border-radius: 20px;
  background: white;
  color: #636e72;
  border: 1px solid #636e72;
  font-weight: bold;
  font-size: 1rem;

  :hover {
    box-shadow: 3px 3px 3px #b2bec3;
  }

  :active {
    background: #55efc4;
  }
`
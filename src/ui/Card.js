import styled from 'styled-components';


export const container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 48%;
  box-shadow: 1px 1px 1px lightgray;
  margin-bottom: 20px;
  background: white;
`

export const name = styled.h2`
  font-size: 18px;
  margin: 0px;
  flex-basis: 100%;
  background: #00b894;
  color: white;
  padding: 20px;
  text-align: center;
`

export const description = styled.p`
  padding-left: 10px;
  font-style: italic;
  font-size: 16px;
`

export const smallText = styled.p`
  padding-left: 10px;
  font-size: 12px;
`

export const buttonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;
  flex-grow: 1;
`
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const NewMealModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: white;
    padding: 20px;
    box-shadow: 12px 12px 12px lightgray;
    overflow: scroll;
`

const MealForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const FormLabels = styled.label`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const IngredientContainer = styled.div`
    display: flex;
    align-items: center;
`

const Icons = styled(FontAwesomeIcon)`
    margin: 10px;
`

const Submit = styled.input`
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

const CancelButton = styled.button`
padding: 10px;
align-self: center;
border-radius: 20px;
background: white;
/* background: #00b894; */
/* color: white; */
color: #636e72;
border: 1px solid #636e72;
font-weight: bold;
font-size: 1rem;
/* border: none; */

:hover {
  box-shadow: 3px 3px 3px #b2bec3;
}

:active {
  background: #55efc4;
}
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default function NewMealModal(props) {
    const [ingredients, setIngredients] = useState(['', '', '']);

    const updateSelectedIngredient = i => e => {
        const tempIngredients = [...ingredients];
        tempIngredients[i] = e.target.value;
        setIngredients(tempIngredients);
    }

    const deleteCurrentIngredient = i => e => {
        const tempIngredients = [...ingredients];
        setIngredients(tempIngredients.filter((x, i2) => i2 === i ? false : true));
    }

    const addIngredientAfter = i => () => {
        const tempIngredients = [...ingredients];
        tempIngredients.splice(i + 1, 0, '')
        setIngredients(tempIngredients);
    }

    return (
        <NewMealModalContainer>
            <MealForm>
                <h2>Add New Meal</h2>
                <FormLabels>
                    Meal Name
                    <input />
                </FormLabels>
                <FormLabels>
                    Description
                    <input />
                </FormLabels>
                <FormLabels>
                    Ingredients
                    {ingredients.map((ing, ind) =>
                        <IngredientContainer key={ind}>
                            <input onChange={updateSelectedIngredient(ind)} type="text" value={ing} />
                            <Icons onClick={deleteCurrentIngredient(ind)} icon={faMinus} />
                            <Icons onClick={addIngredientAfter(ind)} icon={faPlus} />
                        </IngredientContainer>
                    )}
                </FormLabels>
                <FormLabels>
                    Directions
                    <textarea />
                </FormLabels>
                <ButtonContainer>
                    <Submit type="submit" value="Save" />
                    <CancelButton>Cancel</CancelButton>
                </ButtonContainer>
            </MealForm>
        </NewMealModalContainer>
    )
}
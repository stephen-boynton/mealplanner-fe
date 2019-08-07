import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const NewMealModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 75vh;
    width: 40vw;
    background: white;
`

const MealForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`

export default function NewMealModal(props) {
    const [ingredients, setIngredients] = useState(['']);

    const updateSelectedIngredient = (e) {
        
    }

    return (
        <NewMealModalContainer>
            <MealForm>
                <h2>Add New Meal</h2>
                <label>
                    Meal Name
                    <input />
                </label>
                <label>
                    Ingredients
                    {ingredients.map((ing, ind) => <input key={ind} onChange={updateSelectedIngredient} type="text" val={ing} />)}
                </label>
            </MealForm>
        </NewMealModalContainer>
    )
}
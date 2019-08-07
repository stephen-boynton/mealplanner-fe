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

export default function NewMealModal(props) {
    return (
        <NewMealModalContainer>
            <form>
                <h2>Add New Meal</h2>
                <label>
                    Meal Name
                    <input />
                </label>
                <label>
                    Ingredients
                    <input />
                </label>
            </form>
        </NewMealModalContainer>
    )
}
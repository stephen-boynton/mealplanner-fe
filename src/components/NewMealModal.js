import React, { useState } from 'react';
import styled from 'styled-components';
import * as Buttons from '../ui/Buttons';
import * as Form from '../ui/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/react-hooks'
import { ADD_MEAL } from '../mutations';


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



const IngredientContainer = styled.div`
    display: flex;
    align-items: center;
`

const Icons = styled(FontAwesomeIcon)`
    margin: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default function NewMealModal(props) {
    const [ingredients, setIngredients] = useState(['', '', '']);
    const [mealName, setMealName] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');

    const [addMeal, { data, error, loading }] = useMutation(ADD_MEAL);

    const handleOnChange = updateFx => e => {
        updateFx(e.target.value);
    };

    const handleNameUpdate = handleOnChange(setMealName);
    const handleDescriptionupdate = handleOnChange(setDescription);
    const handleDirectionsUpdate = handleOnChange(setDirections);

    const onSubmit = async e => {
        e.preventDefault();
        const newMealPayload = {
            meal: {
                name: mealName,
                description,
                directions,
                ingredients
            }
        };

        addMeal({ variables: { input: newMealPayload } });
        props.setNewModalOpen(false);
    }

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

    if (data) {
        console.log(data);
    } else if (error) {
        console.log('this is the error!', error);
    } else if (loading) {
        console.log('loading');
    }

    return (
        <NewMealModalContainer>
            <Form.container onSubmit={onSubmit}>
                <h2>Add New Meal</h2>
                <Form.label>
                    Meal Name*
                    <Form.input onChange={handleNameUpdate} />
                </Form.label>
                <Form.label>
                    Description
                    <Form.input onChange={handleDescriptionupdate} />
                </Form.label>
                <Form.label>
                    Ingredients*
                    {ingredients.map((ing, ind) =>
                        <IngredientContainer key={ind}>
                            <Form.input onChange={updateSelectedIngredient(ind)} type="text" value={ing} />
                            <Icons onClick={deleteCurrentIngredient(ind)} icon={faMinus} />
                            <Icons onClick={addIngredientAfter(ind)} icon={faPlus} />
                        </IngredientContainer>
                    )}
                </Form.label>
                <Form.label>
                    Directions
                    <Form.textarea onChange={handleDirectionsUpdate} />
                </Form.label>
                <ButtonContainer>
                    <Buttons.submit type="submit" value="Save" />
                    <Buttons.secondary>Cancel</Buttons.secondary>
                </ButtonContainer>
            </Form.container>
        </NewMealModalContainer>
    )
}
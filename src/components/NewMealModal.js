import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'

const ADD_MEAL = gql`
mutation addMeal($input: AddMealInput){
    addMeal(input: $input){
      _id,
      name,
      description,
      ingredients,
      directions
    }
  }
`
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
    const [mealName, setMealName] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');

    const [addMeal, { data, error, loading }] = useMutation(ADD_MEAL);

    const handleOnChange = updateFx => e => {
        updateFx(e.target.value0);
    };

    const handleNameUpdate = handleOnChange(setMealName);
    const handleDescriptionupdate = handleOnChange(setDescription);
    const handleDirectionsUpdate = handleOnChange(setDirections);

    const onSubmit = async e => {
        e.preventDefault();
        console.log('i made it here')
        await addMeal({ variables: { input: { meal: { name: mealName, description, directions, ingredients } } } })
        console.log('i made it here, too')

        // props.setModalIsOpen(false);
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
        console.error(error);
    } else if (loading) {
        console.log('loading');
    }

    return (
        <NewMealModalContainer>
            <MealForm>
                <h2>Add New Meal</h2>
                <FormLabels>
                    Meal Name
                    <input onChange={handleNameUpdate} />
                </FormLabels>
                <FormLabels>
                    Description
                    <input onChange={handleDescriptionupdate} />
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
                    <textarea onChange={handleDirectionsUpdate} />
                </FormLabels>
                <ButtonContainer>
                    <Submit onSubmit={onSubmit} type="submit" value="Save" />
                    <CancelButton>Cancel</CancelButton>
                </ButtonContainer>
            </MealForm>
        </NewMealModalContainer>
    )
}
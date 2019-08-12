import { gql } from 'apollo-boost';

export const LOG_IN = gql`
mutation login($input: LoginInput){
    login(input: $input){
      jwt
    }
  }
`

export const ADD_MEAL = gql`
mutation addMeal($input: AddMealInput){
    addMeal(input: $input){
    #   _id,
      name,
    #   description,
    #   ingredients,
    #   directions
    }
  }
`
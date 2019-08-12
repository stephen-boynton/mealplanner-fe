import { gql } from 'apollo-boost';

/*
{ _id: '149b9384-f239-4ef4-a093-e0d76b3afd57',
       name: 'stephen',
       email: 'test@test.com',
       password: '123',
       favorites: [] }
*/

export const GET_RECENT_MEALS = gql`
  query GetFourRecentMeals {
    getFourRecentMeals{
      _id
      name
      description
      last_date_used
    }
  }
`
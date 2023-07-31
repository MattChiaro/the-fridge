import {gql} from '@apollo/client';

export const QUERY_USERS_LOGIN = gql`
query Users {
    users {
      name
      password
      email
      _id
    }
  }`

export const QUERY_USERS_PROFILE = gql`
query Users {
    users {
      name
      email    
      password
      _id
      bulletins {
        title
        priority
        createdAt
        body
      }
    }
  }`

export const QUERY_FRIDGES = gql`
query Fridges {
    fridges {
      user {
        name
      }
      bulletins {
        user
        title
        priority
        createdAt
        body
      }
    }
  }`


import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
      }
      token
    }
  }`

export const ADD_USER = gql`
mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      user {
        name
        email
        password
        _id
      }
      token
    }
  }`

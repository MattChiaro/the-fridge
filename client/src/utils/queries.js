import {gql} from '@apollo/client';
import Auth from './auth';

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

export const QUERY_USERS_BY_ID = gql`
query User($id: ID!) {
  user(_id: $id) {
    name
    email
    fridgeId
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

export const QUERY_BULLETINS = gql`
query Bulletins {
    bulletins {
      title
      priority
      createdAt
      body
    }
  }`

export const QUERY_EVENTS = gql`
query Events {
    events {
      start
      end
      title
      update
      allday
      time
    }
  }`

export const QUERY_FRIDGE = gql`
query Fridge($id: ID!) {
    fridge(_id: $id) {
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





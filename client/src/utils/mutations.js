import { gql } from '@apollo/client';

// user mutations
export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
      }
      token
    }
  }`

export const ADD_USER = gql`
mutation ADD_USER($name: String!, $email: String!, $password: String!, $fridgeId: String!) {
  addUser(name: $name, email: $email, password: $password, fridgeId: $fridgeId) {
    user {
      name
      fridgeId
      email
      _id
    }
  }
}`;

// bulletin mutations
export const ADD_BULLETIN = gql`
mutation AddBulletin($title: String!, $body: String!, $user: String!, $priority: Boolean!) {
    addBulletin(title: $title, body: $body, user: $user, priority: $priority) {
        _id
        title
        body
        user
        createdAt
        priority
    }
}`;

export const REMOVE_BULLETIN = gql`
mutation RemoveBulletin($_id: ID!) {
    removeBulletin(_id: $_id) {
        _id
    }
}`;

// calendar mutations
export const ADD_EVENT = gql`
mutation AddEvent($start: String!, $end: String!, $title: String!, $update: Boolean!, $allday: Boolean!, $time: String!) {
    addEvent(start: $start, end: $end, title: $title, update: $update, allday: $allday, time: $time) {
        _id
        start
        end
        title
        update
        allday
        time
    }
}`;

export const REMOVE_EVENT = gql`
mutation RemoveEvent($_id: ID!) {
    removeEvent(_id: $_id) {
        _id
    }
}`;


// fridge mutations
export const ADD_FRIDGE = gql`
mutation AddFridge($user: ID!) {
    addFridge(user: $user) {
        _id
        user {
            _id
            name
            email
        }
        bulletins {
            _id
            title
            body
            user
            createdAt
            priority
        }
        calendar {
            _id
            start
            end
            title
            update
            allday
            time
        }
        fridgeId
    }
}`;

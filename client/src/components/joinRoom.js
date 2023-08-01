import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const JOIN_ROOM = gql`
mutation JoinRoom($joinCode: String!) {
  joinRoom(joinCode: $joinCode) {
    _id
    joinCode
    users {
      _id
      name
    }
  }
}`;

function JoinRoomForm() {
  const [joinCode, setJoinCode] = useState('');
  const [joinRoom, { data, loading, error }] = useMutation(JOIN_ROOM);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await joinRoom({ variables: { joinCode } });
    } catch (error) {
      console.error(error);
    }
  };

  // render form...
}

import React from "react";

import { getAuth } from "firebase/auth";
import { push, ref, update } from "firebase/database";
import styled from "styled-components";

import { database } from "../../../config/firebaseApp";

const AddDummyButton = styled.button`
  padding: 16px;
  background-color: black;
  color: white;
  font-weight: bold;
  align-self: flex-start;
  border: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 24px;
`;

const AddDummy = () => {
  const onAdd = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    const sharesRef = ref(database, `shares/${user.uid}`);
    const newKey = push(sharesRef).key;
    update(sharesRef, {
      [newKey]: {
        images: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/300x150",
        ],
        isRead: false,
        notes: "New dummy share",
      },
    });
  };

  return <AddDummyButton onClick={onAdd}>Add fake share</AddDummyButton>;
};

export default AddDummy;

import React, { useEffect, useState } from "react";
import { Container, Heading } from "./UnreadList.style";
import { getAuth } from "firebase/auth";
import {
  equalTo,
  limitToFirst,
  limitToLast,
  onValue,
  orderByChild,
  orderByKey,
  query,
  ref,
} from "firebase/database";
import { database } from "../../../config/firebaseApp";
import Share from "../Share";

interface Share {
  images: string[];
  isRead: boolean;
  notes: string;
}

const UnreadList = () => {
  const [unreadShares, setUnreadShares] = useState<Share[]>([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    const sharesRef = ref(database, `shares/${user.uid}`);
    const unreadSharesQuery = query(sharesRef, orderByKey(), limitToLast(5));

    return onValue(unreadSharesQuery, (snapshot) => {
      let unreadShares: Share[] = [];
      snapshot.forEach((childSnap) => {
        unreadShares.push(childSnap.val() as Share);
      });
      setUnreadShares(unreadShares.reverse());
    });
  }, []);

  return (
    <Container>
      <Heading>Latest shares</Heading>
      {unreadShares.map((share, index) => (
        <Share shareDetails={share} key={index} />
      ))}
    </Container>
  );
};

export default UnreadList;

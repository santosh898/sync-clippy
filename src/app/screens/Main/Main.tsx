import React from "react";
import AddDummy from "../../components/Main/AddDummy/AddDummy";
import UnreadList from "../../components/Main/UnreadList";
import { Container } from "./Main.style";

const Main = () => {
  return (
    <Container>
      <UnreadList />
      <AddDummy />
    </Container>
  );
};

export default Main;

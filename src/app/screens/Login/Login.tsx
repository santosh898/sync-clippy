import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Container, ErrorText, Field, Form, Label } from "./Login.styles";

const Login = () => {
  const [error, setError] = useState("");

  const onLogin = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      createUserWithEmailAndPassword(auth, email, password).catch(() => {
        setError("Cannot login");
      });
    });
  };

  return (
    <Container>
      <Form onSubmit={onLogin}>
        <Field>
          <Label>Email</Label>
          <input type="email" name="email" placeholder="email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <input type="password" name="password" placeholder="password" />
        </Field>
        {error && <ErrorText>{error}</ErrorText>}
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;

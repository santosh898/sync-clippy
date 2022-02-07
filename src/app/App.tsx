import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import Main from "./screens/Main";
import Login from "./screens/Login";
import "./config/firebaseApp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoadingAuth(false);
    });
  }, []);

  if (loadingAuth) return <h3>Trying to login</h3>;

  if (loggedIn) return <Main />;
  return <Login />;
};

export default App;

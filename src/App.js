import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import UserContext from "./Context/UserContext";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import UserInfo from "./components/UserProfile";
import "./App.css";

function App() {
  const themeHook = useState("light");
  const user = useState({});
  return (
    <ThemeContext.Provider value={themeHook}>
      <UserContext.Provider value={user}>
        <Header />
        <SignUp />
        <UserInfo />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import UserContext from "../Context/UserContext";
import AppTheme from "../Colors";
import { initialState } from "./SignUp";

const UserInfo = () => {
  const currentTheme = AppTheme[useContext(ThemeContext)[0]];
  const [user, setUser] = useContext(UserContext);

  if (user.userName) {
    return (
      <div
        style={{
          padding: "1rem",
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`
        }}
      >
        <h1>User Info</h1>

        <p>UserName: {user.userName}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <button type="submit" onClick={() => setUser(initialState)}>
          Log Out
        </button>
      </div>
    );
  }
  return null;
};

export default UserInfo;

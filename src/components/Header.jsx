import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import AppTheme from "../Colors";

const Header = () => {
  const currentTheme = AppTheme[useContext(ThemeContext)[0]];

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <h1>Context API</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;

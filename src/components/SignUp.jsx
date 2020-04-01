import React, { useContext, useReducer } from "react";
import ThemeContext from "../Context/ThemeContext";
import UserContext from "../Context/UserContext";
import AppTheme from "../Colors";

export const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  email: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "userName":
      return { ...state, userName: action.value };
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    default:
      throw new Error();
  }
}

const SignUp = () => {
  const currentTheme = AppTheme[useContext(ThemeContext)[0]];
  const setUser = useContext(UserContext)[1];
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    e.preventDefault();
    setUser(state);
    dispatch({ type: "reset" });
  };

  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <h1>Sign Up</h1>
      <form
        style={{
          width: "200px"
        }}
        onSubmit={handleChange}
      >
        <div>
          <label htmlFor="userNameInput">UserName</label>
          <input
            id="userNameInput"
            value={state.userName}
            onChange={e =>
              dispatch({ value: e.target.value, type: "userName" })
            }
            type="text"
          ></input>
          <label htmlFor="firstNameInput">First Name</label>
          <input
            id="firstNameInput"
            value={state.firstName}
            type="text"
            onChange={e =>
              dispatch({ value: e.target.value, type: "firstName" })
            }
          ></input>
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            value={state.lastName}
            id="lastNameInput"
            type="text"
            onChange={e =>
              dispatch({ value: e.target.value, type: "lastName" })
            }
          ></input>
          <label htmlFor="emailInput">Email</label>
          <input
            value={state.email}
            id="emailInput"
            type="text"
            onChange={e => dispatch({ value: e.target.value, type: "email" })}
          ></input>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </main>
  );
};

export default SignUp;

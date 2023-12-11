import PasswordValidatorComponent from "./components/PasswordValidator/PasswordValidatorComponent";
import React from "react";

function App() {
  const passwordReqs = ['specialCharacters', 'digit', 'uppercase'];
  return (
    <>
      <PasswordValidatorComponent options={passwordReqs}/>
    </>
  );
}

export default App;

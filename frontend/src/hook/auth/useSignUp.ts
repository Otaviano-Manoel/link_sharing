import React from "react";
import UseEmail from "./useEmail";

const UseSignUp = () => {
  const email = UseEmail();

  return { email };
};

export default UseSignUp;

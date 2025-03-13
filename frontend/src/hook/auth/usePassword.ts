import { StateValid } from "@/enum/stateValid";
import React, { useState } from "react";

const UsePassword = () => {
  const [password, setPassword] = useState("");
  const [stateValid, setStateValid] = useState<StateValid>(
    StateValid.NOT_CHANGED
  );

  const validPassword = (): boolean => password.length >= 8;

  const updateStateValid = () => {
    setStateValid(validPassword() ? StateValid.ACCEPT : StateValid.ERROR);
  };

  const valid = (): boolean =>
    stateValid === StateValid.NOT_CHANGED || stateValid === StateValid.ACCEPT;

  return { password, setPassword, valid, updateStateValid };
};

export default UsePassword;

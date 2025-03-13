"use client";
import { StateValid } from "@/enum/stateValid";
import { useState } from "react";

const UseEmail = () => {
  const [email, setEmail] = useState("");
  const [stateValid, setStateValid] = useState<StateValid>(
    StateValid.NOT_CHANGED
  );

  const validEmail = (): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const updateStateValid = () => {
    setStateValid(validEmail() ? StateValid.ACCEPT : StateValid.ERROR);
  };

  const valid = (): boolean =>
    stateValid === StateValid.NOT_CHANGED || stateValid === StateValid.ACCEPT;

  return { email, setEmail, valid, updateStateValid };
};

export default UseEmail;

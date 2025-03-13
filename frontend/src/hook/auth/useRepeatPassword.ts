import { StateValid } from "@/enum/stateValid";
import { useState } from "react";

const UseRepeatPassword = () => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const [stateValid, setStateValid] = useState<StateValid>(
    StateValid.NOT_CHANGED
  );

  const validRepeatPassword = (password: string): boolean =>
    password === repeatPassword;

  const updateStateValid = (password: string) => {
    setStateValid(
      validRepeatPassword(password) ? StateValid.ACCEPT : StateValid.ERROR
    );
  };

  const valid = (): boolean =>
    stateValid === StateValid.NOT_CHANGED || stateValid === StateValid.ACCEPT;

  return { repeatPassword, setRepeatPassword, valid, updateStateValid };
};

export default UseRepeatPassword;

import { Dispatch } from "react";

export interface InputAuth {
  value: string;
  valid: () => boolean;
  setValue: Dispatch<React.SetStateAction<string>>;
  updateStateValid: () => void;
}

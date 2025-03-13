import Image from "next/image";
import React from "react";
import styles from "./formInput.module.scss";
import { InputAuth } from "@/interface/InputAuth";

interface RepeatPasswordProps extends Omit<InputAuth, "updateStateValid"> {
  password: string;
  updateStateValid: (password: string) => void;
}

const RepeatPassword = (props: RepeatPasswordProps) => {
  return (
    <div>
      <label htmlFor="repeatPassword" className={styles.label}>
        Confirm password
        <span className={styles.containerInput}>
          <Image
            className={styles.icon}
            src={"/icon-password.svg"}
            alt=""
            width={30}
            height={30}
          />
          <input
            className={styles.input}
            type="repeatPassword"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="At least 8 characters"
            onChange={(e) => props.setValue(e.currentTarget.value)}
            onBlur={() => props.updateStateValid(props.password)}
          />
          <p className={`${styles.alert} ${props.valid() && styles.hidden}`}>
            Please check again
          </p>
        </span>
      </label>
    </div>
  );
};

export default RepeatPassword;

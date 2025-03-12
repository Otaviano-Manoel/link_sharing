import React, { Dispatch } from "react";
import styles from "./formInput.module.scss";
import Image from "next/image";

interface InputAuth {
  value: string;
  valid: () => boolean;
  setValue: Dispatch<React.SetStateAction<string>>;
  updateStateValid: () => void;
}

const EmailInput = (props: InputAuth) => {
  return (
    <div>
      <label className={styles.label} htmlFor="email">
        Email address
        <span className={styles.containerInput}>
          <Image
            className={styles.icon}
            src={"/icon-email.svg"}
            alt=""
            width={30}
            height={30}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="e.g. alex@email.com"
            value={props.value}
            onChange={(e) => props.setValue(e.currentTarget.value)}
          />
          <p className={`${styles.alert} ${props.valid() && styles.hidden}`}>
            Can’t be empty
          </p>
        </span>
      </label>
    </div>
  );
};

export default EmailInput;

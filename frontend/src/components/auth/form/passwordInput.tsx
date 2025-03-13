import Image from "next/image";
import React from "react";
import styles from "./formInput.module.scss";
import { InputAuth } from "@/interface/InputAuth";

interface PasswordInputProps extends InputAuth {
  placeholder: string;
}

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <div>
      <label htmlFor="password" className={styles.label}>
        Password
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
            type="password"
            name="password"
            id="password"
            placeholder={props.placeholder}
            minLength={8}
            value={props.value}
            onChange={(e) => props.setValue(e.currentTarget.value)}
            onInvalid={() => props.updateStateValid()}
            onBlur={() => props.updateStateValid()}
          />
          <p className={`${styles.alert} ${props.valid() && styles.hidden}`}>
            Please check again
          </p>
        </span>
      </label>
    </div>
  );
};

export default PasswordInput;

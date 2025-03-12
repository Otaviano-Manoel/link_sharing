import Image from "next/image";
import React from "react";
import styles from "./formInput.module.scss";

interface PasswordInputProps {
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
          />
          <p className={`${styles.alert} ${styles.hidden}`}>
            Please check again
          </p>
        </span>
      </label>
    </div>
  );
};

export default PasswordInput;

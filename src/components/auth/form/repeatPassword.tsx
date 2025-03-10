import Image from "next/image";
import React from "react";
import styles from "./formInput.module.scss";

const RepeatPassword = () => {
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

export default RepeatPassword;

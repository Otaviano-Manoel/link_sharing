import React from "react";
import styles from "./input.module.scss";

const InputEmail = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="e.g. email@example.com"
        />
      </div>
    </div>
  );
};

export default InputEmail;

import React from "react";
import styles from "./input.module.scss";

const InputLastName = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="lastName">
        Last name*
      </label>
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="e.g. Appleseed"
        />
        <p className={`${styles.alert} ${true ? styles.hidden : ""}`}>
          Can’t be empty
        </p>
      </div>
    </div>
  );
};

export default InputLastName;

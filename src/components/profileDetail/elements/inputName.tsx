import React from "react";
import styles from "./input.module.scss";

const InputName = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="name">
        First name*
      </label>
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder="e.g. John"
        />
        <p className={`${styles.alert} ${true ? styles.hidden : ""}`}>
          Can’t be empty
        </p>
      </div>
    </div>
  );
};

export default InputName;

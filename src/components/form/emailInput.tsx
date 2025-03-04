import React from "react";
import styles from "./formInput.module.scss";
import Image from "next/image";

const EmailInput = () => {
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
          />
          <p className={`${styles.alert} ${styles.hidden}`}>Can’t be empty</p>
        </span>
      </label>
    </div>
  );
};

export default EmailInput;

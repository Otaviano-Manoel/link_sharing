import Image from "next/image";
import React, { useState } from "react";
import styles from "./inputLink.module.scss";

interface InputLinkProps {
  url: string;
}

const InputLink = (props: InputLinkProps) => {
  const [url, setUrl] = useState(props.url);
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="link">
        Link
      </label>
      <div className={styles.containerInput}>
        <Image
          className={styles.icon}
          src={"/icon-link.svg"}
          alt=""
          height={50}
          width={50}
        />
        <input
          className={styles.input}
          type="text"
          name="link"
          id="link"
          placeholder="e.g. https://www.github.com/johnappleseed"
          value={url}
          onChange={(e) => setUrl(e.currentTarget.value)}
        />

        <p className={`${styles.alert} ${false ? "" : styles.error}`}>
          {false ? "Can’t be empty" : "Please check the URL"}
        </p>
      </div>
    </div>
  );
};

export default InputLink;

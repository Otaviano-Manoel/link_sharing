import React from "react";
import styles from "./preview.module.scss";
import Image from "next/image";
import Item from "./item";

const Preview = () => {
  return (
    <main className={styles.main}>
      <Image
        className={styles.user}
        src={"/256x256.png"}
        alt=""
        height={100}
        width={100}
      />
      <h1 className={styles.name}>Ben Wright</h1>
      <p className={styles.email}>ben@example.com</p>

      <ul className={styles.list}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </main>
  );
};

export default Preview;

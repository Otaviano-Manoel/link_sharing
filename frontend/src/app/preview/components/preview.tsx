import React from "react";
import styles from "./preview.module.scss";
import Image from "next/image";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";

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
        <li className={styles.item} style={{ backgroundColor: "black" }}>
          <i
            className={styles.icon}
            style={{
              ...styledMaskImage("/icon-twitter.svg"),
            }}
          />

          <p className={styles.p}>GitHub</p>
          <button type="button" className={styles.arrow}>
            <Image
              className={styles.img}
              src={"/icon-arrow-right.svg"}
              alt=""
              height={100}
              width={100}
            />
          </button>
        </li>
      </ul>
    </main>
  );
};

export default Preview;

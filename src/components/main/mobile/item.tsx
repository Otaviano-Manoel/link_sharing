import Image from "next/image";
import React from "react";
import styles from "./item.module.scss";
import { styledImage } from "@/constant/dynamicStyleMaskImage";

const Item = () => {
  return (
    <li>
      <button style={{ backgroundColor: "black" }} className={styles.item}>
        <div
          style={styledImage("/icon-linkedin.svg")}
          className={styles.icon}
        />
        <p className={styles.p}>GitHub</p>
        <Image
          className={styles.arrow}
          src={"/icon-arrow-right.svg"}
          alt=""
          height={50}
          width={50}
        />
      </button>
    </li>
  );
};

export default Item;

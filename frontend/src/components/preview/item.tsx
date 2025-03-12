import { styledImage } from "@/constant/dynamicStyleMaskImage";
import React from "react";
import styles from "./item.module.scss";
import Image from "next/image";

const Item = () => {
  return (
    <div className={styles.item} style={{ backgroundColor: "black" }}>
      <i
        className={styles.icon}
        style={{
          ...styledImage("/icon-twitter.svg"),
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
    </div>
  );
};

export default Item;

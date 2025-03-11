import Image from "next/image";
import React from "react";
import DropDown from "./dropDown";
import InputLink from "./inputLink";
import styles from "./itemList.module.scss";

const ItemList = () => {
  return (
    <li className={styles.li}>
      <div className={styles.title}>
        <h3 className={styles.h3}>
          <Image
            className={styles.icon}
            src={"/icon-drag-and-drop.svg"}
            alt=""
            height={50}
            width={50}
          />
          Link #2
        </h3>
        <button className={styles.delete} type="button">
          Remove
        </button>
      </div>

      <DropDown />

      <InputLink />
    </li>
  );
};

export default ItemList;

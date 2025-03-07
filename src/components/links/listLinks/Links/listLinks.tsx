import React from "react";
import styles from "./listLinks.module.scss";
import Image from "next/image";
import DropDown from "./dropDown";

const ListLinks = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
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
              Link #1
            </h3>
            <button className={styles.delete} type="button">
              Remove
            </button>
          </div>

          <DropDown />
        </li>
      </ul>
    </div>
  );
};

export default ListLinks;

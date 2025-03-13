import Image from "next/image";
import React from "react";
import DropDown from "./dropDown";
import InputLink from "./inputLink";
import styles from "./item.module.scss";
import { Link } from "@/interface/link";

interface ItemProps {
  key: string;
  link: Link;
  count: number;
}

const Item = (props: ItemProps) => {
  return (
    <li key={props.key} className={styles.li}>
      <div className={styles.title}>
        <h3 className={styles.h3}>
          <Image
            className={styles.icon}
            src={"/icon-drag-and-drop.svg"}
            alt=""
            height={50}
            width={50}
          />
          Link #{props.count}
        </h3>
        <button className={styles.delete} type="button">
          Remove
        </button>
      </div>

      <DropDown itemIndex={props.link.type} />

      <InputLink url={props.link.url} />
    </li>
  );
};

export default Item;

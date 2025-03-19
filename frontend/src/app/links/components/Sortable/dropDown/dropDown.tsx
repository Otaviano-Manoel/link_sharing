"use client";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";
import { DropDownItems } from "@/constant/dropDownDataItem";
import Image from "next/image";

const DropDown = () => {
  const data = DropDownItems;
  const [selected, setSelected] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const item = (
    url: string,
    label: string,
    className: string,
    onClick?: () => void,
    key?: string
  ): React.ReactNode => {
    return (
      <div key={key} className={className} onClick={onClick}>
        <div
          style={{
            ...styledMaskImage(url),
          }}
          className={styles.icon}
        />
        <p className={styles.label}>{label}</p>
      </div>
    );
  };
  return (
    <button className={styles.dropDown}>
      <div
        className={`${styles.trigger} ${isOpen && styles.active}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item(selected.icon, selected.name, styles.item, () =>
          console.log("click")
        )}
        <Image
          className={styles.arrow}
          src={"/icon-chevron-down.svg"}
          alt=""
          height={20}
          width={20}
        />
      </div>
      <div className={`${styles.menu} ${!isOpen && styles.hidden}`}>
        {data.map((e) =>
          item(
            e.icon,
            e.name,
            `${styles.item} ${styles.inMenu} ${
              e.id === selected.id && styles.select
            }`,
            () => {
              setSelected(e);
              setIsOpen(false);
            },
            e.id
          )
        )}
      </div>
    </button>
  );
};

export default DropDown;

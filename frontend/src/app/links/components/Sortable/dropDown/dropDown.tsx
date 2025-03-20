"use client";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";
import { listIconSocial } from "@/constant/listIconSocial";
import Image from "next/image";
import { ILink } from "@/interface/link";

interface DropDownProps {
  link: ILink;
  onUpdateLink: (link: ILink) => void;
}

const DropDown = (props: DropDownProps) => {
  const data = listIconSocial;
  const [index, setIndex] = useState(props.link.type);
  const [isOpen, setIsOpen] = useState(false);
  const selected = () => data[index];

  const item = (
    url: string,
    label: string,
    className: string,
    onClick?: () => void,
    key?: number
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
        {item(selected().icon, selected().name, styles.item, () =>
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
        {data.map((e, i) =>
          item(
            e.icon,
            e.name,
            `${styles.item} ${styles.inMenu} ${i === index && styles.select}`,
            () => {
              props.onUpdateLink({ ...props.link, type: i });
              setIndex(i);
              setIsOpen(false);
            },
            i
          )
        )}
      </div>
    </button>
  );
};

export default DropDown;

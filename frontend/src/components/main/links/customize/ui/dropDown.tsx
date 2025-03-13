"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import { styledImage } from "@/constant/dynamicStyleMaskImage";
import { DropDownAllItems } from "@/constant/dropDownDataItem";
import { DropDownItem } from "@/interface/DropDownItem";

interface DropDownProps {
  itemIndex: number;
}

const DropDown = (props: DropDownProps) => {
  const allData = DropDownAllItems;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DropDownItem>(
    props.itemIndex === -1 ? allData[0] : allData[props.itemIndex]
  );

  return (
    <div className={styles.container}>
      <label className={styles.label} onClick={() => setIsOpen(!isOpen)}>
        Platform
      </label>
      <div>
        <button
          className={styles.containerSelect}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${styles.select} ${isOpen && styles.active}`}>
            <Image
              className={styles.img}
              src={options.icon}
              alt=""
              height={20}
              width={20}
            />
            <p className={styles.p}>{options.name}</p>

            <Image
              className={styles.arrow}
              src={"/icon-chevron-down.svg"}
              alt=""
              height={20}
              width={20}
            />
          </div>
        </button>

        <div className={`${styles.containerHidden} ${isOpen && styles.active}`}>
          {allData.map((element) => (
            <button
              key={element.key}
              className={`${styles.option} ${
                element.name === options.name ? styles.selected : ""
              }`}
              onClick={() => {
                setOptions(element);
                setIsOpen(false);
              }}
            >
              <div
                style={styledImage(element.icon)}
                className={`${styles.img}`}
              />

              <p className={styles.p}>{element.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

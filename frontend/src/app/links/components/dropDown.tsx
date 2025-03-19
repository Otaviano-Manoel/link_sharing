"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import { styledMaskImage } from "@/constant/dynamicStyleMaskImage";
import { DropDownItems } from "@/constant/dropDownDataItem";
import { DataSocialLink } from "@/interface/DropDownItem";
import { ILink } from "@/interface/link";

interface DropDownProps {
  link: ILink;
  index: number;
  handleChangeStateLinks: (index: number, link: ILink) => void;
}

const DropDown = (props: DropDownProps) => {
  const allData = DropDownItems;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DataSocialLink>(
    allData[props.link.type === -1 ? 0 : props.link.type]
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
                props.handleChangeStateLinks(props.index, {
                  ...props.link,
                  type: element.key,
                });
                setOptions(allData[element.key]);
                setIsOpen(false);
              }}
            >
              <div
                style={styledMaskImage(element.icon)}
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

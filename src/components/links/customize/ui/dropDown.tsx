"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";
import { styledImage } from "@/constant/dynamicStyleMaskImage";

const data = [
  { value: "apple", label: "Maçã", img: "/icon-github.svg" },
  { value: "banana", label: "Banana", img: "/icon-github.svg" },
  { value: "orange", label: "Laranja", img: "/icon-github.svg" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(data[0]);

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
              src={options.img}
              alt=""
              height={20}
              width={20}
            />
            <p className={styles.p}>{options.label}</p>

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
          {data.map((element) => (
            <button
              key={element.label}
              className={`${styles.option} ${
                element.label === options.label ? styles.selected : ""
              }`}
              onClick={() => {
                setOptions(element);
                setIsOpen(false);
              }}
            >
              <div
                style={styledImage(element.img)}
                className={`${styles.img}`}
              />

              <p className={styles.p}>{element.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

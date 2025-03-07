"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./dropDown.module.scss";

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
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <div className={`${styles.containerOption} ${isOpen && styles.active}`}>
          <div className={`${styles.option} ${styles.selected}`}>
            <Image
              className={styles.img}
              src={options.img}
              alt=""
              height={20}
              width={20}
            />
            <p className={styles.p}>{options.label}</p>
          </div>

          <Image
            className={styles.arrow}
            src={"/icon-chevron-down.svg"}
            alt=""
            height={20}
            width={20}
          />
        </div>
      </button>

      {isOpen && (
        <div className={styles.containerHidden}>
          {data.map((element) => (
            <div key={element.label} className={styles.option}>
              <div className={styles.mask}>
                <div
                  style={
                    {
                      "--mask-img": `url(../../../../public${element.img})`,
                    } as React.CSSProperties
                  }
                  className={`${styles.img} hidden`}
                />
                <div className={styles.mask}></div>
              </div>

              <p className={styles.p}>{options.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;

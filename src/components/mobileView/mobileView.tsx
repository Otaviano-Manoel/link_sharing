import Image from "next/image";
import React from "react";
import styles from "./mobileView.module.scss";
import Item from "./item";

const MobileView = () => {
  return (
    <div className={styles.mobile}>
      <Image
        className={styles.img}
        src={"/illustration-phone-mockup.svg"}
        alt=""
        width={100}
        height={100}
      />
      {false && (
        <div className={styles.background}>
          <div className={styles.inf}>
            <div className={styles.circle}></div>
            <h3 className={styles.h3}>Ben Wright</h3>
            <p className={styles.p}>otavianomanoelvasconcelos@gmail.com</p>
            <ul className={styles.ul}>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ul>
          </div>
        </div>
      )}
      {/*
       */}
    </div>
  );
};

export default MobileView;

import React from "react";
import styles from "./mobile.module.scss";
import Item from "./item";

const Mobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        {true && (
          <div className={styles.inf}>
            <div className={styles.circle}></div>
            <h3 className={styles.h3}>Ben Wright</h3>
            <p className={styles.p}>otavianomanoelvasconcelos@gmail.com</p>
            <ul className={styles.ul}>
              <Item />
              <Item />
              <Item />
            </ul>
          </div>
        )}
        {/*
         */}
      </div>
    </div>
  );
};

export default Mobile;

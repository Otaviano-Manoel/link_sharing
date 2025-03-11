import React from "react";
import styles from "./main.module.scss";
import Mobile from "./mobile/mobile";
import Customize from "./customize/customize";

const Main = () => {
  return (
    <main className={styles.main}>
      <Mobile />
      <Customize />
    </main>
  );
};

export default Main;

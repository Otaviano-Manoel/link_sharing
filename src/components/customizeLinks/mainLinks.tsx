import React from "react";
import ListView from "./listLinks/listView";
import MobileView from "../mobileView/mobileView";
import styles from "./mainLinks.module.scss";

const MainLinks = () => {
  return (
    <main className={styles.main}>
      <MobileView />
      <ListView />
    </main>
  );
};

export default MainLinks;

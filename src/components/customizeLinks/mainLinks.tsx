import React from "react";
import MobileView from "./mobileView/mobileView";
import styles from "./mainLinks.module.scss";
import CustomizeLinks from "./edit/customizeLInks";

const MainLinks = () => {
  return (
    <main className={styles.main}>
      <MobileView />
      <CustomizeLinks />
    </main>
  );
};

export default MainLinks;

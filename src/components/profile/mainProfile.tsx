import React from "react";
import MobileView from "../customizeLinks/mobileView/mobileView";
import Profile from "./profile";
import styles from "./mainProfile.module.scss";

const MainProfile = () => {
  return (
    <main className={styles.main}>
      <MobileView />
      <Profile />
    </main>
  );
};

export default MainProfile;

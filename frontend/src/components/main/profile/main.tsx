import React from "react";
import Profile from "./profile";
import styles from "@/components/main/main.module.scss";
import Mobile from "../mobile/mobile";

const Main = () => {
  return (
    <main className={styles.main}>
      <Mobile />
      <Profile />
    </main>
  );
};

export default Main;

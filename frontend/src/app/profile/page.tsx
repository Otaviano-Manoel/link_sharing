"use client";
import React from "react";
import styles from "./page.module.scss";
import Nav from "@/components/nav/nav";
import MobileView from "@/components/mobileView/mobileView";
import Profile from "./components/profile";

const Page = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <MobileView />
        <Profile />
      </main>
    </div>
  );
};

export default Page;

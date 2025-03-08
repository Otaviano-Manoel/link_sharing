"use client";
import React from "react";
import styles from "./page.module.scss";
import Nav from "@/components/nav/nav";
import MainProfile from "@/components/profileDetail/mainProfile";

const Page = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <MainProfile />
    </div>
  );
};

export default Page;

"use client";
import React from "react";
import styles from "./page.module.scss";
import Nav from "@/components/main/nav/nav";
import Main from "@/components/main/links/main";

const Page = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <Main />
    </div>
  );
};

export default Page;

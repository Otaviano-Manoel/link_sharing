"use client";
import React from "react";
import styles from "./page.module.scss";
import Nav from "@/components/nav/nav";
import MainLinks from "@/components/links/mainLinks";

const Page = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <MainLinks />
    </div>
  );
};

export default Page;

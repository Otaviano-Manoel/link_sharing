import React from "react";
import styles from "./page.module.scss";
import MainPreview from "@/components/preview/mainPreview";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.page}>
      <MainPreview />
      <p className={styles.p}>
        <Image
          className={styles.icon}
          src={"/icon-link-copied-to-clipboard.svg"}
          alt=""
          height={50}
          width={50}
        />{" "}
        The link has been copied to your clipboard!
      </p>
    </div>
  );
};

export default Page;

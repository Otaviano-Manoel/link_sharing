import React from "react";
import Preview from "./preview";
import styles from "./mainPreview.module.scss";
import Link from "next/link";

const MainPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <nav className={styles.nav}>
        <Link className={styles.link} href={""}>
          Back to Editor
        </Link>
        <Link className={`${styles.link} ${styles.share}`} href={""}>
          Share Link
        </Link>
      </nav>
      <Preview />
    </div>
  );
};

export default MainPreview;

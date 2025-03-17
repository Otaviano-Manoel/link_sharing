import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import Preview from "./components/preview";

const Page = () => {
  return (
    <div className={styles.page}>
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

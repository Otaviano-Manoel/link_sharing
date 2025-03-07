"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import { useWindowSize } from "react-use";

const Nav = () => {
  const { width } = useWindowSize();
  const [logo, setLogo] = useState("/logo-devlinks-large.svg");

  useEffect(() => {
    if (width <= 475) setLogo("/logo-devlinks-small.svg");
    else setLogo("/logo-devlinks-large.svg");
  }, [width]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image
          className={styles.logo}
          src={logo}
          alt=""
          height={100}
          width={100}
          priority
        />
        <Link
          href={""}
          className={`${styles.link}  ${styles.links} ${styles.active}`}
        >
          <i className={styles.icon} />
          <p>Links</p>
        </Link>
        <Link href={""} className={`${styles.link} ${styles.detail}`}>
          <i className={`${styles.icon}`} />
          <p>Profile Details</p>
        </Link>
        <Link href={""} className={`${styles.link} ${styles.preview}`}>
          <Image
            className={`${styles.icon}`}
            src={"/icon-preview-header.svg"}
            alt=""
            width={20}
            height={20}
          />
          <p>Preview</p>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;

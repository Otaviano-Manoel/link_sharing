import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src={"/logo-devlinks-large.svg"}
          alt=""
          height={50}
          width={50}
        />
        <nav>
          <ul className={styles.nav}>
            <li className={`${styles.li} ${styles.active}`}>
              <span className={`${styles.icon} ${styles.links}`} />
              Links
            </li>
            <li className={styles.li}>
              <span className={`${styles.icon} ${styles.detail}`} />
              Profile Details
            </li>
          </ul>
        </nav>
        <button className={styles.button} type="button">
          Preview
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            className={styles.mobile}
            src={"/illustration-phone-mockup.svg"}
            alt=""
            height={50}
            width={50}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.customize}>
            <h2 className={styles.title}>Customize your links</h2>
            <p className={styles.p}>
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <div className={styles.containerLinks}>
              <button type="button" className={styles.addBtn}>
                + Add new link
              </button>
              <Image
                className={styles.illustrationEmpty}
                src={"/illustration-empty.svg"}
                alt=""
                height={50}
                width={50}
              />
              <h2 className={styles.title}>Let’s get you started</h2>
              <p className={styles.p}>
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.save} type="button">
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;

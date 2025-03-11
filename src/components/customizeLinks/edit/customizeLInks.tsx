import React from "react";
import ListEmpty from "./listEmpty";
import styles from "./CustomizeLinks.module.scss";
import ListLinks from "./listLinks";

const CustomizeLinks = () => {
  return (
    <div className={styles.customize}>
      <div className={styles.header}>
        <h1 className={styles.title}>Customize your links</h1>
        <p className={styles.p}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className={styles.list}>
        <button className={styles.add} type="button">
          + Add new link
        </button>
        {true ? <ListLinks /> : <ListEmpty />}
      </div>
      <div className={styles.footer}>
        <button className={`${styles.save} ${styles.disable}`} type="button">
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomizeLinks;

import React from "react";
import ListEmpty from "./listEmpty";
import styles from "./customize.module.scss";
import List from "./list";
import UseCustomizeLinks from "../hook/useCustomizeLinks";

const CustomizeLinks = () => {
  const customizeLinks = UseCustomizeLinks();

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
        <button
          className={styles.add}
          type="button"
          onClick={customizeLinks.addLink}
        >
          + Add new link
        </button>
        {customizeLinks.isListEmpty() ? <ListEmpty /> : <List />}
      </div>
      <div className={styles.footer}>
        <button
          className={`${styles.save} ${
            customizeLinks.isListEmpty() && styles.disable
          }`}
          type="button"
          disabled={customizeLinks.isListEmpty()}
          onClick={() => console.log("click")}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomizeLinks;

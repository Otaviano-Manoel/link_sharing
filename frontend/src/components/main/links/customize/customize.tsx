import React from "react";
import ListEmpty from "./listEmpty";
import styles from "./customize.module.scss";
import List from "./list";
import UseCustomize from "@/hook/main/links/customize/useCustomize";

const Customize = () => {
  const customize = UseCustomize();

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
          onClick={() => customize.addLink()}
        >
          + Add new link
        </button>
        {customize.isEmptyList() ? <ListEmpty /> : <List />}
      </div>
      <div className={styles.footer}>
        <button
          className={`${styles.save} ${
            customize.isEmptyList() && styles.disable
          }`}
          type="button"
          disabled={customize.isEmptyList()}
          onClick={() => console.log("click")}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Customize;

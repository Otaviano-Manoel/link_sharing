import React from "react";
import styles from "./listLinks.module.scss";
import ItemList from "./itemList";

const ListLinks = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <ItemList />
      </ul>
    </div>
  );
};

export default ListLinks;

import React from "react";
import styles from "./list.module.scss";
import Item from "./ui/item";

const List = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
};

export default List;

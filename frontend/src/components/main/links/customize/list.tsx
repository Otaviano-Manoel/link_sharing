import React from "react";
import styles from "./list.module.scss";
import Item from "./ui/item";
import UseListLinks from "@/hook/main/links/customize/useListLinks";

const List = () => {
  const list = UseListLinks();

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {list.getLinks().map((link, index) => (
          <Item key={link.url} link={link} count={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default List;

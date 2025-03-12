import React from "react";
import styles from "./listEmpty.module.scss";
import Image from "next/image";

const ListEmpty = () => {
  return (
    <div className={styles.empty}>
      <Image
        className={styles.img}
        src={"/illustration-empty.svg"}
        alt=""
        height={100}
        width={100}
        priority
      />
      <h2 className={styles.title}>Let’s get you started</h2>
      <p className={styles.p}>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default ListEmpty;

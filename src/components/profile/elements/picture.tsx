import React from "react";
import styles from "./picture.module.scss";
import Image from "next/image";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <input className={styles.find} type="file" name="find" id="find" />
      <p className={styles.profile}>Profile picture</p>
      <label className={styles.image} htmlFor="find">
        <>
          <div className={`${styles.background} ${false && styles.hidden}`} />
          <div className={`${styles.icon} ${true && styles.existsImage}`} />
          <p className={`${styles.upload} ${true && styles.existsImage}`}>
            + Upload Image
          </p>
        </>
        {true && (
          <Image
            className={styles.imageUser}
            src={"/256x256.png"}
            alt=""
            height={100}
            width={100}
          />
        )}
      </label>
      <p className={styles.info}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default Picture;

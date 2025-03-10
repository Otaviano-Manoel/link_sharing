import React from "react";
import Picture from "./elements/picture";
import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Profile Details</h1>
      <p className={styles.p}>
        Add your details to create a personal touch to your profile.
      </p>
      <form className={styles.form}>
        <Picture />
      </form>
    </div>
  );
};

export default Profile;

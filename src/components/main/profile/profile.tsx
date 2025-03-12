import React from "react";
import Picture from "./ui/picture";
import styles from "./profile.module.scss";
import InputName from "./ui/inputName";
import InputLastName from "./ui/inputLastName";
import InputEmail from "./ui/inputEmail";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Profile Details</h1>
      <p className={styles.p}>
        Add your details to create a personal touch to your profile.
      </p>
      <form className={styles.form}>
        <Picture />
        <div className={styles.inputs}>
          <InputName />
          <InputLastName />
          <InputEmail />
        </div>

        <div className={styles.footer}>
          <button className={styles.save} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

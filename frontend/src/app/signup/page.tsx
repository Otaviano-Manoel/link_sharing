import React from "react";
import styles from "./page.module.scss";
import SignUp from "@/components/auth/signup";

const SignUpPage = () => {
  return (
    <div className={styles.page}>
      <SignUp />
    </div>
  );
};

export default SignUpPage;

"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import UseLogin from "@/app/hook/useLogin";
import EmailInput from "@/components/auth/emailInput";
import PasswordInput from "@/components/auth/passwordInput";

export default function LoginPage() {
  const login = UseLogin();

  return (
    <div className={styles.page}>
      <Image
        className={styles.logo}
        src={"/logo-devlinks-large.svg"}
        alt={""}
        width={50}
        height={50}
      />

      <div className={styles.containerForm}>
        <header className={styles.header}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.p}>
            Add your details below to get back into the app
          </p>
        </header>

        <form onSubmit={login.handleSubmit} className={styles.form}>
          <EmailInput
            value={login.email.email}
            setValue={login.email.setEmail}
            valid={login.email.valid}
            updateStateValid={login.email.updateStateValid}
          />
          <PasswordInput
            placeholder="Enter your password"
            value={login.password.password}
            setValue={login.password.setPassword}
            valid={login.password.valid}
            updateStateValid={login.password.updateStateValid}
          />

          <button className={styles.submit} type="submit">
            Login
          </button>

          <p className={styles.p}>
            Don’t have an account?
            <Link className={styles.link} href={"/signup"}>
              {" "}
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import EmailInput from "@/components/form/emailInput";
import PasswordInput from "@/components/form/passwordInput";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const navigate = useRouter();
  const goHome = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate.push("/links");
  };

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

        <form action="" onSubmit={goHome} className={styles.form}>
          <EmailInput />
          <PasswordInput placeholder="Enter your password" />

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

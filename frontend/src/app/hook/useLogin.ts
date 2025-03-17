"use client";
import React, { useEffect, useState } from "react";
import UsePassword from "../../hook/auth/usePassword";
import UseEmail from "../../hook/auth/useEmail";
import { useRouter } from "next/navigation";
import { requestLogin } from "@/services/authService";
import { useUserContext } from "@/context/userContext";
import { defaultUser } from "@/interface/user";

const UseLogin = () => {
  const email = UseEmail();
  const password = UsePassword();
  const user = useUserContext();

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    user.setUser(defaultUser);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitted) {
      router.push("/links");
    }
  }, [submitted, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!allInputsValid()) return;

    await handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await requestLogin({
        email: email.email,
        password: password.password,
      });
      const success = response.data.success;
      if (success) {
        user.setUser({ email: email.email, logged: true });
        setSubmitted(success);
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      setSubmitted(false);
    }
  };

  const allInputsValid = () => {
    email.updateStateValid();
    password.updateStateValid();

    return email.valid() && password.valid();
  };

  return { email, password, handleSubmit };
};

export default UseLogin;

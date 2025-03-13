import React, { useEffect, useState } from "react";
import UsePassword from "./usePassword";
import UseEmail from "./useEmail";
import { useRouter } from "next/navigation";
import { requestLogin } from "@/services/authService";

const UseLogin = () => {
  const email = UseEmail();
  const password = UsePassword();

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

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
      console.log("Logged in user:", response.data);
      setSubmitted(response.data.success);
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

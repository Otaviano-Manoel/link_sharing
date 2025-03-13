import { requestSignUp } from "@/services/authService";
import UseEmail from "./useEmail";
import UsePassword from "./usePassword";
import UseRepeatPassword from "./useRepeatPassword";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UseSignUp = () => {
  const email = UseEmail();
  const password = UsePassword();
  const repeatPassword = UseRepeatPassword();

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (submitted) {
      router.push("/");
    }
  }, [submitted, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!allInputsValid()) return;

    await handleSignUp();
  };

  const handleSignUp = async () => {
    try {
      const response = await requestSignUp({
        email: email.email,
        password: password.password,
      });
      console.log("user created:", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error creating user:", error);
      setSubmitted(false);
    }
  };

  const allInputsValid = () => {
    email.updateStateValid();
    password.updateStateValid();
    repeatPassword.updateStateValid(password.password);

    return email.valid() && password.valid() && repeatPassword.valid();
  };

  return { email, password, repeatPassword, handleSubmit };
};

export default UseSignUp;

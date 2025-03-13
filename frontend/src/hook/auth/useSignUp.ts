import UseEmail from "./useEmail";
import UsePassword from "./usePassword";
import UseRepeatPassword from "./useRepeatPassword";

const UseSignUp = () => {
  const email = UseEmail();
  const password = UsePassword();
  const repeatPassword = UseRepeatPassword();

  return { email, password, repeatPassword };
};

export default UseSignUp;

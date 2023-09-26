import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { redirect } from "react-router-dom";

import SignupForm from "../components/Authentication/AuthForm";

const Signup = () => {
  return <SignupForm action="Signup" />;
};

export default Signup;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await createUserWithEmailAndPassword(
    auth,
    authData.email,
    authData.password
  );

  console.log(response.user);
  console.log(response.operationType);

  return redirect("/signup");
};

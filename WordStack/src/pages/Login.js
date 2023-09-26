import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import { redirect } from "react-router-dom";

import LoginForm from "../components/Authentication/AuthForm";

const Login = () => {
  return <LoginForm action="Login" />;
};

export default Login;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await signInWithEmailAndPassword(
    auth,
    authData.email,
    authData.password
  );

  // console.log(response.user);
  // console.log(response.operationType);

  return redirect("/");
};

import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  console.log(mode);
  if (mode !== "login" && mode !== "signup") {
    return json({ message: "Unsupported mode" }, { status: 422 });
  }
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData);
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  console.log("C-1");
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  console.log("C-2");

  if (!response.ok) {
    return json({ message: "Cound not authenticate user" }, { status: 500 });
  }
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}

import { Form, useNavigation, useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";

const LoginForm = ({ action }) => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  console.log(action);

  const isLoginAction = action === "Login";
  console.log(isLoginAction);

  const toggleAction = () => {
    if (isLoginAction) {
      console.log("Inside");
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <Form method="post" className={classes.form}>
      <h1>{action}</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue=""
          required
        ></input>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          defaultValue=""
          required
        ></input>
      </p>
      <div className={classes.actions}>
        <button onClick={toggleAction}>
          {isLoginAction ? "SignUp" : "Login"}
        </button>

        <button disabled={isSubmitting}>
          {isSubmitting ? action + "ing" : action}
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;

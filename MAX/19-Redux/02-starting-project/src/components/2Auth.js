import { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

import classes from "./Auth.module.css";

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(authActions.login());
  };

  const authForm = (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
  return <Fragment>{!isAuthenticated && authForm}</Fragment>;
};

export default Auth;

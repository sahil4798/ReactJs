import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

import classes from "./Header.module.css";

const Header = () => {
  const isAuthnticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthnticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={clickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

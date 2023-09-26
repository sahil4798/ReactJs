import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

import wordstackimage from "../../assets/wordstack.jpeg";

const Header = () => (
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <img
            src={wordstackimage}
            alt="wordstack"
            className={classes.wordstackimg}
          />
        </li>
        <li>
          <NavLink
            to="/"
            // className={(isActive) => classes.active}
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lists"
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
          >
            Lists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;

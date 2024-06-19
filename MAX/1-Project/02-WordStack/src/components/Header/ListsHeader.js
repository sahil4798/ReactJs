import { NavLink } from "react-router-dom";

import classes from "./ListsHeader.module.css";

const ListsHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
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
            {" "}
            <NavLink
              to="/lists/new"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              New List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ListsHeader;

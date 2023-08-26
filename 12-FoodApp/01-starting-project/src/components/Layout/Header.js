import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClickYourCart}>
          Your Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food Img" />
      </div>
    </Fragment>
  );
};

export default Header;

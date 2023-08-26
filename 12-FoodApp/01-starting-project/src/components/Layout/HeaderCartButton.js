import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBump, setIsBump] = useState(false);

  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBump(true);
    const timer = setTimeout(() => setIsBump(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClass = `${classes.button} ${isBump ? classes.bump : ""}`;
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

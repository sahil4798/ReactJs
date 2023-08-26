import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

import Checkout from "./Checkout.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const [error, setError] = useState(null);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const clickOrderHandler = () => {
    setIsCheckout(true);
  };
  const Buttons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={clickOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-http-5f152-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    setIsSubmitting(false);
    setDidSubmit(true);

    cartCtx.resetCart();
    // const data = await response.json();
    // console.log(data);
    // console.log(userData);
  };

  const getError = (error) => {
    setError(error);
  };

  const modalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onClose}
          onConfirm={submitHandler}
          sendError={getError}
        />
      )}
      {!isCheckout && Buttons}
    </React.Fragment>
  );

  const submittingContent = <p>Sending order data...</p>;
  const submittedContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  const errorMessage = (
    <React.Fragment>
      <p className={classes.invalid}>{error}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && !error && submittingContent}
      {!isSubmitting && didSubmit && !error && submittedContent}
      {error && errorMessage}
    </Modal>
  );
};

export default Cart;

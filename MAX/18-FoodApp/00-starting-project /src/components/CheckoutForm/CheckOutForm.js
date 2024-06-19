import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./CheckoutForm.module.css";

const CheckOutForm = () => {
  const ctx = useContext(CartContext);
  return (
    <Modal>
      <h1>This is CheckOut Form</h1>
      <p>{ctx.totalAmount}</p>
      <form>
        <div className={classes["control-group"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text"></input>
        </div>
        <div className={classes["form-actions"]}>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckOutForm;

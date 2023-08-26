import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  // console.log(items);

  // let items;
  // const fetchRequest = async () => {
  //   const response = await fetch(
  //     "https://react-http-5f152-default-rtdb.firebaseio.com/products.json"
  //   );

  //   items = [];
  //   const result = await response.json();
  //   // console.log(result);
  //   // console.log(result["-NbiHGGUgQ2zpbmGAmh1"]);
  //   for (const key in result) {
  //     // console.log(key);
  //     // console.log(result[key]);
  //     items.push({
  //       id: result[key].id,
  //       title: result[key].title,
  //       price: result[key].price,
  //     });
  //   }
  //   console.log(items);
  // };
  // fetchRequest();

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id + item.name}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

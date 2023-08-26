import { useReducer } from "react";
import CartContext from "./cart-context";

const defaulCartState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const indexOfItemIfPresent = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const prevItem = state.items[indexOfItemIfPresent];

    if (indexOfItemIfPresent !== -1) {
      // console.log(prevItem);
      const updatedItem = {
        ...prevItem,
        amount: prevItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[indexOfItemIfPresent] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const prevItem = state.items[index];
    const updatedTotalAmount = state.totalAmount - prevItem.price;
    let updatedItems;
    if (prevItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    } else {
      const updatedItem = {
        ...prevItem,
        amount: prevItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
  }
  return defaulCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    CartReducer,
    defaulCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemTOCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemTOCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

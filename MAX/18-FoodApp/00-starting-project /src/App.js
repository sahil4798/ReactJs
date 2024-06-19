import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import CheckoutForm from "./components/CheckoutForm/CheckOutForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showCheckoutFormHandler = () => {
    setShowCheckoutForm(true);
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          onClose={hideCartHandler}
          showCheckoutForm={showCheckoutFormHandler}
        />
      )}
      {showCheckoutForm && <CheckoutForm />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

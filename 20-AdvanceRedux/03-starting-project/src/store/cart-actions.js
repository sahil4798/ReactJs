import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const thunkfunc1 = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-http-5f152-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to fetch the Data");
      }
    };
    try {
      await fetchRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cartdata is failed!",
        })
      );
    }
  };
};

export const thunkfunc2 = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-http-5f152-default-rtdb.firebaseio.com/cart.json"
      );
      const result = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: result.items || [],
          totalQuantity: result.totalQuantity,
        })
      );
    };
    try {
      await fetchRequest();
    } catch (errror) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cartdata is failed!",
        })
      );
    }
  };
};

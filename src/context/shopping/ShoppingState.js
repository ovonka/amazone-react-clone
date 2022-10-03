import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const { basket, user } = state;

  // Selector > manipulate the state

  const addToBasket = async ({ item }) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0);

  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: item,
    });
  };

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };
  return (
    <ShoppingContext.Provider
      value={{
        basket: basket,
        user: user,
        addToBasket,
        getBasketTotal,
        removeFromBasket,
        setUser,
        emptyBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

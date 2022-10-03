import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import ProductDetails from "./components/Products/ProductDetails";
import Products from "./components/Products/Products";
import Authentication from "./components/Authentication/Authentication";
import NotFound from "./components/404 Error/NotFound";
import { useContext, useEffect } from "react";
import { auth } from "./components/Authentication/Firebase";
import ShoppingContext from "./context/shopping/shoppingContext";
import CheckoutProduct from "./components/Checkout/CheckoutProduct";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Checkout/Payments/Payment";
import Orders from "./components/Checkout/Payments/Orders/Orders";

const promise = loadStripe(
  "pk_test_51Lbmi7AFaspdMw48F6UNc2Fi6U2Rkg9MnOZhlnhA7bfJS1fWL2mcFmlXmZ60DdtDbKZ2Qugz4PKK4unXzquX681900aNZfjeW6"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/payment" exact>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/authentication" exact>
            <Authentication />
          </Route>
          <Route path="/checkout-product" exact>
            <CheckoutProduct />
          </Route>
          <Route path="/orders" exact>
            <Orders />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

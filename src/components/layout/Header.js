import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../Authentication/Firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;


  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <header className="header">
      <Link to="/home">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/authentication"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-option-one">
              Hello {!user ? "Guest" : user.email}{" "}
            </span>
            <span className="header-option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/products">
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two"> & Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-one">Your </span>
          <span className="header-option-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasketIcon />
            <span className="header-option-two header-basket-count ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";
import ShoppingContext from "../../context/shopping/shoppingContext";
import "./Product.css";

const Product = ({ id, image, description, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, description, rating, price } });
  };
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product-info">
        <p>{description}</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="product-price">
          {" "}
          <small>$</small> <strong>{price}</strong>
        </p>
      </div>
      <button className="product-button" onClick={addToBasketHandler}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;

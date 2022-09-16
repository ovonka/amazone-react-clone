import React, { useContext } from "react";
import ShoppingContext from "../../context/shopping/shoppingContext";
import './CheckoutProduct.css';

const CheckoutProduct = ({
    id,
    image,
    description,
    rating,
    price,
    hideButton,
}) => {
    const shoppingContext = useContext(ShoppingContext);
    const { removeFromBasket } = shoppingContext;

    const removeFromBasketHandler = () => {
        removeFromBasket({ id: id });
    }
    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={image} alt="" />
            <div className="checkout-product-info">
                <p className="checkout-product">{description}</p>
                <div className="checkout-product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <p className="checkout-product-price">
                    <small>$</small> <strong>{price}</strong>
                </p>
                {!hideButton && (
                    <button onClick={removeFromBasketHandler}>Remove From Basket</button>
                )}
            </div>

        </div>
    );
};

export default CheckoutProduct;

import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom"
import ShoppingContext from "../../../context/shopping/shoppingContext";
import './Subtotal.css'

const Subtotal = () => {
    const shoppingContext = useContext(ShoppingContext)
    const { basket, getBasketTotal } = shoppingContext;
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {" "}
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>{" "}
                        </p>{" "}
                        <small className="subtotal-gift">
                            {" "}
                            <input type="checkbox" /> This order containes a gift
                        </small>{" "}
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                prefix={"$"}
            />
            <button onClick={(e) => history.push('/payment')}> Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;

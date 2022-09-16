import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../../axios";
import ShoppingContext from "../../../context/shopping/shoppingContext";
import CheckoutProduct from "../CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    //Submit Payment button
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate the special stripe secret which will allow us to charge the customer
        console.log('running')
        const getClientSecret = async () => {
            const response = await axios({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    console.log("The secret is => ", clientSecret);


    //Button to handle payment
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: { card: elements.getElement(CardElement) },
            })
            .then(({ paymentIntent }) => {
                //Payment intent = payment confirmation
                setSucceded(true);
                setError(null);
                setProcessing(false);
                emptyBasket()
                history.push("/orders");
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? 'e.error.message' : "");
    };

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout <Link to="/checkout">{basket?.length} items </Link>{" "}
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p> 31 San Vincenzo</p>
                        <p>Johannesburg, SA</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/*stripe code*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-price-container">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order Total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    {" "}
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

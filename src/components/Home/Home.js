import React from "react";
import "./Home.css";
import Products from "../Products/Products";
//import { Route } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    className="home-image"
                    src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
                    alt="a sofa in the background"
                />
                <Products />
            </div>
        </div>
    );
};

export default Home;

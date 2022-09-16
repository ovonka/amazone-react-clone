import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
    return (
        <div>
            <div className="products-row">
                <Product
                    id="01"
                    image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
                    description="Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
                    rating={4}
                    price={76.99}
                />
                <Product
                    id="02"
                    image="https://m.media-amazon.com/images/I/81OFxhFWmML._AC_UL320_.jpg"
                    description="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant College School Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook, Grey"
                    rating={4}
                    price={29.99}
                />
            </div>
            <div className="products-row">
                <Product
                    id="03"
                    image="https://m.media-amazon.com/images/I/71ic26eWeLL._AC_UL320_.jpg"
                    description="Original HP 67 Black/Tri-color Ink Cartridges (2-pack) | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YP29AN"
                    rating={4}
                    price={76.99}
                />
                <Product
                    id="04"
                    image="https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_UL320_.jpg"
                    description="HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A), white"
                    rating={2}
                    price={50.99}
                />
                <Product
                    id="05"
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    description="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                    rating={4}
                    price={62.99}
                />
            </div>
            <div className="products-row">
                <Product
                    id="06"
                    image="https://m.media-amazon.com/images/I/71E4InwfcPL._AC_UL320_.jpg"
                    description="Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI® Cable"
                    rating={4}
                    price={36.76}
                />
            </div>

        </div>
    );
};

export default Products;

import React from "react";
import CartItem from "./cart-item/CartItem";
import './Cart.css'

function Cart() {

    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Cart</h1>
            <div className="cart-page">
                <div className="cart">
                    <CartItem name="Beef" price="200 Czk"/>
                    <CartItem name="Beef" price="200 Czk"/>
                    <CartItem name="Beef" price="200 Czk"/>
                </div>

                <div className="totals">
                    <h3>Total: 2000 CZK</h3>
                    <button className="submit-button">Submit</button>
                </div>

            </div>

        </div>
    );
}

export default Cart;
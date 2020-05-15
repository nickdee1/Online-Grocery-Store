import React from "react";
import CartItem from "./cart-item/CartItem";
import './Cart.css'
import Item from "../Item";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.price = 0;
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/cart/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    } );
                },
                (error) =>
                    this.setState( {
                        isLoaded: true, error
                    } )
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div>
                    <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Cart</h1>
                    <div>Error: {error.message}</div>
                </div>
                 )
        } else if (!isLoaded ) {
            return (
                <div>
                    <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Cart</h1>
                    <div>Loading</div>
                </div>
            )
        } else {
            return(
                <div>
                    <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Cart</h1>
                    <div className="cart-page">
                        <div className="cart">

                            {items.map(item => (
                                <CartItem name={item.name} price={item.price} id={item.id}/>
                            ))}

                        </div>

                        <div className="totals">
                            <h3>Total: {this.priceCount()} CZK</h3>
                            <button className="submit-button">Submit</button>
                        </div>

                    </div>
                </div>
            );
        }
    }


    priceCount() {
        const items = this.state.items;
        var price = 0;
        items.map(item => {
            price += item.price;
        })
        return price;
    }

}

export default Cart;
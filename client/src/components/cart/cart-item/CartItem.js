import React from "react";
import './CartItem.css'

function CartItem({name, price, id}) {
    return(
            <div className="item-placed">
                <img src={process.env.PUBLIC_URL + "/img/" + id + ".jpg"} style={{width: "20%", height: "80%"}}/>
                <h5>{name}</h5>

                <div className="counter-block">
                    <button style={{width: "30px", height: "30px", borderRadius: "15px", fontSize: "22px"}}>+</button>
                    <h4>0</h4>
                    <button style={{width: "30px", height: "30px", borderRadius: "15px", fontSize: "22px"}}>-</button>
                </div>

                <h4>{price}</h4>

                <button style={{width: "30px", height: "30px", borderStyle: 'none', backgroundColor: "#ededed", fontSize: "22px"}}>x</button>

            </div>
    );
}

export default CartItem;
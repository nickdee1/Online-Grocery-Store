import React from "react";

function Item({itemName, price, id}) {

    return(
      <div className="item">
          <img src={process.env.PUBLIC_URL + "/img/" + id + ".jpg"} style={{width: "100%", height: "40%"}} />
          <h5 style={{alignSelf: "center", fontWeight: "500", marginTop: "10px", maxHeight: "50px", marginLeft: "10px", marginRight: "10px"}}>{itemName}</h5>
          <h2 style={{alignSelf: "center", marginTop: "60px"}}>{price} Czk</h2>
          <button style={{alignSelf: "center", width: "80%", height: "30px", marginTop: "10px", backgroundColor: "white", borderRadius: "12px", fontSize: "16px"}}>Add to Cart</button>
      </div>
    );
}

export default Item;
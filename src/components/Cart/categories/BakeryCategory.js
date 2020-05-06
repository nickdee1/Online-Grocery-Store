import React from "react";
import Item from "../../Item";

function BakeryCategory() {
    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Bakery</h1>

            <div className="app">
                <Item itemName="Bread" price="18"/>
            </div>
        </div>
    );
}

export default BakeryCategory;
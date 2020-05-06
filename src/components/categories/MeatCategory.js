import React from "react";
import Item from "../Item";
import {BrowserRouter as Router} from "react-router-dom";

function MeatCategory() {
    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Meat</h1>

            <div className="app">
                <Item itemName="Beef" price="200"/>
            </div>
        </div>
    );
}

export default MeatCategory;
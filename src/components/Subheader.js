import React from "react";
import SubheadButton from "./SubheadButton";

function Subheader() {

    return(
        <div className="subheader">
            <SubheadButton name="Meat"/>
            <SubheadButton name="Bakery"/>
            <SubheadButton name="Vegetables & fruits"/>
            <SubheadButton name="Drinks"/>
        </div>
    );
}

export default Subheader;
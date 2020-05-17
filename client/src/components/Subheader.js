import React from "react";
import SubheadButton from "./SubheadButton";
import {Link} from 'react-router-dom';

function Subheader() {

    return(
        <div className="subheader">
            <Link to='/categories/meat'>
                <SubheadButton name="Meat"/>
            </Link>
            <Link to='/categories/bakery'>
                <SubheadButton name="Bakery"/>
            </Link>
            <Link to='/categories/green'>
                <SubheadButton name="Vegetables & fruits"/>
            </Link>
            <Link to='/categories/drinks'>
                <SubheadButton name="Drinks"/>
            </Link>
        </div>
    );
}

export default Subheader;
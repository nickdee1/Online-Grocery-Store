import React from "react"
import "./Header.css"


function Header() {
    return(
        <div className="header">
            <div style={{alignSelf: "center", width: "50%"}}>
                <h3 style={{color: "white"}}>Grocery Store</h3>
            </div>

            <div className="dropdown">
                <button className="header-button">
                    Cart
                </button>

                <button className="header-button">
                    Profile
                    <div className="dropdown-content">
                        <a href="#">Register</a>
                        <a href="#">Log in</a>
                    </div>
                </button>
            </div>
        </div>

    );
}

export default Header;
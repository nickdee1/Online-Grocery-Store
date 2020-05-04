import React from "react"

function Header() {
    return(
        <div className="header">
            <div style={{alignSelf: "center", width: "50%"}}>
                <h3 style={{color: "white"}}>Grocery Store</h3>
            </div>

            <div style={{alignSelf: "center", width: "50%"}}>
                <button style={{float: "right", borderStyle: "none", fontSize: "18px", color: "white", backgroundColor: "#649d66"}}>Profile</button>
                <button style={{float: "right", borderStyle: "none", fontSize: "18px", color: "white", backgroundColor: "#649d66", paddingRight: "20px"}}>Cart</button>
            </div>
        </div>

    );
}

export default Header;
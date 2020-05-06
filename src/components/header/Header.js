import React from "react"
import "./Header.css"
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";


function Header() {
    return(
        <div className="header">
            <div style={{alignSelf: "center", width: "50%"}}>
                <h3 style={{color: "white"}}>Grocery Store</h3>
            </div>

            <div className="dropdown">

                <Link to='/cart'>
                    <Button className="header-button">Cart</Button>
                </Link>

                <button className="header-button">
                    Profile
                    <div className="dropdown-content">

                        <Link to='/register'>
                            <a href="#">Register</a>
                        </Link>

                        <Link to='/login'>
                            <a href="#">Log in</a>
                        </Link>

                    </div>
                </button>
            </div>
        </div>

    );
}

export default Header;
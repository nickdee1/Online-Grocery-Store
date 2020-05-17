import React from "react";
import './LogIn.css'

function LogIn() {
    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Log In</h1>
            <div className="login">
                <form>
                    <input className="input-field" type="text" placeholder="E-mail"/>
                </form>

                <form>
                    <input className="input-field" type="password" placeholder="Password"/>
                </form>

                <button className="login-button">
                    Log In
                </button>
            </div>
        </div>
    );
}

export default LogIn;
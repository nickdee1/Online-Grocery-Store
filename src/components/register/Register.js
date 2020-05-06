import React from "react";
import '../logIn/LogIn.css'

function Register() {
    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Register</h1>
            <div className="login">
                <form>
                    <input className="input-field" type="text" placeholder="E-mail"/>
                </form>

                <form>
                    <input className="input-field" type="password" placeholder="Password"/>
                </form>

                <form>
                    <input className="input-field" type="password" placeholder="Submit Password"/>
                </form>

                <form>
                    <input type="checkbox" value="Submit Password"/> I Agree with terms
                </form>


                <button className="login-button">
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register
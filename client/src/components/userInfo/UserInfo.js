import React from "react";
import './UserInfo.css'

function UserInfo() {
    return(
        <div>
            <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>User Info</h1>
            <div className='user-info'>
                <form className="info-form">
                    <label>First Name</label>
                    <input type="text" placeholder="Adam"/>
                    <label>Second Name</label>
                    <input type="text" placeholder="Rift"/>
                    <label>E-mail</label>
                    <input type="text" placeholder="adam@rift.com"/>
                    <label>New Password</label>
                    <input type="password" placeholder="New Password"/>
                    <label>Submit New Password</label>
                    <input type="password" placeholder="Repeat Password"/>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UserInfo
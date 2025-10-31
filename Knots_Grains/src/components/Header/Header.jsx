import React from "react";

export const Header = () => {

    const loginFunc = () => {
        
    }
    return (
        <div className="header">
            <div className="logo">Knots & Grains</div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Post</li>
                    <li>Contact us</li>
                    <li>About us</li>
                </ul>
            </div>
            <div>
                <button onClick={loginFunc}>Login</button>
            </div>
        </div>
    )
}
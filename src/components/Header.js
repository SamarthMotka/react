import {LOGO} from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [btnName,setBtnName] = useState('Login');


    return (
        <div className="header" >
            <div className="logo">
                <img src={LOGO} className="logo_image" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName=="Logout"?setBtnName("Login"):setBtnName("Logout")
                    }} >{btnName} </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
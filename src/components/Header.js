import {LOGO} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName,setBtnName] = useState('Login');

    const onlineStatus = useOnlineStatus();


    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2" >
            <div className="logo">
                <img src={LOGO} className="w-24" ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex  m-4">
                    <li className="m-4">
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="m-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="m-4">
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="m-4">
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li className="m-4">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="m-4"><Link to={'/cart'}>Cart {cartItems.length}</Link> </li>
                    <button className="login" onClick={() => {
                        btnName=="Logout"?setBtnName("Login"):setBtnName("Logout")
                    }} >{btnName} </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
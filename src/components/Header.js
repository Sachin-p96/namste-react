import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    const [btnName , setbtnName ] = useState("Login")
    const handleButtonChange = () =>{
        if (btnName == "Login"){
            setbtnName("Logout")
        }
        else{
            setbtnName("Login")
        }
    }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="navbar">
          <ul className="navlist">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocerry">Grocerry Mart</Link></li>
            <li>Cart</li>
            <button onClick = {handleButtonChange}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
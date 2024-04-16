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
      <div className="flex justify-between bg-orange-400 brightness-125">
        <div className="logo-container">
          <img
            className="w-40"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex p-8 m-4 justify-between ">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocerry">Grocerry Mart</Link></li>
            <li className="px-4">Cart</li>
            <button onClick = {handleButtonChange}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
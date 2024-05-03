import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { loggedUser } = useContext(UserContext);
  const { setName } = useContext(UserContext);
  console.log(loggedUser, "hahahahahah");
  const [userName, setUserName] = useState(loggedUser);
  const handleButtonChange = () => {
    if (btnName == "Login") {
      setbtnName("Logout");
      setName("Sachin In");
    } else {
      setbtnName("Login");
      setName("Sachin Out");
    }
  };
  const cartitems = useSelector((store) =>  store.cart.items);
  return (
    <div className="flex justify-between bg-orange-400 brightness-125">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex p-8 m-4 justify-between ">
          <li className="px-4 font-serif font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-serif font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-serif font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-serif font-bold">
            <Link to="/grocerry">Grocerry Mart</Link>
          </li>
          <li className="px-4 font-serif font-bold">
            Cart -- {cartitems.length} items
          </li>

          <button onClick={handleButtonChange}>{btnName}</button>
          <li className="px-4 font-serif font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

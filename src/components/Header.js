import LOGO_URL from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status : {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} - Items)</Link>
          </li>
          <li>
            <button
              className="btn cursor-pointer"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 cursor-pointer font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
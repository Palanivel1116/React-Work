import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import {Link} from "react-router"
import useOnlineStatus from "../useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import {useSelector} from "react"
 const Header=()=>{
 
  const [btnNameReact,setbtnNameReact]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)
//  console.log(loggedInUser);

  //subscribing to the store using a selector
  //const cardItems=useSelector((store)=>store.cart.items);

    return(
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-blue-100">
        <div className="logo-container">
          <img className="w-56"
         src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4"> Online Status:{onlineStatus?"✅" :"🔴"}</li>
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="/about">About Us</Link></li>
              <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
              <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
              <li className="px-4 font-bold text-xl">Cart</li>
              <button
              className="Login"
              onClick={()=>{
                btnNameReact=="Login" 
               ? setbtnNameReact("Logout")
               :setbtnNameReact("Login");
              }}
              >
               {btnNameReact}
                </button>
                <li className= "font-bold px-4">{loggedInUser}</li>
            </ul>
          </div>
        </div>
    ); 
  };
  export default Header;
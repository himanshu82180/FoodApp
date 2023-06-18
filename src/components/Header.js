import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import store from "../Utils/store";
// import { useContext } from "react";
// import UserContext from "../Utils/UserContext";
const Header=()=>{
  // const {user} =useContext(UserContext);
  const cart=useSelector(store=>store.cart.item);
  return (
    <div className="flex justify-between bg-white shadow-lg shadow-slate-200 sticky">
      <Title />
      {/* <span className="text-white py-10">{user.name}</span> */}
      <div className="nav-item sticky">
        <ul className="flex py-6">
        <li className="px-5 text-black font-semibold hover:text-pink-300"><Link className="link-item" to="/">Home</Link></li>
          <li className="px-5 text-black font-semibold hover:text-pink-300"><Link className="link-item" to="/About">About</Link></li>
          <li className="px-5 text-black font-semibold hover:text-pink-300"><Link className="link-item" to="/Contact">Contact</Link></li>
          <li className="px-5 text-black font-semibold hover:text-pink-300"><Link className="link-item" to="/InstaMart">InstaMart</Link></li>
          <li className="px-5 text-black font-semibold hover:text-pink-300"><Link className="link-item" to="/Cart">Cart {cart.length} item</Link></li>
        </ul>
      </div>
    </div>
    
  );
};
export const Title=()=>{
  return (   
    <Link to="/">
    <img className="h-16 px-2" alt="FoodVilla" src="https://foodvilla.no/src/img/logo.png"></img>
    </Link>
  ); 
};
export default Header;
  
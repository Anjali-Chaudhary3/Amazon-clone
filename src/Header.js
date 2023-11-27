//amazon logo login etc
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
const [ { basket,user} ,dispatch]=useStateValue();
const handleAuthentication =() =>{
  if(user){
    auth.signOut();
  }
}
// console.log("this is basket 2",{basket});
  return (
    
    <div className="header">
       <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="img"
          />
       </Link> 
       {/* <div className="place" */}
      <div className="header__search">
        <input className="header__searchInput" type="text" /> 
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__option__LineOne">Hello {!user?'Guest':user.email}</span>
              <span className="header__option__LineTwo">{user? 'Sign Out': 'Sign In'}</span>
            </div>
        </Link>
        <Link to='/orders'>
        <div className="header__option">
          <span className="header__option__LineOne">Returns</span>
          <span className="header__option__LineTwo">Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__option__LineOne">Your</span>
          <span className="header__option__LineTwo">Prime</span>
        </div>
        <Link to="/checkout"> 
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
         </Link>
      </div>
    </div>
  );
}

export default Header;
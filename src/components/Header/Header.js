import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import searchIcon from "../../assets/searchIcon.svg";
import shoppingCart from "../../assets/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalState";
import { auth } from "../../firebase";

const Header = () => {
   const { user } = useAuth();
   const handleAuthentication = () => {
      auth.signOut();
   };
   return (
      <div className="header">
         {/* =====logo =====*/}
         <Link to="/">
            <img className="header-logo" src={logo} alt="logo-img" />
         </Link>

         <div className="header-search">
            <input className="header-searchInput" type="text" />
            <img
               className="header-searchIcon"
               src={searchIcon}
               alt="search-icon"
            />
         </div>

         <div className="header-nav">
            <Link to="/login">
               <div className="header-option" onClick={handleAuthentication}>
                  <span className="header-optionLineOne">
                     Hallo {user ? `${user.email}` : "Gast"}
                  </span>
                  <span className="header-optionLineTwo">
                     {user ? "Abmelden" : "Anmelden"}
                  </span>
               </div>
            </Link>

            <Link to="/orders">
               <div className="header-option">
                  <div className="header-optionLineOne">Rückgabe</div>
                  <div className="header-optionLineTwo">& Bestellung</div>
               </div>
            </Link>

            <div className="header-option">
               <div className="header-optionLineOne">Ihr</div>
               <div className="header-optionLineTwo">Prime</div>
            </div>

            <Link to="/checkout">
               <div className="header-optionBasket">
                  <img
                     className="shoping-cart-img "
                     src={shoppingCart}
                     alt="shoping-cart-img"
                  />
                  <span className="header-optionLinkLineTwo header-basketCount">
                     5
                  </span>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Header;

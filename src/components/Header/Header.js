import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import searchIcon from "../../assets/searchIcon.svg";
import shoppingCart from "../../assets/shopping-cart.png";
import './Header.css'

const Header = () => {
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
            <div className="header-option">
                <div className="header-optionLineOne">Hallo Gast</div>
                <div className="header-optionLineTwo">Anmelden</div>
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
               <img className="shoping-cart-img " src={shoppingCart} alt="shoping-cart-img"/>
               <span className="header-optionLinkLineTwo header-basketCount">5</span>

            </div>
            </Link>

         </div>
      </div>
   );
};

export default Header;

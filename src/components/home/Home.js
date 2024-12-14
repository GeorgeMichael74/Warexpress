import React from "react";
import homeImg from "../../assets/home-img.jpg"
import "./Home.css";
import Products from "../products/Products";

const Home = () => {
   return <div className="home">
    <div className="home-container">

        <img className="home-image" src={homeImg} alt="home-img"/>

        <div className="home-row">
            <Products/>
            <Products/>
        </div>

        <div className="home-row">
            <Products/>
            <Products/>
            <Products/>
        </div>

        <div className="home-row">
            <Products/>
            <Products/>
        </div>
        
    </div>
   </div>;
};

export default Home;

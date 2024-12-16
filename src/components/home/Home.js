import React from "react";
import homeImg from "../../assets/home-img-1.jpg";
import "./Home.css";
import Products from "../products/Products";
import shortid from "shortid";
import productImg1 from "../../assets/ASSET_MMS_139539961.webp";

const Home = () => {
   return (
      <div className="home">
         <div className="home-container">
            <img className="home-image" src={homeImg} alt="home-img" />

            <div className="home-row">
               <Products
                  id={shortid.generate()}
                  image={productImg1}
                  price="159,-"
                  title="NINJA AF500EU Foodi Flex Drawer Heißluftfritteuse 2470 Watt Schwarz"
                  rating={5}
               />
               <Products />
            </div>

            <div className="home-row">
               <Products />
               <Products />
               <Products />
            </div>

            <div className="home-row">
               <Products />
               <Products />
            </div>
         </div>
      </div>
   );
};

export default Home;

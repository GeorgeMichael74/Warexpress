import React from "react";
import starIcon from "../../assets/star.png";
import { useAuth } from "../context/GlobalState";
import "./Products.css";

const Products = ({ image, title, price, rating, id }) => {
   const { dispatch, basket } = useAuth();
   const addToBasket = () => {
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
         },
      });
   };
   return (
      <div className="product">
         <img src={image} alt="product-img" />

         <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
               <strong>{price}</strong>
               <small> €</small>
            </p>
         </div>

         <div className="product-rating">
            {Array(rating)
               .fill()
               .map((_, i) => (
                  <p>
                     <img src={starIcon} alt="star-icon" />
                  </p>
               ))}
         </div>

         <button onClick={addToBasket}>In den Warenkorb</button>
      </div>
   );
};

export default Products;

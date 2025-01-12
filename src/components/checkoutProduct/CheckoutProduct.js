import React from "react";
import star from "../../assets/star.png";
import { useAuth } from "../context/GlobalState";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
   const { dispatch } = useAuth();
   const removeFromBasket = () => {
      // remove item from basket
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      })
   }
   return (
      <div className="checkoutProduct">
         <img cla4ssName="checkoutProduct-image" src={image} alt="" />
         <div className="checkoutProduct-info">
            <p className="checkoutProduct-title">{title}</p>
            <p className="checkoutProduct-price">
               <small>€</small>
               <strong>{price}</strong>
            </p>
            <div className="checkoutProduct-rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => {
                     return (
                        <p>
                           <img src={star} alt="item" />
                        </p>
                     );
                  })}
            </div>

            {/* {!hiddenButton && <button>Remove from Basket</button>} */}
            <button onClick={removeFromBasket}>Remove from Basket</button>
         </div>
      </div>
   );
};

export default CheckoutProduct;

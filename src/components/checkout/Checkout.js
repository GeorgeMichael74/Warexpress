import React from "react";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import ad from "../../assets/ad.webp";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
   const { user, basket } = useAuth();
   return (
      <div className="checkout">
         <div className="checkout-left">
            <img className="checkout-ad" src={ad} alt="" />
            <div>
               <h3>Hello, {user?.email}</h3>
               <h2 className="checkout-title">Your Shopping Basket</h2>
               {basket.length > 0 ? (
                  basket.map((item) => (
                     <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  ))
               ) : (
                  <p>
                     Your Shopping Basket is empty. To buy one or more items,
                     click "Add to basket"
                  </p>
               )}
            </div>
         </div>
         <div className="checkout-right">
            <Subtotal />
         </div>
      </div>
   );
};

export default Checkout;

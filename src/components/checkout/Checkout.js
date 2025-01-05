import React from "react";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import ad from "../../assets/ad.webp";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
   const { User, basket } = useAuth();
   return (
      <div className="checkout">
         <div className="checkout-left">
            <img
               className="checkout-ad"
               src={ad}
               alt=""
            />
            <div>
               <h3>Hello, {User?.email}</h3>
               <h2 className="checkout-title">Your Shopping Basket</h2>
               {basket.map((item) => (
                  <CheckoutProduct
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />
               ))}
            </div>
         </div>
         <div className="checkout-right">
            <Subtotal />
         </div>
      </div>
   );
};

export default Checkout;

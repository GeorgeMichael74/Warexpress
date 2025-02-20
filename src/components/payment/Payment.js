import React from "react";

import "../payment/Payment.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/AppReducer";
import { CardElement } from "@stripe/react-stripe-js";

const Payment = () => {
   const { basket, user } = useAuth();
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleChange = () => {
      
   };

   return (
      <div className="payment">
         <div className="payment-container">
            <h2>
               Checkout (<Link to="/checkout">{basket.length} items</Link>)
            </h2>

            {/*===== Delivery Address =====*/}
            <div className="payment-section">
               <div className="payment-title">
                  <h3>Delivery Address</h3>
               </div>

               <div className="payment-address">
                  <p>{user?.email} </p>
                  <p>Herforst, Deutschland</p>
               </div>
            </div>

            {/* ===== Review Items ====== */}
            <div className="payment-section">
               <div className="payment-title">
                  <h3>Review items and delivery</h3>
               </div>
               <div className="payment-items">
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
 
            {/*===== Payment Method ====*/}
            <div className="payment-section">
               <h3>Payment Method</h3>
               <div className="payment-details">
                  <form onSubmit={handleSubmit}>
                     {/* ===== Stripe Card ====== */}
                     <CardElement onChange= {handleChange} />

                     <div className="payment-priceContainer">
                        <CurrencyFormat
                           renderText={(value) => <h3>Order Total : {value}</h3>}
                           decimalScale={2}
                           value={getBasketTotal(basket)}
                           displayType={"text"}
                           thousandSeparator={true}
                           prefix={"€"}
                        />
                        <button type="submit">
                           <span>Buy Now</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Payment;

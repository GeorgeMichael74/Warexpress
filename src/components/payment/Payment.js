import React from "react";

import "../payment/Payment.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

const Payment = () => {
   const { basket, user } = useAuth();

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
               <div className="payment-priceContainer"></div>
               <div className="payment-details">Stripe magic will go</div>
            </div>
         </div>
      </div>
   );
};

export default Payment;

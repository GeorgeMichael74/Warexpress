import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalState";
import { getBasketTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";

import "./Subtotal.css";

const Subtotal = () => {
   const { basket } = useAuth();
   const Navigate = useNavigate();

   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     <h2></h2>
                     Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="I">
                     <input type="checkbox" /> This order contains a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
         />
         <button onClick={()=> Navigate("/payment")}>Proceed to Checkout</button>
      </div>
   );
};

export default Subtotal;

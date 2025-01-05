import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../../contexts/AuthContext";

import "./Subtotal.css";

const Subtotal = () => {
   const { basket} = useAuth();
   return <div className="subtotal">
    <CurrencyFormat renderText={(value) => (
      <>
         <p>
            Subtotal (0 items): <strong>0</strong>
         </p>
      </>
    )} />
   </div>;
};

export default Subtotal;

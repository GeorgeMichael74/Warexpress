import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import { auth } from "./firebase.js";
import { useAuth } from "./components/context/GlobalState.js";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Checkout from "./components/checkout/Checkout.js";

const App = () => {
   const { dispatch } = useAuth();
   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            dispatch({
               type: "SET_USER",
               user: authUser,
            });
         } else {
            dispatch({
               type: "SET_USER",
               user: null,
            });
         }
      });
   }, [dispatch]);
   return (
      <div className="app">
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Header />
                     <Home />
                  </>
               }
            />
            <Route
               path="/checkout"
               element={
                  <>
                     <Header />
                     <Checkout/>
                  </>
               }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
         </Routes>
      </div>
   );
};

export default App;

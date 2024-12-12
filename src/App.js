import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js";
import { auth } from "./firebase.js";
import { useAuth } from "./components/context/GlobalState.js";

const App = () => {
   const { dispatch } = useAuth();
   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            dispatch({
               type: "SET_USER",
               user: authUser,
            });
         }else {
            dispatch({
               type: "SET_USER",
               user: null,
            }); 
         }
      });
   },[]);
   return (
      <div className="app">
         <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
         </Routes>
      </div>
   );
};

export default App;

import React, { useState } from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import "./Login.css";
// import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then((auth) => {
         if (auth) {
            navigate("/");
         }
      });
   };
   const register = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
         .then((auth) => {
            if (auth) {
               navigate("/");
            }
         })
         .catch((error) => {
            alert(error.message);
         });
   };

   return (
      <div className="login">
         <Link to="/">
            <img className="login-logo" src={Logo} alt="logo-img" />
         </Link>
         <div className="login-container">
            <h2>Anmeldung</h2>
            <form>
               <h5>Email</h5>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <h5>Password</h5>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  className="login-sigInBtn"
                  type="submit"
                  onClick={signIn}
               >
                  Anmeldung
               </button>
               <p>
                  Wenn Sie fortfahren, erklären Sie sich mit den Warexpress Fake
                  Clone Nutzungsbedingungen und dem Datenschutz einverstanden.
               </p>
               <button className="login-registerBtn" onClick={register}>
                  Erstellen Sie Ihr Warexpress-Konto
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;

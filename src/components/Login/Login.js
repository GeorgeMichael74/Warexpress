import React from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
   return (
      <div className="login">
         <Link to="/">
            <img className="login-logo" src={Logo} alt="logo-img" />
         </Link>
         <div className="login-container">
            <h2>Anmeldung</h2>
            <form>
               <h5>Email</h5>
               <input type="email" value=""></input>
               <h5>Password</h5>
               <input type="password" value=""></input>
               <button className="login-sigInBtn" type="submit">
                  Anmeldung
               </button>
               <p>
                  Wenn Sie fortfahren, erklären Sie sich mit den Warexpress Fake
                  Clone Nutzungsbedingungen und dem Datenschutz einverstanden.
               </p>
               <button className="login-registerBtn">Erstellen Sie Ihr Warexpress-Konto</button>
            </form>
         </div>
      </div>
   );
};

export default Login;

import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext"
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(from)

  return (
    <>
     <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input onChange={(e)=>setUserName(e.target.value)}  className="inn" type="text" required placeholder="Username"/>
        
        </div>
        <div className="txt_field">
          <input onChange={(e)=>{setPassword(e.target.value)}}  className="inn" type="password" placeholder="Password" required/>

          
        </div>
        <input onClick={loginHandler} type="submit" value="Login"/>
        <div className="signup_link">
          Not a member? <a href="#">SignUp</a>
        </div>
      </form>
    </div>


     
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
  }

  function loginHandler() {
    // 1: login
    // setLogin((isUserLogin) => !isUserLogin);

    loginUserWithCredentials(userName, password);

    // 2: navigate to the page we were going to before you sent us to /login page

    navigate(from, { replace: true });
  

    
  }
}
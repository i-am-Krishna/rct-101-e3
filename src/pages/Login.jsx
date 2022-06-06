import React, { useState, useContext } from "react";
import axios from "axios" ;
import { AuthContext } from "../context/AuthContext";
 import { Navigate } from "react-router-dom";

const Login = () => {


  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {isAuth,toggleAuth} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password: pass
      }
    })
      .then((res) => {
        // alert("Success");
        // toggleAuth();
      })
      .catch((err) => {
        alert("error");
      });
  };

  if (isAuth) {
    return <Navigate to="" />;
  }
 



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Login</p>
      
      <input data-cy="login-email"
     onChange={(e) => setEmail(e.target.value)}
     value={email}
     type="email"
     placeholder="enter username" />
      
       <br/> 

      <input data-cy="login-password"
       onChange={(e) => setPass(e.target.value)}
       value={pass}
       type="password"
       placeholder="enter password"
       
       />
       <br/> 
      <button data-cy="login-submit" >Submit</button>

      </form>
    
    </div>
       
  );
};

export default Login;







 
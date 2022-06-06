import React, { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";



const Navbar = () => {

  const {isAuth,logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handClick=()=>{
    if(isAuth){
      logout();
    } else{
      navigate("/login")
     }}




  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">Home </Link>
      <span data-cy="navbar-cart-items-count">5</span>
      <button data-cy="navbar-login-logout-button"  onClick={handClick}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;

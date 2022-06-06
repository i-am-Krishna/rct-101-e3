import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [isAuth,setIsAuth] = useState(false)
const logout =()=>{
  setIsAuth(false)
}
const toggleAuth=()=>{
  setIsAuth(!isAuth)
}


  return <AuthContext.Provider value={{isAuth,setIsAuth,logout,toggleAuth}}>
    {children}
    </AuthContext.Provider>;
};

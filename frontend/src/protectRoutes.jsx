import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : <navigate to="/Login" />;
};
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const ProtectRoute = ({ children }) => {
//   const nevigate = useNavigate();
//   const isAuthenticated = false;
//   useEffect(() => {
//     if (!isAuthenticated) nevigate("/login");
//   }, []);

//   return children;
// };

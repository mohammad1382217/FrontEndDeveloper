import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Authorized = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={"/"} replace />;
  } else {
    return children;
  }
};

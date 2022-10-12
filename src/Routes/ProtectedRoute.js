import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useSelector((store) => store.auth);

  return isAuth ? children : <Navigate to="login" />;
}

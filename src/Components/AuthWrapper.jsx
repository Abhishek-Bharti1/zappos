import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
// 9. user Authentication
const AuthWrapper = ({ children }) => {
  const authStatus = useSelector((store) => store.authReducer.auth);
  const location = useLocation();
  console.log(authStatus);
  if (!authStatus) {
    return <Navigate to="/login" replace={true} state={location} />;
  }
  return children;
};

export default AuthWrapper;

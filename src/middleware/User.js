import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getAuthUser } from "../helper/storage";

const User = () => {
  const auth = getAuthUser();
  return <>{auth && auth[0].Role === "User" ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default User;
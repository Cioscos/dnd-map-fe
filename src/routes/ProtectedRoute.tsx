import { useState } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: TProtectedRouteProps) => {
    return (<>{children}</>);
};

export default ProtectedRoute;
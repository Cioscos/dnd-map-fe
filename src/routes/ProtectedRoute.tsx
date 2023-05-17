import { useState } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
    children: JSX.Element,
    allowedRoles: string[]
}

const ProtectedRoute = ({ children, allowedRoles }: TProtectedRouteProps) => {
    const [isAuthorized] = useState<boolean>(() => {
        let isAuthorized = false;
        for (let i = 0; i < allowedRoles.length; i++) {
            const allowedRole = allowedRoles[i];
        }
        return isAuthorized;
    });

    return (
        <>
            {!isAuthorized ? (
        <Navigate to="not-authorized" replace={true} />
) : (
        <>{children}</>
    )}
    </>
);
};

export default ProtectedRoute;
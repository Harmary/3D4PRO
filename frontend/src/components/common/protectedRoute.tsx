import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
    role: string,
    redirectPath:string,
    children: JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    let location = useLocation();

    if ((props.role !== localStorage.getItem("userRole")) || !localStorage.getItem("userToken")) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return props.children;
}

export default ProtectedRoute;
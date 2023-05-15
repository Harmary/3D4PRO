import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
    role: string[],
    redirectPath:string,
    children: JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    let location = useLocation();

    if (localStorage.getItem("userToken") === null || !props.role.includes(localStorage.getItem('userRole') as string)) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return props.children;
}

export default ProtectedRoute;
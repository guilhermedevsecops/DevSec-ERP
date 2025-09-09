import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PathRoutes from "../config/RoutesPath";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const AppProtectedRoutes = ({allowedRoles} : ProtectedRouteProps) => {
    const token = localStorage.getItem("token");
    const userRoles = JSON.parse(localStorage.getItem("roles") || "[]" );

    if(!token) {
        return <Navigate to={PathRoutes.commonPath.login} replace/>
    }

    /*Funçao a ser ativada quando começar a mexer com as permissões
    if(allowedRoles && !allowedRoles.some(role => userRoles.includes(role))){
        console.log("Não foi redirecionado por causa daqui")
        return <Navigate to={PathRoutes.commonPath.unauthorized} replace />
        
    }*/

    return <Outlet/>;
}

export default AppProtectedRoutes
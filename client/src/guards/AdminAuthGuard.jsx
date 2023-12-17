import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext"

export default function AdminAuthGuard(props) {
    const { isAdmin } = useContext(AuthContext);


    if (!isAdmin) {

        alert('Please login as admin for access!');
        return <Navigate to="/" />;;

    }

    return <Outlet />;
}
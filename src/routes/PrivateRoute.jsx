import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading.......</p>
    }

    if (user) {
        return children;
    }

    return Navigate('/login')
};

export default PrivateRoute;
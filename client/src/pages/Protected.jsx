import {Navigate, useLocation, Outlet} from "react-router-dom";
import {useSelector} from 'react-redux'
import {all} from "axios";

const ProtectedRoute = ({allowedRoles}) => {
    const {user} = useSelector(state => state.user)
    const location = useLocation();

    if (!user || (allowedRoles && !allowedRoles?.includes(user.role))) {
        return <Navigate to="/login" replace state={{from: location}}/>;
    }

    return <Outlet/>;
};

export default ProtectedRoute;

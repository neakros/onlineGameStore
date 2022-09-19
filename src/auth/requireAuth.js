import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const auth = useSelector(state => state.auth)

    if (!auth) {
        return <Navigate to='/login'/>
    }
    return children
};

export default RequireAuth;
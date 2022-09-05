import initialStore from "../reduxStore/InitialStore";
import {LOGIN, LOGOUT} from "../reduxStore/ActionConst";

const authReducer = (auth = initialStore.auth, action) => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            return auth;
    }
}

export default authReducer
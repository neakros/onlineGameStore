import {combineReducers} from "redux";
import authReducer from "../auth/authReduxer";
import basketReducer from "./Actions";

export default combineReducers({
    auth: authReducer,
    basket: basketReducer,
})
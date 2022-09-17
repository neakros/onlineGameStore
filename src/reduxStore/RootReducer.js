import {combineReducers} from "redux";
import authReducer from "../auth/authReduxer";
import basketReducer from "./Actions";
import gamePage from "../components/GamePage/gamePageReduser";
// import moneySortActions from "../components/moneySortActions/moneySortActions";

export default combineReducers({
    auth: authReducer,
    basket: basketReducer,
    gamePage: gamePage,
})
import {combineReducers} from "redux";
import authReducer from "../auth/authReduxer";
import basketReducer from "./Actions";

import gamePage from "../components/gamePage/gamePageReduser";

export default combineReducers({
    auth: authReducer,
    basket: basketReducer,
    gamePage: gamePage,

})
import initialStore from "../../reduxStore/InitialStore";
import {INFOCART} from "../../reduxStore/ActionConst";

const gamePage = (gamePage = initialStore.currentGame, action) => {
    switch (action.type) {
        case INFOCART:
            return [gamePage = action.payload]
        default:
            return gamePage;
    }
}

export default gamePage
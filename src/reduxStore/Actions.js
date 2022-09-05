import initialStore from "./InitialStore";
import {ADDTOBASKET, REMOVEFROMBASKET} from "./ActionConst";

const basketReducer = (basket = initialStore.initialCart, action) => {
    switch (action.type) {
        case ADDTOBASKET:
            return {...basket , basket: basket.basketStore.push(action.payload)}
            // return {...basket, basketStore: action.payload}
        case REMOVEFROMBASKET:
            return {...basket, basket: basket.basketStore.filter(game => game.id !== action.payload.id)};
        default:
            return basket;
    }
}

export default basketReducer
// basket.push(action.payload);
//basket.filter(game => game.id !== action.payload.id)
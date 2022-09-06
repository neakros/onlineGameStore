import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADDTOBASKET, REMOVEFROMBASKET} from "../../reduxStore/ActionConst";

const PriceButton = ({game}) => {

    const dispatch = useDispatch()
    const gameInBasket = useSelector(state => state.basket)
    const removeFromBasket = gameInBasket.some(gameInBasket => gameInBasket.id === game.id)

    function addBasketHandler(e) {
        e.preventDefault();
        if (removeFromBasket) {
            dispatch({type:REMOVEFROMBASKET, payload:game.id})
        }
        else dispatch({type:ADDTOBASKET, payload:game})
    }
    return (

        <button onClick={(e) => addBasketHandler(e)} type='button'
                className='btn btn-outline-warning rounded-pill p-2'>
            {removeFromBasket ? 'Remove from basket' : 'Add to basket'}
        </button>
    );
};

export default PriceButton;
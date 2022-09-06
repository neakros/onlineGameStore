import React from 'react';
import './basket.scss'
import {useDispatch, useSelector} from "react-redux";
import {REMOVEFROMBASKET} from "../../reduxStore/ActionConst";

const BasketStore = ({gameTitle, gamePrise, gameId}) => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.basket)
    function deleteFromBasket(e) {
        e.preventDefault()
        dispatch({type: REMOVEFROMBASKET, payload: gameId})
    }
    return (
        <div className='basket_cart p-4 mb-2 ' key={game.id}>
            <div className='d-flex justify-content-between mb-4'>
                <div>{gameTitle}</div>
                <div>{gamePrise} грн.</div>
            </div>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-outline-warning rounded-pill p-2 mb-2 mt-2' type='button'>Place an order</button>
                <button className='btn btn-outline-danger rounded-pill p-2 mb-2 mt-2'
                onClick={(e) => deleteFromBasket(e)}
                >Remove from basket</button>
            </div>
        </div>
    );
};

export default BasketStore;
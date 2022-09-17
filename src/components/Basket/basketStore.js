import React from 'react';
import './basket.scss'
import {useDispatch} from "react-redux";
import {REMOVEFROMBASKET} from "../../reduxStore/ActionConst";

const BasketStore = ({gameTitle, gamePrise, gameId}) => {
    const dispatch = useDispatch()
    function deleteFromBasket(e) {
        e.preventDefault()
        dispatch({type: REMOVEFROMBASKET, payload: gameId})
    }
    return (
        <div className='basket_cart p-4 mb-2 ' key={gameId} >
            <div className='d-flex justify-content-between mb-4'>
                <div>{gameTitle}</div>
                <div>{gamePrise} грн.</div>
            </div>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-outline-warning rounded-pill p-2 mb-2 mt-2' type='button'>Купити гру</button>
                <button className='btn btn-outline-danger rounded-pill p-2 mb-2 mt-2'
                onClick={(e) => deleteFromBasket(e)}>Забрати з корзини</button>
            </div>
        </div>
    );
};

export default BasketStore;
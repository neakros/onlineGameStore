import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADDTOBASKET} from "../../reduxStore/ActionConst";

const PriceButton = ({game}) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.basketStore)

    function addBasketHandler(e) {
        e.stopPropagation();
        dispatch({type:ADDTOBASKET, payload:game})
    }

    return (

        <button onClick={(e) =>addBasketHandler(e)} type='button'
                className='btn btn-outline-warning rounded-pill p-2'>
            Add to basket
            {/*{console.log(state)}*/}
        </button>
    );
};

export default PriceButton;
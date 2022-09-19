import React from 'react';
import './ItemsInBasket.scss'
import {AiOutlineShoppingCart} from "react-icons/ai";

const ItemsInBasket = ({items}) => {
    return  (
        <div className='basket-icon'>
            <AiOutlineShoppingCart fontSize={25}/>
            {items > 0 ?
            <div className='items-in-basket'>
                {items}
            </div> : ''}
        </div>
    ) ;
};

export default ItemsInBasket;
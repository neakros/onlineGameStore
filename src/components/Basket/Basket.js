import React from 'react';
import {useSelector} from "react-redux";
import BasketStore from "./basketStore";

const Basket = () => {
    const game = useSelector(state => state.basket)
    const totalPrise = game.reduce((acc, game) => acc += game.price, 0)
    return (
        <div className='text-white'>
            {game.length > 0 ?
                <>
                    <div className='row mt-2 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 gap-4 justify-content-center'>
                        {game.map(game => <BasketStore
                            key={game.id}
                            gameTitle={game.title}
                            gamePrise={game.price}
                            gameId={game.id}
                            />
                        )}
                    </div>
                    <span>Загальна сумма: {totalPrise} грн.</span>
                </>
                :
                <div>
                    <span>Basket is empty</span>
                </div>}
        </div>
    );
};

export default Basket;
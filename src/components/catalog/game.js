import React from 'react';
import GameImg from "./gameImg";
import "./game.scss"
import PriceButton from "../priceButton/priceButton";

const Game = ({game}) => {
    return (
        <div>
            <div className='text-white bg-color p-5 mb-4 shadow-lg p-3 cart '>
               <GameImg image={game.image} game={game.title}/>
                {/*{console.log(game.genres)}*/}
                <span>{game.title}</span>
                <div className='mb-3 mt-3'>
                    <span>{game.genres.map(genre => genre).join(", ")}</span>
                </div>
                <div className='d-flex gap-4 text-center'>
                    <div className='mt-2'>{game.price} грн.</div>
                    <PriceButton game={game}/>
                </div>
            </div>
        </div>
    );
};

export default Game;
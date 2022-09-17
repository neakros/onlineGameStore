import React from 'react';
import GameImg from "./gameImg";
import "./game.scss"
import PriceButton from "../priceButton/priceButton";
import {useDispatch} from "react-redux";
import {INFOCART} from "../../reduxStore/ActionConst";
import {Link} from "react-router-dom";

const Game = ({game}) => {

    const dispatch = useDispatch()

    function gameHandler() {
        dispatch({type:INFOCART,payload:game})
    }
    return (
        <Link to={`game-page/${game.title}`}>
            <div className='gap-4 mt-3'  onClick={gameHandler}>
                <div className='text-white bg-color shadow-lg p-3 cart ' >
                   <GameImg image={game.image} game={game.title}/>
                    <span>{game.title}</span>
                    <div className='mb-3 mt-3'>
                        <span>{game.genres.join(", ")}</span>
                    </div>
                    <div className='d-flex gap-4 text-center'>
                        <div className='mt-2'>{game.price} грн.</div>
                        <PriceButton game={game}/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Game;
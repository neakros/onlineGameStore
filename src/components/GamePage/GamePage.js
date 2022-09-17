import React from 'react';
import {useSelector} from "react-redux";
import './currentGame.scss'
import PriceButton from "../priceButton/priceButton";

const GamePage = () => {
    const game = useSelector(state => state.gamePage)

    return (
        <div className='container wrapper p-4 d-flex row shadow-lg p-3 mt-3'>
            <h1 className='game-page-text text-center mb-5'>{game[0].title}</h1>
            <iframe
            width='90%'
            height='500px'
            src={game[0].video}
            title='Youtube video Player'
            />
            <h4 className='mb-3 mt-3 text-center text-white'>{game[0].description}</h4>
            <h4 className='game-page-text text-center mb-3'>{game[0].genres.join(', ')}</h4>
            <div className='d-flex justify-content-evenly mt-3'>
                <PriceButton game={game[0]}/>
                <span className='game-page-text'>{game[0].price} грн.</span>
            </div>
        </div>
    );
};

export default GamePage;
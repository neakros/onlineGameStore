import React from 'react';
import {useSelector} from "react-redux";

const GamePage = () => {
    const game = useSelector(state => state.currentGame)
    return (
        <div>
            
        </div>
    );
};

export default GamePage;
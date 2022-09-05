import React from 'react';
// import {useSelector} from "react-redux";
import {GAMES} from "../../reduxStore/ActionConst";
import Game from "./game"

const Catalog = () => {

    // const game = useSelector(state => state)
    // console.log(game)
    return (

        <div className='row mt-4 row-cols-sm-1 row-cols-md-2 row-cols-xl-3'
             key={GAMES.id}>
            {GAMES.map(game =><Game game={game} key={game.id}/>)}
        </div>
    );
};

export default Catalog;
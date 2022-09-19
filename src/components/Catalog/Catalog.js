import React from 'react';
import {GAMES} from "../../reduxStore/ActionConst";
import Game from "./game"
import Dropdown from "../Dropdown/Dropdown";
import {useSortGame} from "../Hook/useSortGame";

const Catalog = () => {
    const { isDescSort, setIsDescSort, sortedGames} = useSortGame(GAMES || [])
    return (
    <>
        <div className='d-flex justify-content-between p-3'>
            <button onClick={() => {setIsDescSort(!isDescSort)}}
                    type='button'
                    className={`${!isDescSort ? 'btn btn-outline-warning' 
                        : 
                        'btn btn-outline-danger'}`}>Сортувати по ціні</button>
            <Dropdown/>
        </div>
            <div className='row mt-2 row-cols-sm-1 row-cols-md-2 row-cols-xl-3'
                 key={sortedGames.id}>
                {sortedGames.map(sortedGames =><Game
                    game={sortedGames}
                    key={sortedGames.id}/>)}
            </div>
        </>

    );
};

export default Catalog;
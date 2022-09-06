import React from 'react';

const GameImg = ({image, game}) => {
    return (
        <div className='card_image mb-4'>
            <img src={`${image}`} alt={`${game}`}style={{borderRadius:25}} />
        </div>
    );
};

export default GameImg;
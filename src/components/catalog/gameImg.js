import React from 'react';

const GameImg = ({image, game}) => {
    // console.log(image)
    return (

        <div>
            {/*className='img-fluid' style={{backgroundImage: `url(${image})`}}*/}

            {/*{console.log(image)}*/}
            <img className='mb-5'  src={`${image}`} alt={`${game}`} />
        </div>
    );
};

export default GameImg;
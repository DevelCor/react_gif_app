import React from 'react';

const GifGridItem = ( {img: {title,url} } ) => {

    return (
        <div className="card ">
            <img src={url} alt={title} className="animate__animated animate__bounce"/>
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;

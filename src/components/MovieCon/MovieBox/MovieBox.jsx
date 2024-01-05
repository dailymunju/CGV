import React from 'react';
// import InfoTab from './InfoTab';
import Info from './info/Info';
import Actor from './actor/Actor';
import Trailer from './Trailer/Trailer';
// import InfoTab from './InfoTab';

const MovieBox = ({gallery,ConCategory,cateChange}) => {
    return (
        <>
        {/* <InfoTab cateChange={cateChange} ConCategory={ConCategory}/> */}
        {ConCategory === 'info' && <Info gallery={gallery} cateChange={cateChange}  ConCategory={ConCategory}/>}
        {ConCategory === 'actor' && <Actor gallery={gallery}/>}
        {ConCategory === 'trailer' && <Trailer gallery={gallery}/>}
            
        </>
    );
};

export default MovieBox;
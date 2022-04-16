/* eslint-disable */
import React from 'react';

function Item(element) {

        return (
            <div className={element.useClass}>
                    <img  src={element.item.imageUrl} alt={element.item.name}/>
                    <p className="text">{element.item.name}</p>
                    <p className="text-grey">{element.item.city}, {element.item.country}</p>
            </div>
        );
}

export default Item;

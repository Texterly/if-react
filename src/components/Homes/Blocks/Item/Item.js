/* eslint-disable */
import React from 'react';
import './Item.css';
import {Link} from "react-router-dom";

function Item(element) {

        return (
            <div className={element.useClass}>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <img  src={element.item.imageUrl} alt={element.item.name}/>
                </Link>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <p className="text">{element.item.name}</p>
                </Link>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <p className="text-grey">{element.item.city}, {element.item.country}</p>
                </Link>
            </div>
        );
}

export default Item;

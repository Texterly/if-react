/* eslint-disable */
import React from 'react';

import './Blocks.css';
import Item from "./Item/Item";

const Blocks = ({data}) => {

        return (
            <div className='homes' id='homes'>
                {data.map(element => <Item key={element.id} item={element} useClass='container-blocks'/>)}
            </div>
        );
}

export default Blocks;

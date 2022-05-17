/* eslint-disable */
import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const ContainerBlocks = styled.div`
  width: 25%;
  padding-right: 16px;

  img {
    width: 296px;
    height: 296px;
  }
`;

const Text = styled.p`
  color: #3077C6;
  margin-top: 22px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
`;

const TextGrey = styled.p`
  color: #BFBFBF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-top: 24px;
`;


function Item(element) {

        return (
            <ContainerBlocks>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <img  src={element.item.imageUrl} alt={element.item.name}/>
                </Link>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <Text>{element.item.name}</Text>
                </Link>
                <Link className='hotelLink' to={`/hotel/${element.item.id}`}>
                    <TextGrey className="text-grey">{element.item.city}, {element.item.country}</TextGrey>
                </Link>
            </ContainerBlocks>
        );
}

export default Item;

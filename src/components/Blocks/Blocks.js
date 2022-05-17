/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Item from "./Item/Item";

const Homes = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 104px;
  position: relative;
  left: 0;
  transition: all ease 1s;
`;

const Blocks = ({data}) => {

        return (
            <Homes id='homes'>
                {data.map(element => <Item key={element.id} item={element}/>)}
            </Homes>
        );
}

export default Blocks;

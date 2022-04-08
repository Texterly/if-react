/* eslint-disable */

import React from 'react';
import Homes from '../Homes/Homes';
import {useState} from "react";
import {hotels} from '../../data/data';
import AvailableHotels from "../Available Hotels/Available Hotels";
import './App.css';
import TopSection from "../Top-section/Top-section";

function App() {
    const [searchValue, setSearchValue] = useState([])

  return (
    <div className="App">
      <TopSection searchValue={searchValue} setSearchValue={setSearchValue}/>
      {/*<AvailableHotels/>*/}
      {searchValue.length > 0 && <Homes data={searchValue} title={'Available hotels'}/>}
      <Homes data={hotels} title={'Homes guests loves'} />
    </div>
  );
}

export default App;

/* eslint-disable */

import Homes from '../Homes/Homes';
import {useEffect, useState} from "react";
import {hotels} from '../../data/data';
import './App.css';
import TopSection from "../Top-section/Top-section";

function App() {
    const [searchValue, setSearchValue] = useState([])
    const [serverData, setServerData] = useState([])
    const [value, setValue] = useState('0')

    useEffect(() => {

        fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    },[])

    useEffect(()=> {
        fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${value}`)
            .then((response)=>{
                return response.json()
            })
            .then(setSearchValue)
    },[value])
  return (
    <div className="App">
      <TopSection onChange={setValue}/>
      {searchValue.length > 0 && <Homes data={searchValue} title={'Available hotels'}/>}
      {serverData.length > 0 && <Homes data={serverData} title={'Homes guests loves'} />}
    </div>
  );
}

export default App;

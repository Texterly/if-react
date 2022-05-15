/* eslint-disable */
import '../App.css';
import TopSection from "../Top-section/Top-section";
import Homes from '../Homes/Homes';
import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';


function MainPage() {
    const [searchValue, setSearchValue] = useState([])
    const [serverData, setServerData] = useState([])
    const [value, setValue] = useState('0')

    const [adultsCount, setAdultsCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(1)

    const serverUrl = 'https://fe-student-api.herokuapp.com/api/hotels'
    useEffect(() => {

        fetch(`${serverUrl}/popular`)
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    },[])

    const dateFrom = useSelector(state => state.datePickerValues.dateFrom)
    const dateTo = useSelector(state => state.datePickerValues.dateTo)
    const selectValues = useSelector(state => state.selectValue.selectValues)
    const clickSearch = useSelector(state => state.search.try)

    useEffect(()=> {
        fetch(`${serverUrl}?search=${value}&dateFrom=${dateFrom}&dateTo=${dateTo}&adults=${adultsCount}&children=${selectValues}&rooms=${roomsCount}`)
            .then((response)=>{
                return response.json()
            })
            .then(setSearchValue)
    },[clickSearch])

    const isLogin = useSelector(state => state.user.isLogged)
    const email = useSelector(state => state.user.email)
    const password = useSelector(state => state.user.password)

  return isLogin && email === 'fedya@gmail.com' && password === 'fedya123' ? (<>
    <TopSection onChange={setValue}
                adultsCount={adultsCount}
                setAdultsCount={setAdultsCount}
                childrenCount={childrenCount}
                setChildrenCount={setChildrenCount}
                roomsCount={roomsCount}
                setRoomsCount={setRoomsCount}
    />
    <main>

      {searchValue.length > 0 && <Homes data={searchValue} title={'Available hotels'}/>}

      {serverData.length > 0 && <Homes data={serverData} title={'Homes guests loves'} />}
    </main>
    <Footer  wrapper={{padding: '120px 0 104px 120px'}}/>
    </>) : (<Navigate replace to='/authorization' />)
}

export default MainPage;

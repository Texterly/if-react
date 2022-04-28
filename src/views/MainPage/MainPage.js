/* eslint-disable */
import '../App.css';
import TopSection from "../Top-section/Top-section";
import Homes from '../Homes/Homes';
import {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';


function MainPage() {
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

    const isLogin = useSelector(state => state.user.isLogged)
    const email = useSelector(state => state.user.email)
    const password = useSelector(state => state.user.password)

  return isLogin && email === 'fedya@gmail.com' && password === 'fedya123' ? (<>
    <TopSection onChange={setValue}/>
    <main>

      {(value && searchValue.length) > 0 && <Homes data={searchValue} title={'Available hotels'}/>}

      {serverData.length > 0 && <Homes data={serverData} title={'Homes guests loves'} />}
    </main>
    <Footer  wrapper={{padding: '120px 0 104px 120px'}}/>
    </>) : (<Navigate replace to='/authorization' />)
}

export default MainPage;

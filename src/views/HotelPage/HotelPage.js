/* eslint-disable */

import Nav from "../Top-section/Nav/Nav";
import './HotelPage.css';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";

function HotelPage() {
    const {id} = useParams()
    const [hotelData, setHotelData] = useState({})

    useEffect(() => {
        fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotelData(data))
    },[])

    return <div className='HotelPage'>
        <Nav wrapperStyle={{padding: '30px 32px'}}/>
        <div className='hotelBody'>
            <div>
                <h1 className='hotelInfoTittle'>{hotelData.name}</h1>
                <img className='hotelInfoImg' src={hotelData.imageUrl} alt="hotelImage"/>
            </div>
            <p className='hotelInfoText'>
                {`Hello dear user of our site! We are pleased to present you this hotel, which is located in
                ${hotelData.country} and in the city center or ${hotelData.city}. The sights of the city are densely located near
                 our hotel. Developed infrastructure. We look forward to collaborating!`}
            </p>
        </div>
        <Footer wrapper={{padding: '30px 32px'}} />
    </div>
}

export default HotelPage
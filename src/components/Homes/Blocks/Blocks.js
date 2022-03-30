/* eslint-disable */
import React from 'react';
import hotel_leopold from '../img/hotel_leopold.png';
import Apartment_Sunshine from '../img/Apartment Sunshine.png';
import Villa_Kunerad from '../img/villa.png';
import Hostel_Friendship from '../img/hostel.png';

import './Blocks.css';

class Blocks extends React.Component {
    render() {
        return (
            <div className='homes' id='homes-body'>
                <div className='container-blocks'>
                    <img src={hotel_leopold} alt='leopold'/>
                    <p className='text'>Hotel leopold</p>
                    <p className='text-grey'>Saint Petersburg, Russia</p>
                </div>
                <div className='container-blocks'>
                    <img src={Apartment_Sunshine} alt='Apartment Sunshine'/>
                    <p className='text'>Apartment Sunshine</p>
                    <p className='text-grey'>Santa Cruz de Tenerife,<br/>Spain</p>
                </div>
                <div className='container-blocks'>
                    <img src={Villa_Kunerad} alt='Villa Kunerad'/>
                    <p className='text'>Villa Kunerad</p>
                    <p className='text-grey'>Vysokie Tatry, Slowakia</p>
                </div>
                <div className='container-blocks'>
                    <img src={Hostel_Friendship} alt='Hostel Friendship'/>
                    <p className='text'>Hostel Friendship</p>
                    <p className='text-grey'>Berlin, Germany</p>
                </div>
            </div>
        );
    }
}

export default Blocks;

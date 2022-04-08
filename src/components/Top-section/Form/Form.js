/* eslint-disable */
import {useState} from 'react';
import {hotels} from '../../../data/data';

function Form ({onChange}) {

    const [search, setSearch] = useState('0')

    const handlerChange = (event) => {
        let inputValue = event.target.value.toLowerCase()
        setSearch(inputValue)
    }

    const handlerClick = () => {

        onChange(search)
    }

    return (
        <form action="" className='top-form'>
            <div className='city-field'>
                <input type='text' id='city-input' name='city-input' className='city-input' required onChange={handlerChange}/>
                <label className='city-label' htmlFor='city-input' >Your destination or hotel name</label>
                <div>
                    <svg>
                        <g>
                            <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629V10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#BFBFBF"/>
                        </g>
                    </svg>
                </div>
                <div className='button-container'>
                    <div className='calendar'>
                        <div className='calendar-before-date'>
                            <input name='calendar-b' id='calendar-before' className='calendar-before-input' type="text"/>
                            <label className='calendar-label-before' htmlFor="calendar-before">Check in</label>
                        </div>
                        <div className='calendar-after-date'>
                            <input name='calendar-a' id='calendar-after' className='calendar-after-input' type="text"/>
                            <label className='calendar-label-after' htmlFor="calendar-after">Check out</label>
                        </div>
                    </div>
                    <div className='properties properties-border-color' id='properties'>
                        <div className='adults properties-border'>
                            <input name='adults' id='adults' className='adults-input' type='text' required/>
                            <label className='adults-label' htmlFor='adults'>Adults</label>
                        </div>
                        <div className='children properties-border'>
                            <input name='children' id='children' className='children-input' type='text' required/>
                            <label htmlFor='children' className='children-label'>Children</label>
                        </div>
                        <div className='rooms properties-border'>
                            <input type='text' name='rooms' id='rooms' className='rooms-input' required/>
                            <label htmlFor='rooms' className='rooms-label'>Rooms</label>
                        </div>
                    </div>
                    <button type='button' className='search-button' id='search-button' onClick={handlerClick}>Search</button>
                </div>
            </div>
        </form>
    );
}

export default Form;
/* eslint-disable */
import {useState} from 'react';
import DatePicker from "../DatePicker/DatePicker";
import Filter from "../Filter/Filter";

function Form ({onChange}) {

    const [adultsCount, setAdultsCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(1)
    const [search, setSearch] = useState(1)

    const [stateFilter, setStateFiler] = useState(false)

    const clickFilter = (e) => {
        e.stopPropagation()
        setStateFiler(!stateFilter)
    }

    const handlerChange = (event) => {
        let inputValue = event.target.value.toLowerCase()
        setSearch(inputValue)
    }

    return (
        <form action="" className='top-form'>
            <div className='city-field'>
                <input type='text' id='city-input' name='city-input' className='city-input' required onChange={handlerChange}/>
                <label className='city-label' htmlFor='city-input' >Your destination or hotel name</label>
                <div>
                    <svg className='city-field-button'>
                        <g>
                            <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629V10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#BFBFBF"/>
                        </g>
                    </svg>
                </div>
                <div className='button-container'>
                    <DatePicker/>
                    <div className='properties properties-border-color' id='properties' tabIndex='0' onClick={clickFilter}>
                        {adultsCount} Adults — {childrenCount} Children — {roomsCount} Room
                    </div>
                    {
                        stateFilter && <Filter adultsCount={adultsCount}
                                                              childrenCount={childrenCount}
                                                              roomsCount={roomsCount}
                                                              setAdultsCount={setAdultsCount}
                                                              setChildrenCount={setChildrenCount}
                                                              setRoomsCount={setRoomsCount}/>
                    }
                    <button type='button' className='search-button' id='search-button'
                            onClick={()=>onChange(search)}>Search
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
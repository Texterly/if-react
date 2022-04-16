/* eslint-disable */
import React from 'react';

function Filter () {

    return (
        <div className='filter' id='filter'>
            <div className='filter-top'>
                <div className='filter-top-box'>
                    <p>Adults</p>
                    <p>Children</p>
                    <p>Rooms</p>
                </div>
                <div className='filter-top-box'>
                    <div className='first-minus btn-filter minus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect className='rect-color' x='0.5' y='0.5' width='29' height='29'
                                      fill='white' stroke='#3077C6'/>
                                <path d='M19.3242 16.2783H10.5176V14.9512H19.3242V16.2783Z'
                                      fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                    <div className='second-minus btn-filter minus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect x='0.5' y='0.5' width='29' height='29' fill='white' stroke='#3077C6'/>
                                <path d='M19.3242 16.2783H10.5176V14.9512H19.3242V16.2783Z' fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                    <div className='third-minus btn-filter minus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect x='0.5' y='0.5' width='29' height='29' fill='white' stroke='#3077C6'/>
                                <path d='M19.3242 16.2783H10.5176V14.9512H19.3242V16.2783Z' fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='filter-top-box'>
                    <p className='count1'>0</p>
                    <p className='count2'>0</p>
                    <p className='count3'>1</p>
                </div>
                <div className='filter-top-box'>
                    <div className='btn-filter plus first-plus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect x='0.5' y='0.5' width='29' height='29' fill='white' stroke='#3077C6'/>
                                <path d='M16.2822 15.1357H19.8506V16.6738H16.2822V20.7168H14.6475V16.6738H11.0791V15.1357H14.6475V11.4004H16.2822V15.1357Z' fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                    <div className='second-plus btn-filter plus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect x='0.5' y='0.5' width='29' height='29' fill='white' stroke='#3077C6'/>
                                <path d='M16.2822 15.1357H19.8506V16.6738H16.2822V20.7168H14.6475V16.6738H11.0791V15.1357H14.6475V11.4004H16.2822V15.1357Z' fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                    <div className='third-plus btn-filter plus'>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g>
                                <rect x='0.5' y='0.5' width='29' height='29' fill='white' stroke='#3077C6'/>
                                <path d='M16.2822 15.1357H19.8506V16.6738H16.2822V20.7168H14.6475V16.6738H11.0791V15.1357H14.6475V11.4004H16.2822V15.1357Z' fill='#3077C6'/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='filter-age'>
                <p>What is the age of the child you’re travelling with?</p>
            </div>
        </div>
    );
}

export default Filter;
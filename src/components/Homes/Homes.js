/* eslint-disable */
import React from 'react';

import Blocks from './Blocks/Blocks';
import './Homes.css';

class Homes extends React.Component {
  render() {
    return (
        <div className='container-back'>
            <div className='section'>
                <div className='container'>
                    <div className='header-text'>
                        <p className='text-primary'>Homes guests loves</p>
                    </div>
                    <Blocks/>
                </div>
            </div>
        </div>
    );
  }
}

export default Homes;

/* eslint-disable */

import Blocks from './Blocks/Blocks';
import './Homes.css';
import Title from "../Title/Title";

function Homes ({title}) {

    return (
        <div className='container-back'>
            <div className='section'>
                <div className='container'>
                    <div className='header-text'>
                        <Title text={title}/>
                    </div>
                    <Blocks/>
                </div>
            </div>
        </div>
    );
}

export default Homes;

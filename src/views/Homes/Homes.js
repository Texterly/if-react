/* eslint-disable */

import Blocks from '../../components/Blocks/Blocks';
import './Homes.css';
import Title from "../Title/Title";

function Homes ({title, data}) {
    return (
        <div className='container-back'>
            <div className='section'>
                <div className='container'>
                    <div className='header-text'>
                        <Title text={title}/>
                    </div>
                    <Blocks data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Homes;

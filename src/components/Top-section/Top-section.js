/* eslint-disable */
import Nav from "./Nav/Nav";
import Form from './Form/Form'
import './Top-section.css'
import AppStore from './images/App_Store_Badge_US-UK_RGB_blk_092917 1.png'
import Google from './images/google-play-badge.png'
import Filter from "./Filter/Filter";

function TopSection ({onChange}) {


    return (
        <div className='header'>
            <div className='header-background'>
                <div className='section-header'>
                    <Nav/>
                <div className='header-page'>
                    <div>
                        <h1>Discover stays <br/>
                            to live, work or just relax
                        </h1>
                    </div>
                    <Form onChange={onChange}/>

                    <div className='header-apps'>
                        <div>
                            <img src={Google} alt='google'/>
                        </div>
                        <div>
                            <img src={AppStore} alt='App store'/>
                        </div>
                        <Filter />
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default TopSection;

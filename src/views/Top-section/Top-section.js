/* eslint-disable */
import Nav from "./Nav/Nav";
import Form from './Form/Form'
import './Top-section.css'
import AppStore from './images/App_Store_Badge_US-UK_RGB_blk_092917 1.png'
import Google from './images/google-play-badge.png'
import {HeaderBackground, HeaderPage, SectionHeader, StyledHeader} from "./style";
import topBackgroundImg from '../../assets/img/topBackground.png'

function TopSection ({
                         onChange,
                         adultsCount,
                         setAdultsCount,
                         childrenCount,
                         setChildrenCount,
                         roomsCount,
                         setRoomsCount
}) {

    return (
        <StyledHeader background={topBackgroundImg}>
            <HeaderBackground>
                <SectionHeader>
                    <Nav/>
                    <HeaderPage>
                        <div>
                            <h1>Discover stays <br/>
                                to live, work or just relax
                            </h1>
                        </div>
                        <Form onChange={onChange}
                              adultsCount={adultsCount}
                              setAdultsCount={setAdultsCount}
                              childrenCount={childrenCount}
                              setChildrenCount={setChildrenCount}
                              roomsCount={roomsCount}
                              setRoomsCount={setRoomsCount}
                        />
                        <div className='header-apps'>
                            <div>
                                <img src={Google} alt='google'/>
                            </div>
                            <div>
                                <img src={AppStore} alt='MainPage store'/>
                            </div>
                        </div>
                    </HeaderPage>
                </SectionHeader>
            </HeaderBackground>
        </StyledHeader>
    );
}

export default TopSection;

/* eslint-disable */
import NavIcons from "../Top-section/Nav/NavIcons/NavIcons";
import Nav from "../Top-section/Nav/Nav";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import FormAuth from "./FormAuth/FormAuth";

function AuthPage () {
    const isLogin = useSelector(state => state.user.isLogged)

    return !isLogin ? (<section className='topSection'>
        <Nav accountStyle={{fill: '#F5BD41'}}/>
        <FormAuth />
    </section> ) : (<Navigate replace to='/' /> )
}

export default AuthPage
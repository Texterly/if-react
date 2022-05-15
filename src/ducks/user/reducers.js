/* eslint-disable */
import {handleActions} from 'redux-actions'
import {login, logout} from './action';

export const initialState = {
    email:'fedya@gmail.com',
    password:'fedya123',
    isLogged: false,
}

const userReducer = {
    [login]: (state) => ({
        ...state,
        isLogged: true
    }),
    [logout]: (state) => ({
        ...state,
        isLogged: false
    })
}

export default handleActions(userReducer, initialState)
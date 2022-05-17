/* eslint-disable */
import './App.css';
import './MainPage/MainPage';
import {Route, Routes} from "react-router-dom";
import HotelPage from "./HotelPage/HotelPage";
import MainPage from "./MainPage/MainPage";
import React from "react";
import AuthPage from "./AuthPage/AuthPage";
import {useSelector} from "react-redux";
import {currentTheme} from "../ducks/changeTheme/selector";
import {ThemeProvider} from "styled-components";
import {themes} from "../data/theme";

function App () {
    
    const theme = useSelector(currentTheme)

    return <>
        <ThemeProvider theme={themes[theme]}>
            <Routes>
                <Route path='authorization' element={<AuthPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='hotel/:id' element={<HotelPage />} />
            </Routes>
        </ThemeProvider>
    </>
}

export default App
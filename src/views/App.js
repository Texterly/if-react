/* eslint-disable */
import './App.css';
import './MainPage/MainPage';
import {Route, Routes} from "react-router-dom";
import HotelPage from "./HotelPage/HotelPage";
import MainPage from "./MainPage/MainPage";
import React from "react";
import AuthPage from "./AuthPage/AuthPage";

function App () {

    return <>
    <Routes>
        <Route path='authorization' element={<AuthPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='hotel/:id' element={<HotelPage />} />
    </Routes>
    </>
}

export default App
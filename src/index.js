import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HotelPage from './components/HotelPage/HotelPage';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='hotel/:id' element={<HotelPage />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();

import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BuyTicketPage, CheckQRPage, StartPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/check" element={<CheckQRPage />} />
          <Route path="/buy" element={<BuyTicketPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

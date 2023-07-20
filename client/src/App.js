import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BuyTicketPage, CheckQRPage, StartPage } from './pages';
import AddEventPage from './pages/AddEventPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/scan" element={<CheckQRPage />} />
          <Route path="/buy" element={<BuyTicketPage />} />
          <Route path="/addevent" element={<AddEventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

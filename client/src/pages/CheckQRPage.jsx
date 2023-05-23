import React from 'react';

import '../style/style.scss';

import QRREader from '../components/QRReader';
import { Modal, Navbar, Preloader } from '../components';
import spin from '../assets/images/spin.svg';

function CheckQRPage() {
  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <Preloader />
          <div className="camera">
            <QRREader />
          </div>
          <Modal />
        </div>
      </div>
    </>
  );
}

export default CheckQRPage;

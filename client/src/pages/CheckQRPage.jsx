import React from 'react';

import '../style/style.scss';

import QRREader from '../components/QRReader';
import { Modal, Navbar } from '../components';

function CheckQRPage() {
  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
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

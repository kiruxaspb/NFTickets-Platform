import React from 'react';

import '../style/style.scss';

import { Navbar, Button, Modal, Preloader } from '../components';

function StartPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          <Preloader />
          <div className="main_content">
            <h1>NFTickets</h1>
            <h2>
              Приобретайте билеты на мероприятия с помощью технологии NFT, которая гарантирует
              безопасность и надежность каждого билета и обеспечивает доступ на мероприятие. Мы
              используем блокчейн для максимальной защиты ваших билетов. Присоединяйтесь к новой эре
              билетов с NFT на нашем сайте!
            </h2>
            <div className="buttons">
              <Button path="/buy">Buy ticket</Button>
              <Button path="/check" className="inverted">
                Check QR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;

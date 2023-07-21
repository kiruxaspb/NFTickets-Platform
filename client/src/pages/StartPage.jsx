import React from 'react';

import '../style/style.scss';

import { Navbar, Button, Modal, Preloader, LineElement } from '../components';
import shield from '../assets/icons/shield.svg';
import fast from '../assets/icons/fast.svg';
import key from '../assets/icons/key.svg';
import yes from '../assets/icons/yes.svg';
import warning from '../assets/icons/warning.svg';
import wallet from '../assets/icons/wallet.svg';
import nft from '../assets/icons/nft.svg';
import star from '../assets/icons/star.svg';

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
            </div>
            <div className="rightPanel">
              <h2>
                Билеты действуют как эксклюзивный паспорт для фанатов, переосмысливая то, что значит
                быть частью сообщества. Web3 позволяет эмитентам билетов предоставлять
                привлекательные услуги и увеличивать доход от перепродажи , одновременно повышая
                лояльность и удержание клиентов.
              </h2>
              <div className="buttons">
                <Button path="/scan" className="inverted">
                  Check QR
                </Button>
              </div>
            </div>

            <h2 className="howItWorks">Как это работает?</h2>

            <h2 className="forWhat">Для пользователей</h2>

            <LineElement
              icon={warning}
              header="Надёжность"
              color="yellow"
              info="Подключите Ваш <span>кошелёк</span>, создав свою учётную запись"
            />
            <LineElement
              icon={yes}
              header="Удобство"
              color="orange"
              info="Найдите <span>мероприятие</span> и ознакомьтесь с информацией"
            />
            <LineElement
              icon={fast}
              header="Скорость"
              color="red"
              info="Приобретите <span>NFT-билет</span> и смарт-контракт создаст для Вас билет"
            />
            <LineElement
              icon={key}
              header="Доступность"
              color="purple"
              info="<span>Билет у Вас!</span> Удачи на мероприятии!"
            />

            <h2 className="forWhat right">Для организаторов</h2>
            <div className="horizontalLine"></div>

            <LineElement
              icon={wallet}
              header="Надёжность"
              color="purple"
              info="Зарегестрируйтесь, создав <span>свой профиль</span> с помощью кошелька"
              position="right"
            />
            <LineElement
              icon={star}
              header="Простота"
              color="red"
              info="
              <ul><li>Создайте <span>новое событие</span></li><li>Добавьте описание</li><li>Загрузите билеты NFT для каждого
              уровня</li><li>Введите количество билетов и цену</li><li>Опубликуйте событие на платформе</li></ul>"
              position="right"
            />
            <LineElement
              icon={nft}
              header="Доступность"
              color="yellow"
              info="<span>Билеты NFT</span> выставлены на продажу!"
              position="right"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;

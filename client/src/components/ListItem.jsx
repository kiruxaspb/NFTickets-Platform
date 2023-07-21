import React from 'react';
import ClientContext from './ClientContext';

const colors = {
  purple: '#7303c0',
  pink: '#ec38bc',
  darkPurple: '#800080',
  red: '#b20a2c',
  blue: '#3b8d99',
  blue2: '#4A00E0',
  blue3: '#7F7FD5',
  darkRed: '#240b36',
  pinkRed: '#dd3e54',
};

const randomColor = () => {
  const keys = Object.keys(colors);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return colors[randomKey];
};

const randomWidth = () => {
  return Math.floor(Math.random() * 100);
};

const randomInt = () => {
  return Math.floor(Math.random() * 500);
};

function ListItem({ name, price, date, address }) {
  return (
    <>
      <div
        className="list_block"
        style={{
          '--color': randomColor(),
          '--width': randomWidth() + 'px',
          '--height': randomWidth() + 'px',
          '--deg': randomWidth() + 'deg',
          '--color2': randomColor(),
        }}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="infoBlock">
          <div className="concertName">{name}</div>
          <div className="concertDate">{date}</div>
          <div className="priceBlock">
            <p>{price} STC</p>
            <button className="inverted">
              <ClientContext address={address} ticketPrice={price} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;

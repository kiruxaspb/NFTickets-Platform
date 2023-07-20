import React from 'react';
import ClientContext from './ClientContext';

function randomColor() {}

function ListItem({ name, price, date }) {
  return (
    <>
      <div className="list_block">
        <div className="infoBlock">
          <div className="concertName">{name}</div>
          <div className="concertDate">{date}</div>
          <div className="priceBlock">
            <p>{price} ETH</p>
            <button className="inverted">
              <ClientContext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;

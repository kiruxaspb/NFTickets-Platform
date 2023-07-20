import React from 'react';
import ClientContext from './ClientContext';

function ListItem({ name, price, image, date }) {
  return (
    <>
      <div className="list_block">
        <div className="imageBlock">
          <img src={image} alt="" />
        </div>
        <div className="infoBlock">
          <div className="concertName">{name}</div>
          <div className="concertDate">{date}</div>
          <div className="priceBlock">
            <p>{price}</p>
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

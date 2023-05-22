import React from 'react';
import ClientContext from './ClientContext';

function ListItem({ name, price }) {
  return (
    <>
      <div className="list_block">
        <div className="left_panel">
          <p>{name}</p>
        </div>
        <div className="right_panel">
          <p>{price}</p>
          <button className="inverted">
            <ClientContext />
          </button>
        </div>
      </div>
    </>
  );
}

export default ListItem;

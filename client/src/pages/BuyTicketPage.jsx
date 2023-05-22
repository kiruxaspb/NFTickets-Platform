import React from 'react';
import { ClientContext, ListItem, Navbar } from '../components';

function BuyTicketPage() {
  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <ListItem name="Something to go" price="0.0045" />
          <ListItem name="dgsfgdfgdfgdfg" price="0.0045" />
          <ListItem name="sfsdfsdfsdf" price="0.0045" />
          <ListItem name="fdhfdhdhdf" price="0.0045" />
          <ListItem name="dfhhfdhfdh" price="0.0045" />
          <ListItem name="dfhfhhdddhfdfhhf" price="0.0045" />
        </div>
      </div>
    </>
  );
}

export default BuyTicketPage;

import React from 'react';
import { ClientContext, ListItem, Navbar, Modal, Preloader } from '../components';

const concerts = [
  {
    image: 'https://nebokassa.ru/upload/corvax_iw/1_f7f31bae29e1833126afeffff3b93e20.jpg',
    name: 'VK Fest',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image: 'https://s.inyourpocket.com/gallery/213990.jpg',
    name: 'Feduk',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image:
      'https://as2.ftcdn.net/v2/jpg/03/04/53/69/1000_F_304536949_pXGRmhqiJBfecRUphHHEnlEJqE8vMPw2.jpg',
    name: 'Imaginary Friends Orchestra & Low Kick Collective',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Muse_in_Sydney.jpg/800px-Muse_in_Sydney.jpg',
    name: 'Dead Blonde',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image: 'https://www.livedivision.ru/upload/medialibrary/990/SCN_8201.jpg',
    name: 'The Hatters',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image: 'https://centobr42.ru/wp-content/uploads/2018/08/aditya-chinchure-494048-unsplash.jpg',
    name: 'Cinema Orchestra Medley',
    date: '04.07.2023',
    price: '0.45',
  },
  {
    image:
      'https://www.belpressa.ru/media/filer_public/be/ca/beca5662-1553-4c1f-bec9-a1d31a0372ed/pk_220105_193105.jpg.900x600_q75_upscale.jpg',
    name: 'Hans Zimmer’s Universe',
    date: '04.07.2023',
    price: '0.45',
  },
];

function BuyTicketPage() {
  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <Preloader />
          <div className="marketplaceBlock">
            {concerts.map((concert, index) => (
              <ListItem
                name={concert.name}
                price={concert.price}
                image={concert.image}
                date={concert.date}
              />
            ))}
          </div>
          <Modal />
        </div>
      </div>
    </>
  );
}

export default BuyTicketPage;

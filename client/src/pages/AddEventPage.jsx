import React from 'react';
import { Input, Navbar, Preloader } from '../components';

function AddEventPage() {
  const [eventInfo, setEventInfo] = React.useState({
    name: '',
    symbol: '',
    quantity: 0,
    date: '',
    price: 0,
    transferable: false,
  });

  const eventInfoHandler = (e) => {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    console.log(eventInfo);
  }, [eventInfo]);

  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <Preloader />
          <h2 className="howItWorks center">Добавить мероприятие</h2>

          <form className="eventForm">
            <Input name="name" type="text" onChange={eventInfoHandler} title="Название" />
            <Input name="symbol" type="text" onChange={eventInfoHandler} title="Символ" />
            <Input
              name="quantity"
              type="number"
              onChange={eventInfoHandler}
              title="Количество билетов"
            />
            <Input
              name="date"
              type="datetime-local"
              onChange={eventInfoHandler}
              title="Дата мероприятия"
            />
            <Input name="price" type="number" onChange={eventInfoHandler} title="Цена" />
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
              <label>Transferable</label>
              <div>
                <input
                  name="transferable"
                  type="radio"
                  id="choice1"
                  onChange={eventInfoHandler}
                  value={true}
                />
                <label htmlFor="choice1">Да</label>

                <input
                  name="transferable"
                  type="radio"
                  id="choice2"
                  onChange={eventInfoHandler}
                  value={false}
                />
                <label htmlFor="choice2">Нет</label>
              </div>
            </div>

            <Input name="reset" type="reset" value="Очистить" />
            <Input name="submit" type="submit" value="Создать" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEventPage;

import React from 'react';
import { Input, Navbar, Preloader } from '../components';
import { useSelector } from 'react-redux';

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

  const isLogin = useSelector((state) => state.IsLoginSlice.isLogin);

  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <Preloader />

          {isLogin ? (
            <form className="eventForm">
              <h2 className="howItWorks center">Добавить мероприятие</h2>
              <Input name="name" type="text" onChange={eventInfoHandler} title="Название" />
              <Input
                name="symbol"
                type="text"
                onChange={eventInfoHandler}
                title="Символ (Максимум 5 букв)"
                maxLength="5"
              />
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
              <Input
                name="price"
                type="number"
                onChange={eventInfoHandler}
                title="Цена"
                min="0.000005"
                step="0.000001"
              />
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <label style={{ fontSize: '20px' }}>Передаваемые</label>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}>
                  <div style={{ margin: '5px' }}>
                    <input
                      name="transferable"
                      type="radio"
                      id="choice1"
                      onChange={eventInfoHandler}
                      value={true}
                    />
                    <label htmlFor="choice1">Да</label>
                  </div>

                  <div style={{ margin: '5px' }}>
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
              </div>

              <Input name="reset" type="reset" value="Очистить" />
              <Input name="submit" type="submit" value="Создать" />
            </form>
          ) : (
            <h2 className="howItWorks center">Нужно авторизоваться :(</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default AddEventPage;

import React from 'react';
import { ethers, providers } from 'ethers';
import { Input, Navbar, Preloader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/slices/SpinStatusSlice';

const DEFAULT_ABI = JSON.parse(
  '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"organization","type":"address"},{"indexed":false,"internalType":"address","name":"_event","type":"address"}],"name":"EventCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allEvents","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"maxTicketSupply","type":"uint256"},{"internalType":"uint256","name":"eventStart","type":"uint256"},{"internalType":"uint256","name":"ticketPrice","type":"uint256"},{"internalType":"bool","name":"transferable","type":"bool"}],"name":"createEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllEvents","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"getEventAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]',
);
const DEFAULT_ADRESS = '0x64110149765CF53Ee09678Fb81987588f6381324';

function AddEventPage() {
  const dispatch = useDispatch();
  const [eventInfo, setEventInfo] = React.useState({
    name: '',
    symbol: '',
    quantity: 0,
    date: '',
    price: 0,
    transferable: false,
  });

  const eventInfoHandler = (e) => {
    if (e.target.name === 'date') {
      const value = Math.floor(new Date(e.target.value).getTime() / 1000);
      setEventInfo({ ...eventInfo, [e.target.name]: value });
    } else if (e.target.name === 'price') {
      const price = e.target.value * 10 ** 18;
      setEventInfo({ ...eventInfo, [e.target.name]: price });
    } else {
      setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
    }
  };

  const isLogin = useSelector((state) => state.IsLoginSlice.isLogin);

  const addEvent = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner().getAddress();
    const contract = new ethers.Contract(DEFAULT_ADRESS, DEFAULT_ABI, provider.getSigner());
    const mero = await contract.createEvent(
      eventInfo.name,
      eventInfo.symbol,
      eventInfo.quantity,
      eventInfo.date,
      eventInfo.price,
      eventInfo.transferable,
    );
    dispatch(setIsLoading(false));
  };

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
              <Input name="submit" type="submit" value="Создать" onClick={addEvent} />
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

import React from 'react';
import Web3 from 'web3';
import { ListItem, Navbar, Modal, Preloader } from '../components';
import { ethers, providers } from 'ethers';
import { useSelector } from 'react-redux';

const DEFAULT_ADRESS = '0x01d384f76A26f4c1a85FB8588E44BC8776135d51';
const MARKETPACE_ADDRESS = '0x64110149765CF53Ee09678Fb81987588f6381324';
const RPC_LINK = 'https://rpc.test.siberium.net';
// const DEFAULT_ABI = JSON.parse(
//   '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"organization","type":"address"},{"indexed":false,"internalType":"address","name":"_event","type":"address"}],"name":"EventCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allEvents","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"maxTicketSupply","type":"uint256"},{"internalType":"uint256","name":"eventStart","type":"uint256"},{"internalType":"uint256","name":"ticketPrice","type":"uint256"},{"internalType":"bool","name":"transferable","type":"bool"}],"name":"createEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllEvents","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"getEventAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]',
// );

const DEFAULT_ABI = JSON.parse(
  '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"organization","type":"address"},{"indexed":false,"internalType":"address","name":"_event","type":"address"}],"name":"EventCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allEvents","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"maxTicketSupply","type":"uint256"},{"internalType":"uint256","name":"eventStart","type":"uint256"},{"internalType":"uint256","name":"ticketPrice","type":"uint256"},{"internalType":"bool","name":"transferable","type":"bool"}],"name":"createEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllEvents","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"getEventAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]',
);

const MERO_ABI = JSON.parse(
  '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_maxTicketSupply","type":"uint256"},{"internalType":"uint256","name":"_eventStart","type":"uint256"},{"internalType":"uint256","name":"_ticketPrice","type":"uint256"},{"internalType":"bool","name":"_transferable","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"ticketId","type":"uint256"}],"name":"TicketSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"areTickertsTransferable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"eventStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEventStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFixedTicketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxTicketSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTicketSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTicketSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_transferable","type":"bool"}],"name":"setTransferability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticketSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]',
);

function BuyTicketPage() {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const contract = new ethers.Contract(DEFAULT_ADRESS, DEFAULT_ABI, provider.getSigner());

  const web3 = new Web3(RPC_LINK);
  const nftTicketContract = new web3.eth.Contract(DEFAULT_ABI, MARKETPACE_ADDRESS);
  const [allEvents, setAllEvents] = React.useState([]);
  const [eventInfo, setEventInfo] = React.useState([]);

  const isLogin = useSelector((state) => state.IsLoginSlice.isLogin);
  const ticketHash = useSelector((state) => state.TicketDataSlice.hash);
  const ticketId = useSelector((state) => state.TicketDataSlice.id);

  React.useEffect(() => {
    const getEvents = async () => {
      const allevents = await nftTicketContract.methods.getAllEvents().call();
      setAllEvents(allevents);
    };
    getEvents();
  }, []);

  React.useEffect(() => {
    console.log(allEvents);
    const data = allEvents.map(async (address, index) => {
      const newcontract = new web3.eth.Contract(MERO_ABI, address);

      const name = await newcontract.methods.name().call();
      const symbol = await newcontract.methods.symbol().call();
      const maxTicketSupply = await newcontract.methods.maxTicketSupply().call();
      const eventDate = await newcontract.methods.eventStart().call();
      const eventStart = new Date(eventDate * 1000).toLocaleString();
      const price = await newcontract.methods.ticketPrice().call();
      const ticketPrice = parseFloat((price * 10 ** -18).toFixed(18)).toString();
      const ticketSupply = await newcontract.methods.ticketSupply().call();
      return { address, name, symbol, maxTicketSupply, eventStart, ticketPrice, ticketSupply };
    });

    Promise.all(data)
      .then((results) => {
        setEventInfo(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allEvents]);

  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <Preloader />

          {isLogin ? (
            <div className="marketplaceBlock">
              {eventInfo.map((event, index) => (
                <ListItem
                  key={event.address}
                  address={event.address}
                  name={event.name}
                  symbol={event.symbol}
                  quantity={event.maxTicketSupply}
                  date={event.eventStart}
                  price={event.ticketPrice}
                  ticketSupply={event.ticketSupply}
                />
              ))}
            </div>
          ) : (
            <h2 className="howItWorks center">Нужно авторизоваться :(</h2>
          )}
          <Modal hash={ticketHash} id={ticketId} />
        </div>
      </div>
    </>
  );
}

export default BuyTicketPage;

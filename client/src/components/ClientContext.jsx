import React from 'react';
import { ethers, providers } from 'ethers';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setIsTrueQR } from '../redux/slices/QRStateSlice';
import { setShowModal } from '../redux/slices/ShowModalSlice';
import { setIsLoading } from '../redux/slices/SpinStatusSlice';

function ClientContext() {
  const dispatch = useDispatch();

  const DEFAULT_ADRESS = '0x47159378Bf64F909d7E06f4020edF9c88Dc15eB3';
  const DEFAULT_LINK = 'ipfs://QmSsdVmdr4dVcnBcCxjnoqs6nf42igvDYtvZEzhT1MzAa9';
  const DEFAULT_ABI = JSON.parse(
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  );

  const [connected, setConnected] = React.useState(false);
  const [account, setAccount] = React.useState(null);

  // const connect = async () => {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.send('eth_requestAccounts', []);
  //     const signer = await provider.getSigner().getAddress();

  //     console.log(signer);
  //     setAccount(signer);
  //     setConnected(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  async function sendTransaction() {
    try {
      dispatch(setIsLoading(true));
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner().getAddress();

      const receivedData = await axios.get('/api', {
        params: { address: signer },
      });
      console.log('received', receivedData.data);

      const contract = new ethers.Contract(DEFAULT_ADRESS, DEFAULT_ABI, provider.getSigner());
      const tx = await contract.safeMint(provider.getSigner().getAddress(), receivedData.data);

      await tx.wait();

      dispatch(setIsTrueQR(true));
      dispatch(setShowModal(true));
      dispatch(setIsLoading(false));

      console.log(tx);
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error);
    }
  }

  return (
    <>
      <div id="control">
        <div onClick={sendTransaction}>Buy</div>
      </div>
    </>
  );
}

export default ClientContext;

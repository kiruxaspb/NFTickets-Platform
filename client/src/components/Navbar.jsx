import React from 'react';
// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
// import { Web3Modal } from '@web3modal/react';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { sepolia } from 'wagmi/chains';
// import { Web3Button } from '@web3modal/react';
// import { useWeb3ModalTheme } from '@web3modal/react';
import { Link } from 'react-router-dom';
import { MetaMaskSDK } from '@metamask/sdk';
import detectEthereumProvider from '@metamask/detect-provider';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../redux/slices/IsLoginSlice';

function Navbar() {
  // const chains = [sepolia];
  // const projectId = '8b5b43fbbd61a2852c226ff2eee68ab9';

  // const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
  // const wagmiConfig = createConfig({
  //   autoConnect: true,
  //   connectors: w3mConnectors({ projectId, chains }),
  //   publicClient,
  // });
  // const ethereumClient = new EthereumClient(wagmiConfig, chains);

  // const { theme, setTheme } = useWeb3ModalTheme();

  // setTheme({
  //   themeMode: 'dark',
  //   themeVariables: {
  //     '--w3m-font-family': 'Bruno Ace SC',
  //     '--w3m-accent-color': '#f70b91',
  //     '--w3m-background-border-radius': '0px',
  //     '--w3m-container-border-radius': '0px',
  //   },
  // });

  // let signer = '';

  // const handleConnect = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const account = await provider.send('eth_requestAccounts', []);
  //   console.log(account);
  //   signer = await provider.getSigner().getAddress();
  //   console.log(signer);
  // };

  const [hasProvider, setHasProvider] = React.useState(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = React.useState(initialState);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (wallet.accounts.length > 0) {
      dispatch(setIsLogin(true));
    }
  }, [wallet]);

  React.useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        refreshAccounts(accounts);
        window.ethereum.on('accountsChanged', refreshAccounts);
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener('accountsChanged', refreshAccounts);
    };
  }, []);

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    updateWallet(accounts);
  };

  return (
    <>
      <nav>
        <div className="breadcrumbs">
          <Link to="/">
            <div className="logo">NFTickets</div>
          </Link>
          <Breadcrumbs />
        </div>
        {/* <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig> */}
        <div>
          <Button path="/addevent">Add event</Button>
          <Button className="inverted" onClick={handleConnect}>
            {`${
              wallet.accounts.length > 0 ? wallet.accounts[0].slice(0, 9) + '...' : 'Wallet connect'
            }`}
          </Button>
        </div>
      </nav>
      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}

export default Navbar;

import React from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Web3Button } from '@web3modal/react';
import { useWeb3ModalTheme } from '@web3modal/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const chains = [sepolia];
  const DEFAULT_PROJECT_ID = 'bbc8b07dd28b44958655fcdf376567b9';

  const { publicClient } = configureChains(chains, [w3mProvider({ DEFAULT_PROJECT_ID })]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ DEFAULT_PROJECT_ID, version: 1, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  const { theme, setTheme } = useWeb3ModalTheme();

  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Bruno Ace SC',
      '--w3m-accent-color': '#f70b91',
      '--w3m-background-border-radius': '0px',
      '--w3m-container-border-radius': '0px',
    },
  });

  return (
    <>
      <nav>
        <Link to="/">
          <div className="logo">NFTickets</div>
        </Link>
        <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig>
      </nav>
      <Web3Modal DEFAULT_PROJECT_ID={DEFAULT_PROJECT_ID} ethereumClient={ethereumClient} />
    </>
  );
}

export default Navbar;

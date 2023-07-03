import React from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Web3Button } from '@web3modal/react';
import { useWeb3ModalTheme } from '@web3modal/react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

function Navbar() {
  const chains = [sepolia];
  const projectId = '8b5b43fbbd61a2852c226ff2eee68ab9';

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
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
        <div className="breadcrumbs">
          <Link to="/">
            <div className="logo">NFTickets</div>
          </Link>
          <Breadcrumbs />
        </div>
        <WagmiConfig config={wagmiConfig}>
          <Web3Button />
        </WagmiConfig>
      </nav>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default Navbar;

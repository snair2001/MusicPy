import './App.css';
import Nav from './components/Nav.jsx';
import { ToastContainer} from 'react-toastify';
import Home from './components/Home.jsx';
import NFTs from './components/NFTs.jsx';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ethers } from 'ethers';
import 'react-toastify/dist/ReactToastify.css';
import Info from './components/Info.jsx';
import Mint from './components/Mint';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import React from 'react';


const App: FC = () => {
  return (
    <Context>
      <Content />
    </Context>
  )
 
}
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content: FC = () => {
  const marketplace: any= 0, setNFTitem: any = 0, nftitem: any = 0
  return (
    <div className="App">
      {/* <WalletMultiButton /> */}
      <BrowserRouter>
      <div className="App min-h-screen">
      <div className='gradient-bg-welcome h-screen w-screen'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/all-nft" element={<NFTs marketplace={marketplace} setNFTitem={setNFTitem} />}></Route>
        <Route path="/create" element={<Mint />}></Route>
        <Route path="/info" element={<Info nftitem={nftitem} />}></Route>
      </Routes>
      </div>
    </div>
      </BrowserRouter>
    </div>
  );
};



  // return (
  //   <BrowserRouter>
  //   <ToastContainer/>
  //   <div className="App min-h-screen">
  //     <div className='gradient-bg-welcome h-screen w-screen'>
  //     <Nav account={account}/>
  //     <Routes>
  //       <Route path="/" element={<Home/>}></Route>
  //       <Route path="/all-nft" element={<NFTs marketplace={marketplace} setNFTitem={setNFTitem} />}></Route>
  //       <Route path="/create" element={<Create marketplace={marketplace}  />}></Route>
  //       <Route path="/info" element={<Info nftitem={nftitem} />}></Route>
  //     </Routes>
  //     </div>
  //   </div>
  
  //   </BrowserRouter>
  // );



import React from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { ConnectProvider, useConnect } from "./api/pubConnect";

import HeaderView from './components/header/HeaderView'
import FooterView from './components/footer/FooterView'
import Assets from './view/Assets'
import Send from './view/Send'
import Mint from './view/Mint';
import CommonStyle from './style/commonStyle'
import GlobalStyle from './style/style'
import AntdOverride from './style/antdOverride'

import './App.css';

function App() {
  // const history = useNavigate();
  // const location = useLocation()

  return (
    <ConnectProvider>
      <div className="App">
        <CommonStyle />
        <GlobalStyle />
        <AntdOverride />
        <div>
          <HeaderView />

          <Routes>
            <Route path="/" element={<Assets />} />
            <Route path="/Send" element={<Send />} />
            <Route path="/Mint" element={<Mint />} />

          </Routes>
        </div>
        <FooterView />
      </div>
    </ConnectProvider>
  );
}

export default App;

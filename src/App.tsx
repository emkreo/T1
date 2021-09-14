import React from 'react';

import './App.css';

import logo from './logo.svg';
import { ChatPage } from './pages';
import {ModeSwitch} from "./modeSwitch/modeSwitch";

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <ModeSwitch />
      </header>
      <div className='app-content'>
        <ChatPage />
      </div>
    </div>
  );
}

export default App;

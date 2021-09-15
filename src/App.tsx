import {useState} from 'react';

import './App.css';

import logo from './logo.svg';
import {ChatPage} from './pages';
import {ModeSwitch} from './components/mode-switch/modeSwitch';
import {APP_CONTENT, APP_CONTENT_SIZE_LARGE, LOGO} from "./constants";

function App() {
  const [inputNormalIsOn, setInputNormalIsOn] = useState<boolean>(false);
  const [inputLargeIsOn, setInputLargeIsOn] = useState<boolean>(false);

  const modeSwitchNormalSizePage = () => {
    setInputNormalIsOn(true);
    setInputLargeIsOn(false);
  }
  const modeSwitchLargeSizePage = () => {
    setInputLargeIsOn(true);
    setInputNormalIsOn(false);
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt={LOGO}/>
        <ModeSwitch
          modeSwitchNormalSizePage={modeSwitchNormalSizePage}
          modeSwitchLargeSizePage={modeSwitchLargeSizePage}
        />
      </header>
      <div className={inputLargeIsOn ? APP_CONTENT_SIZE_LARGE : APP_CONTENT}>
        <ChatPage/>
      </div>
    </div>
  );
}

export default App;

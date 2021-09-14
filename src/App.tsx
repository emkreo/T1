import {useState} from 'react';

import './App.css';

import logo from './logo.svg';
import {ChatPage} from './pages';
import {ModeSwitch} from './mode-switch/modeSwitch';

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
        <img src={logo} className='app-logo' alt='logo'/>
        <ModeSwitch
          modeSwitchNormalSizePage={modeSwitchNormalSizePage}
          modeSwitchLargeSizePage={modeSwitchLargeSizePage}
        />
      </header>
      <div className={inputLargeIsOn ? 'app-content + size-large' : 'app-content'}>
        <ChatPage/>
      </div>
    </div>
  );
}

export default App;

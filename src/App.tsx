import React, {useState} from 'react';

import './App.css';

import logo from './logo.svg';
import {ChatPage} from './pages';
import {FontSwitcher} from "./components/font-switcher";


function App() {
    const [activeLargeMode, setActiveLargeMode] = useState<boolean>(false)
    const toggle = () => {
        setActiveLargeMode(!activeLargeMode)
    }
    return (
        <div className={activeLargeMode ? 'active' : 'app'}>
            <div>
                <header className='app-header'>
                    <img src={logo} className='app-logo' alt='logo'/>
                    <FontSwitcher
                        toggle={toggle}
                        activeLargeMode={activeLargeMode}
                        activeNormalMode={!activeLargeMode}
                    />
                </header>
            </div>
            <div className='app-content'>
                <ChatPage/>
            </div>
        </div>
    );
}

export default App;

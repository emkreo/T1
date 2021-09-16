import React, {ChangeEvent, useState} from 'react';

import './App.css';

import logo from './logo.svg';
import {ChatPage} from './pages';

function App() {

    const [isChangeFontSize, setIsChangeFontSize] = useState(false)
    const changeFontSize = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChangeFontSize(e.currentTarget.checked)
    }

    return (
        <div className='app'>
            <header className='app-header'>
                <img src={logo} className='app-logo' alt='logo'/>
                <div className='app-header-checkbox'>
                    <label className="switch">
                        <input type="checkbox" onChange={changeFontSize}/>
                            <span className="slider"></span>
                    </label>
                </div>
            </header>
            <div className={`app-content ${isChangeFontSize ? 'app-content-big-size' : ''}`}>
                <ChatPage/>
            </div>
        </div>
    );
}


export default App;

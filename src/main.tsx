import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./store";
import { CountContext } from './lib/context';

const store = configureStore({ reducer: counterSlice.reducer })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <CountContext.Provider value={store}>
            <App/>
        </CountContext.Provider>
    </Router>
)

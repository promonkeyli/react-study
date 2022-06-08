import React from 'react';
import App from './App';
import './style/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from "./store";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)

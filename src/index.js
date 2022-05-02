import store from "./redux/state.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntrieTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} 
                 dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    )
}

rerenderEntrieTree(store.getState())

store.subscribe(rerenderEntrieTree)

reportWebVitals()
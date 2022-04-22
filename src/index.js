import state, { subscribe } from "./redux/state.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntrieTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    )
}

rerenderEntrieTree(state)

subscribe(rerenderEntrieTree)

reportWebVitals()
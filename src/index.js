import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id : 0, message:"Hey, why nobody love me ?", likes:"10"},
  {id : 1, message:"Okeeeeeeeeey let's gooooo", likes:"3"},
  {id : 2, message:"gg i'back  ", likes:"300"},
  {id : 3, message:"i love you ", likes:"1221"},
]
let dialogsData = [
  { id: "1", name: "Andrew" },
  { id: "2", name: "Nastya" },
  { id: "3", name: "Igor" },
  { id: "4", name: "Dima" },
]
let message = [
{ id: "1", author: "Andrew", message : "How can i do ?" },
{ id: "2", author: "Dima", message : "Went" },
{ id: "3", author: "Nastya", message : "I love it" },
{ id: "4", author: "Me", message : "Shawty hi" },
{ id: "5", author: "You", message : "I like sneakers" },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} message ={message} dialogsData = {dialogsData}/>
    
  </React.StrictMode>
);

+
reportWebVitals();

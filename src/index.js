import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {App} from './App';
import {NotFound} from './components/NotFound';
import {Chats} from './components/Chats/Chats';
import {Profile} from './components/Profile/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }/>
            <Route path="/chats" element={ <Chats /> }>
                <Route path=":chatID" element={ <Chats /> } />
            </Route>
            <Route path="/profile" element={ <Profile /> }/>
            <Route path="*" element={ <NotFound /> }/>
        </Routes>
    </BrowserRouter>
);


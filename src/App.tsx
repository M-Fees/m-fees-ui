import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./Components/Dashboard/Dashboard";
import {Payment} from "./Components/Payment/Payment";
import {Login} from "./Components/Login/Login";
import {Account} from "./Components/Info/Account";
import { Historic } from './Components/Historic/Historic';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Dashboard/>}/>
                <Route path="/payment/:id" element={<Payment/>}/>
                <Route path="/historic/:id" element={<Historic/>}/>
                <Route path="/accounts/:id" element={<Account/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

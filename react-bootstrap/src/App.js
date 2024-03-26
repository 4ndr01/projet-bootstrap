import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav";
import Main from "./components/main";
import Challenge2 from "./components/challenge2";
import Register from "./components/register";
import Login from "./components/login";
import Profil from "./components/profil";

import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/challenge2" element={<Challenge2/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profil" element={<Profil/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
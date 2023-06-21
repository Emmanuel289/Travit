import * as React from 'react';
import './pages.routes.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './sidebar';
import { Home } from '../pages/home/home';
import { Contact } from "../pages/contact";
import { SignUp } from '../pages/signup';
import { Login } from '../pages/login/login'



function PageRouter() {

    // Wrapper that loads page components at respective urls

    return (
        <div className="toolbar">
            <Router>
                <Sidebar />
                <Routes>
                    {/* <Route path='/' element={<Home/>} /> */}
                    <Route path='/' element={<Login/>} /> // Fix duplicate
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Router>
        </div>
    );
}

export { PageRouter };

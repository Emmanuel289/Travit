import * as React from 'react';
import './toolbar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './sidebar';
import { Home } from '../pages/home';
import { Contact } from "../pages/contact";
import { SignIn, SignUp } from '../pages/auth';

function ToolBar() {
     
    return (
        <div className="toolbar">
            <Router>
            <Sidebar />
            <Routes>
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
    </Router>
        </div>
    );
}

export { ToolBar }; 
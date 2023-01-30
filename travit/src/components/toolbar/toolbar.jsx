import * as React from 'react';
import './toolbar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './sidebar';
import { Home, OurAim, OurVision } from '../pages/about';
import { Contact } from "../pages/contact";

function ToolBar() {

    return (
        <div className="toolbar">
            <Router>
            <Sidebar />
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/home/aim' element={<OurAim/>} />
                <Route path='/vision' element={<OurVision/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
    </Router>
        </div>
    );
}

export { ToolBar }; 
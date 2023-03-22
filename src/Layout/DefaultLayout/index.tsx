import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "../components/Header";
import Sidebar from "./Sidebar";


const DefaultLayout = () => {
    return (<div>
        <Header />
        <div className="container">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    </div>);
}

export default DefaultLayout;
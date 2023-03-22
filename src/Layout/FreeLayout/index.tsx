import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "~/Layout/components/Header";


const FreeLayout = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default FreeLayout;
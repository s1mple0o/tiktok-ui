import React from "react";
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';


import Header from "../components/Header";
import Sidebar from "./Sidebar";


const cx = classNames.bind(styles);

const DefaultLayout = () => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
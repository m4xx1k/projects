import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const Layout = () => {


    return <>
        <Header/>
        <main className={'max-w-screen-md mx-auto p-10'}>
            <Outlet/>
        </main>
    </>

}

export default Layout;

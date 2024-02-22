import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

// the outlet represents all of the children
const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;

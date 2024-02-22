import React from "react";
import { Outlet } from "react-router-dom";

// the outlet represents all of the children
const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    );
};

export default Layout;

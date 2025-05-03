import React from 'react'
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Toaster/>
            {children}
        </>
    )
}

export default Layout;
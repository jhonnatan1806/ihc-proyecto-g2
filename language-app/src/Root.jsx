import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';

function Root() {
	return (
        <div className='overflow-y-scroll h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>    
    );
}

export default Root;

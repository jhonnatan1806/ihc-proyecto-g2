import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/templates/Header';

function Root() {
	return (
        <div className='overflow-y-scroll h-screen'>
            <Header />
            <Outlet />
            <h1>Footer</h1>
        </div>    
    );
}

export default Root;

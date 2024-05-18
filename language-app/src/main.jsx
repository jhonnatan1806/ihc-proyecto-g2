import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import BotPage from './pages/Bot.jsx';
import ProfilePage from './pages/Profile.jsx';
import QuizzPage from './pages/Quizz.jsx';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'profile',
		element: <ProfilePage />
	},
    {
        path: 'bot',
        element: <BotPage />,
    },
    {
        path: 'quizz',
        element: <QuizzPage />,
    },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
